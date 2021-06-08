"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.objToQueryString = void 0;
const base64_1 = require("./base64");
const error_1 = __importDefault(require("./error"));
/**
 * A simple querystring.stringify alternative, so we don't need to include
 * another dependency for the browser
 */
function objToQueryString(input) {
    return Object.entries(input).map(([key, value]) => {
        if (value === undefined) {
            // skip
            return '';
        }
        else {
            return encodeURIComponent(key) + '=' + encodeURIComponent(value);
        }
    }).join('&');
}
exports.objToQueryString = objToQueryString;
/**
 * This function either obtains a new access token, or refreshes an old
 * one.
 */
async function refreshToken(options, token) {
    // The request body for the OAuth2 token endpoint
    let body;
    const previousToken = token;
    if (previousToken === null || previousToken === void 0 ? void 0 : previousToken.refreshToken) {
        body = {
            grant_type: 'refresh_token',
            refresh_token: previousToken.refreshToken
        };
        if (options.clientSecret === undefined) {
            // If there is no secret, it means we need to send the clientId along
            // in the body.
            body.client_id = options.clientId;
        }
    }
    else {
        switch (options.grantType) {
            case 'client_credentials':
                body = {
                    grant_type: 'client_credentials',
                };
                if (options.scope) {
                    body.scope = options.scope.join(' ');
                }
                break;
            case 'password':
                body = {
                    grant_type: 'password',
                    username: options.userName,
                    password: options.password,
                };
                if (options.scope) {
                    body.scope = options.scope.join(' ');
                }
                break;
            case 'authorization_code':
                body = {
                    grant_type: 'authorization_code',
                    code: options.code,
                    redirect_uri: options.redirectUri,
                    client_id: options.clientId,
                    code_verifier: options.codeVerifier,
                };
                break;
            default:
                if (typeof options.grantType === 'string') {
                    throw new Error('Unknown grantType: ' + options.grantType);
                }
                else {
                    throw new Error('Cannot obtain an access token if no "grantType" is specified');
                }
                break;
        }
    }
    const headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
    };
    let usesBasicAuth = false;
    if (options.clientSecret !== undefined) {
        usesBasicAuth = true;
        const basicAuthStr = base64_1.encode(options.clientId + ':' + options.clientSecret);
        headers.Authorization = 'Basic ' + basicAuthStr;
    }
    const authResult = await fetch(options.tokenEndpoint, {
        method: 'POST',
        headers,
        body: objToQueryString(body),
    });
    const jsonResult = await authResult.json();
    if (!authResult.ok) {
        // If we failed with a refresh_token grant_type, we're going to make one
        // more attempt doing a full re-auth
        if (body.grant_type === 'refresh_token' && options.grantType) {
            return refreshToken(options, null);
        }
        const httpError = authResult.status;
        let errorMessage;
        let oauth2Code;
        if (jsonResult.error) {
            errorMessage = 'OAuth2 error ' + jsonResult.error + '.';
            if (jsonResult.error_description) {
                errorMessage += ' ' + jsonResult.error_description;
            }
            oauth2Code = jsonResult.error;
        }
        else {
            errorMessage = 'HTTP Error ' + authResult.status + ' ' + authResult.statusText;
            if (authResult.status === 401 && usesBasicAuth) {
                errorMessage += '. It\'s likely that the clientId and/or clientSecret was incorrect';
            }
            oauth2Code = null;
        }
        throw new error_1.default(errorMessage, oauth2Code, httpError);
    }
    const newToken = {
        accessToken: jsonResult.access_token,
        expiresAt: jsonResult.expires_in ? Date.now() + (jsonResult.expires_in * 1000) : null,
        refreshToken: jsonResult.refresh_token ? jsonResult.refresh_token : null,
    };
    if (options.onTokenUpdate) {
        options.onTokenUpdate(newToken);
    }
    return newToken;
}
exports.refreshToken = refreshToken;
//# sourceMappingURL=util.js.map
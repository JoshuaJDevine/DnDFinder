"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An error class for any error the server emits.
 *
 * The 'code' property will have the oauth2 error type,
 * such as:
 * - invalid_request
 * - invalid_client
 * - invalid_grant
 * - unauthorized_client
 * - unsupported_grant_type
 * - invalid_scope
 */
class OAuthError extends Error {
    constructor(message, oauth2Code, httpCode) {
        super(message);
        this.oauth2Code = oauth2Code;
        this.httpCode = httpCode;
    }
}
exports.default = OAuthError;
//# sourceMappingURL=error.js.map
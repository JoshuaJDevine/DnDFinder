import { OAuth2Token, OAuth2Options } from './types';
/**
 * A simple querystring.stringify alternative, so we don't need to include
 * another dependency for the browser
 */
export declare function objToQueryString(input: {
    [s: string]: string | undefined;
}): string;
/**
 * This function either obtains a new access token, or refreshes an old
 * one.
 */
export declare function refreshToken(options: OAuth2Options, token: OAuth2Token | null): Promise<OAuth2Token>;

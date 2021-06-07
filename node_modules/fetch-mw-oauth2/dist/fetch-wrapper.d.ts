import { OAuth2Options as Options, OAuth2Token as Token } from './types';
export default class OAuth2 {
    options: Options;
    token: Token | null;
    /**
     * Keeping track of an active refreshToken operation.
     *
     * This will allow us to ensure only 1 such operation happens at any
     * given time.
     */
    private activeRefresh;
    /**
     * Timer trigger for the next automated refresh
     */
    private refreshTimer;
    constructor(options: Options & Partial<Token>, token?: Token | null);
    /**
     * Does a fetch request and adds a Bearer / access token.
     *
     * If the access token is not known, this function attempts to fetch it
     * first. If the access token is almost expiring, this function might attempt
     * to refresh it.
     */
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
    /**
     * This function allows the fetch-mw to be called as more traditional
     * middleware.
     *
     * The function takes a Request object, and a next() function that
     * represents the next 'fetch' function in the chain.
     */
    fetchMw(request: Request, next: (request: Request) => Promise<Response>): Promise<Response>;
    /**
     * Returns current token information.
     *
     * There result object will have:
     *   * accessToken
     *   * expiresAt - when the token expires, or null.
     *   * refreshToken - may be null
     */
    getToken(): Promise<Token>;
    /**
     * Returns an access token.
     *
     * If the current access token is not known, it will attempt to fetch it.
     * If the access token is expiring, it will attempt to refresh it.
     */
    getAccessToken(): Promise<string>;
    /**
     * Forces an access token refresh
     */
    refreshToken(): Promise<Token>;
    private scheduleRefresh;
}

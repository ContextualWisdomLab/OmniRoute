/** Bind the anti-forgery state value to an OIDC authorization request. */
export function bindAuthorizationState(authorizationUrl: URL, authorizationState: string): void {
  authorizationUrl.searchParams.set("state", authorizationState);
}

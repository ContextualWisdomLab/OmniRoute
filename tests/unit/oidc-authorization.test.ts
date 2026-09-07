import test from "node:test";
import assert from "node:assert/strict";
import { bindAuthorizationState } from "../../src/lib/auth/oidcAuthorization.ts";

test("OIDC authorization request carries the callback state", () => {
  const authorizationUrl = new URL("https://idp.test/oauth2/authorize?client_id=test-client");

  bindAuthorizationState(authorizationUrl, "test-oidc-state");

  assert.equal(authorizationUrl.searchParams.get("state"), "test-oidc-state");
  assert.equal(authorizationUrl.searchParams.get("client_id"), "test-client");
});

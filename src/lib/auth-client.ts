import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  /** The base URL of the server (optional if you're using the same domain) */
  baseURL: "http://localhost:3000",
});

// For Production - https://neurowolf.vedantlamba.com
// For Development - http://localhost:3000
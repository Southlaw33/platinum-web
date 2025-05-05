import { createAuthClient } from "better-auth/client";
import { serverUrl } from "@/lib/environment";

export const betterAuthClient = createAuthClient({
  baseURL: serverUrl,
  basePath: "/authentications",
});

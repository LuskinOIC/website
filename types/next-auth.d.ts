import NextAuth, { DefaultSession } from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** Contentful space ID and access token */
      spaceId?: string;
      token?: string;
    } & DefaultSession["user"];
  }
}

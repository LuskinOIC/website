import NextAuth from "next-auth";

export default NextAuth({
  providers: [],
  callbacks: {
    async session({ session }) {
      session.user.spaceId = process.env.CONTENTFUL_SPACE_ID as string;
      session.user.token = process.env.CONTENTFUL_ACCESS_TOKEN as string;

      return session;
    },
  },
});

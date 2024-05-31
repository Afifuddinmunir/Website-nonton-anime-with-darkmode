import NextAuth from "next-auth/next";
import githubAuth from "next-auth/providers/github";

const authOption = {
  providers: [
    githubAuth({
      clientId: "",
      clientSecret: "",
    }),
  ],
};

const handler = NextAuth;

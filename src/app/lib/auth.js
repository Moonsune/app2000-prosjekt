import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: 'your_secret_key_here' // Set your secret key here
});

export { handlers, auth, signIn, signOut };

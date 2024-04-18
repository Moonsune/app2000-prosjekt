// Laget av Markus Moen Magnussen

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import GitHubProvider from "next-auth/providers/github";

export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            authorization: {
                params: { scope: 'read:user' }
            }
        }),
    ],
    callbacks: {
        redirect: async ({ url, baseUrl }) => {
            return baseUrl + '/'; // Ensure `baseUrl` is correctly determined.
        },
    },
    site: process.env.NEXT_PUBLIC_BASE_URL,

    pages: {
        signIn: '/serveractiontest',
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
});

// Laget av Markus Moen Magnussen

import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

// Under andre omstendigheter ville vi også ha inkludert andre innloggingsmetoder i tillegg github


// lagret som strings, ikke numre!
// TODO: potensielt ikke den sikreste løsninga
const adminGithubIds = ['99993823', '113191400'];

// litt usikker på hvordan denne export greia fungerer
// vet at NextAuth er deconstructed men ikke nødvendigvis hva det gjør
export const { handlers:{GET, POST}, auth, signIn, signOut } = NextAuth({
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],
    events: {
    },

    // dette definerer hva som skjer når du prøver  å autentisere
    callbacks: {
        jwt: async ({token, account, user}) => {
            if (account) {
                token.accessToken = account.access_token;
                // sjekker om rollen i token er admin eller user
                token.role = adminGithubIds.includes(account.providerAccountId) ? 'admin' : 'user';
            }
            return token;
        },
        session: async ({session, token}) => {
            if (token.role) {
                session.user.role = token.role;
            }
            return session;
        }
    },
    site: process.env.NEXT_PUBLIC_BASE_URL,

    pages: {
        signIn: process.env.LOGIN_PATH,
    },
    secret: process.env.AUTH_SECRET,
    session: {
        strategy: 'jwt',
    },
    // konfigurer JSON web token
    jwt: {
        secret: process.env.AUTH_SECRET,
        encryption: true,
    }
});

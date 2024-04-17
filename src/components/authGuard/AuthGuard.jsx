import {signIn, useSession} from "next-auth/react";
import {useRouter} from "next/router";
import {useEffect} from "react";

export default function AuthGuard({ children }) {
    const { data: session, status } = useSession();

    useEffect(() => {
        // Wait until the session is checked
        if (status === "loading") return;

        // If not authenticated, redirect to the login page
        if (status !== "authenticated") {
            signIn( { callbackUrl: '/' }); // Customize the login method and redirect URL as needed
        }
    }, [session, status]);

    if (status === "authenticated") {
        return children; // Render children when the user is authenticated
    }

    // Optional: Return a loading state or null while checking authentication status
    return <div>Loading or not authorized...</div>;
}

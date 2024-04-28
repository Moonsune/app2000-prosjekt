// Laget av Markus Moen Magnussen

import { useSession, signIn, signOut } from "next-auth/react";

const LoginLogoutButton = () => {
    const { data: session, status } = useSession();


    const handleAuthAction = async () => {
        if (session) {
            // If there's a session, it means the user is logged in, so log them out
            await signOut({ redirect: true, callbackUrl: process.env.HOME_PATH }); // Setting redirect to false keeps the user on the current page
            console.log('Logged out');
        } else {
            // If there's no session, the user is logged out, so log them in
            await signIn('github', { redirect: true, callbackUrl: process.env.MENU_PATH }); // You can customize the callbackUrl as needed
        }
    };

    return (
        <button onClick={handleAuthAction}>
            {session ? 'Logg ut' : 'Logg inn med GitHub'}
        </button>
    );
};

export default LoginLogoutButton;

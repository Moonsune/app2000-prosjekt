import { useSession, signIn, signOut } from "next-auth/react";

const LoginLogoutButton = () => {
    const { data: session, status } = useSession();

    console.log('session: ', session, '\nStatus: ', status);

    const handleAuthAction = async () => {
        if (session) {
            // If there's a session, it means the user is logged in, so log them out
            await signOut({ callbackUrl: '/' }); // Setting redirect to false keeps the user on the current page
            console.log('Logged out');
        } else {
            // If there's no session, the user is logged out, so log them in
            await signIn('github', { callbackUrl: '/' }); // You can customize the callbackUrl as needed
        }
    };

    return (
        <button onClick={handleAuthAction}>
            {session ? 'Log out' : 'Log in with GitHub'}
        </button>
    );
};

export default LoginLogoutButton;

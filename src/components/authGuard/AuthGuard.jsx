// laget av Markus Moen Magnussen

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function AuthGuard({ children }) {
    const { data: session, status } = useSession();
    console.log(session)

    if (status === "loading")
        return <p>Laster</p>;
    if (!session || session.user.role !== 'admin') {
        redirect("/menu");
        return <p>Access Denied</p>;
    }

    return children;
}


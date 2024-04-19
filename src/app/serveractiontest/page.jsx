//Laget av Markus Moen Magnussen
"use client"

import UpdatePostComponent from '@/components/updateMenuItem/updateMenuItem';
import DeleteDropdownList from "@/components/deleteMenuItem/DeleteDropdownList";
import AuthGuard from "@/components/authGuard/AuthGuard";
import {getSession, SessionProvider} from "next-auth/react";
import CreateMenuItem from "@/components/createMenuItem/CreateMenuItem";



const ServerActionTestPage = () => {

    return (
        // Alt er satt inn under en session provider sånn at AutgGuard fungerer
        <SessionProvider>
            {/*Auth guard sjekker om brukeren er autentisert før de kan endre på menyen*/}
            <AuthGuard>
                <div>
                        <CreateMenuItem />
                    <div>
                        <UpdatePostComponent />
                    </div>
                    <div>
                        <DeleteDropdownList />
                    </div>
                </div>
            </AuthGuard>
        </SessionProvider>
    );
};

export default ServerActionTestPage;

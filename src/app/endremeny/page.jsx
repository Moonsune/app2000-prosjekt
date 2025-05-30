//Laget av Markus Moen Magnussen
"use client"

import UpdatePostComponent from '@/components/updateMenuItem/updateMenuItem';
import DeleteDropdownList from "@/components/deleteMenuItem/DeleteDropdownList";
import AuthGuard from "@/components/authGuard/AuthGuard";
import {SessionProvider} from "next-auth/react";
import CreateMenuItem from "@/components/createMenuItem/CreateMenuItem";
import AddressInput from "@/components/addressInput/AddressInput";



const EndreMenySide = () => {

    return (
        // Alt er satt inn under en session provider sånn at AutgGuard fungerer
        <SessionProvider>
            {/*Auth guard sjekker om brukeren er autentisert før de kan endre på menyen*/}
            <AuthGuard>
                <div>
                    <div>
                        <CreateMenuItem />
                    </div>
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

export default EndreMenySide;

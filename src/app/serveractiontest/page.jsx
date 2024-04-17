//Laget av Markus Moen Magnussen
"use client"
import { addPost, deletePost } from '../lib/actions';
import UpdatePostComponent from '@/components/updateMenuItem/updateMenuItem';
import DeleteDropdownList from "@/components/deleteMenuItem/DeleteDropdownList";
import AuthGuard from "@/components/authGuard/AuthGuard";
import { SessionProvider } from "next-auth/react";
import CreateMenuItem from "@/components/createMenuItem/CreateMenuItem";

const ServerActionTestPage = () => {
    return (
        // Wrap the entire component hierarchy under SessionProvider
        <SessionProvider>
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

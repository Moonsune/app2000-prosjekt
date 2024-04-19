"use client"

import {SessionProvider} from "next-auth/react";
import LoginLogoutButton from "@/components/loginLogoutButton/LoginLogoutButton";
import React from "react";

// TODO: gjør finere :)
export const SignIn = () => {
    return (
    <SessionProvider>
        <LoginLogoutButton />
    </SessionProvider>
    )
}

export default SignIn;
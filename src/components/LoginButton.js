import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginButton.css'

function LoginButton() {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return (
        !isAuthenticated && (
            <button className="signin" onClick={() => loginWithRedirect()}> 
                Sign In
            </button>
        )
    )
}

export default LoginButton;
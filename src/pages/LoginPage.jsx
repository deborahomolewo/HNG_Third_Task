import React from "react";
import LoginButton from "../components/LoginButton";
import LogoutButton from "../components/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import './LoginPage.css';

function Login() {
    const { isLoading, error } = useAuth0();
    return (
    <div className="info">
      <h1>Welcome, to Image Gallery App</h1>
        {error && <p>Authentication Error</p>}
        {!error && isLoading && <div className="spinner"></div>}
        {!error && !isLoading && (
          <div>
            <LoginButton />
            <LogoutButton />
            </div>
        )}
      </div>
    );
}


export default Login;
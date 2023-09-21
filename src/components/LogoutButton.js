import { useAuth0 } from "@auth0/auth0-react";
import './LogoutButton.css'

function LogoutButton() {
    const { logout, isAuthenticated } = useAuth0();
    return (
        isAuthenticated && (
            <button className="signout" onClick={() => logout()}>
                Sign Out 
            </button>
        )
        
    )
} 

export default LogoutButton;
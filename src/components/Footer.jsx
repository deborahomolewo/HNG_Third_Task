import React from "react";
import '../components/Footer.css'
function Footer() {
    return (
        <div className="footer">
        <div className="icons"> 
        <i className="bi bi-facebook"></i>
        <i className="bi bi-instagram"></i>
        <i className="bi bi-twitter"></i>
        <i className="bi bi-youtube"></i>
        </div>
        <div className="privacy">
                <p>Conditions of Use</p>
                <p>Privacy & Policy</p>
                <p>Press Room</p>
            </div>
            <div className="copyright">
        <p>&copy; 2023 Image-Gallery by Deborah Omolewo</p>
        </div>
        </div>
    );
};


export default Footer;
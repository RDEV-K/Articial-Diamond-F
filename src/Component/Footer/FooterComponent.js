import React from "react";
import './style.css';
import {useNavigate} from "react-router-dom";

const FooterComponent = () => {
    const navigate = useNavigate();

    const goToPrivacyPolicy = () => {
        localStorage.removeItem('activeKey')
        navigate("/privacy-policy")
    }

    const goToTermsConditions = () => {
        localStorage.removeItem('activeKey')
        navigate("/terms-and-conditions")
    }

    const goToContactPage = () => {
        localStorage.removeItem('activeKey')
        navigate("/need-help")
    }

    return (
        <>
            <div className='footer-component'>
                <span> © 2024, Labnet. All rights reserved.</span>
                <span><a href='' onClick={() => goToPrivacyPolicy()}>Privacy Policy</a></span>
                <span>|</span>
                <span><a href='' onClick={() => goToTermsConditions()}>Terms of Service</a></span>
                <span>|</span>
                <span><a href='' onClick={() => goToContactPage()}>Contact Us</a></span>
            </div>
        </>
    );
}

export default FooterComponent;

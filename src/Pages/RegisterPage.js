import React from 'react';
import HeaderComponent from "../Component/RegisterHeader/RegisterHeader";
import RegisterComponent from "../Component/RegisterComponent/RegisterComponent";
import FooterComponent from '../Component/RegisterFooter/RegisterFooter';
const RegisterPage = ({ setIsAuthenticated }) => {

    return (
        <div>
            <HeaderComponent />
            <RegisterComponent />
            <FooterComponent />
        </div>
    );
};

export default RegisterPage;

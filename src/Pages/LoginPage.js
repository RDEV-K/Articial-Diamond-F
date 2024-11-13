import React from 'react';
import HeaderComponent from "../Component/Header/Header";
import LoginComponent from "../Component/LoginComponent/LoginComponent";

const LoginPage = ({ setIsAuthenticated }) => {

    return (
        <div>
            <HeaderComponent />
            <LoginComponent />
        </div>
    );
};

export default LoginPage;

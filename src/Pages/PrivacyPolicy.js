import HeaderComponent from "../Component/Header/Header";
import React from "react";
import FooterComponent from "../Component/Footer/FooterComponent";
import PrivacyPolicyComponent from "../Component/PrivacyPolicy/PrivacyPolicyComponent";

const PrivacyPolicy = () => {

    return (
        <>
            <HeaderComponent />
            <PrivacyPolicyComponent />
            <FooterComponent />
        </>
    );
}

export default PrivacyPolicy;

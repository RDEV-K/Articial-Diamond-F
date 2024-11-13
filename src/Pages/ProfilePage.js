import HeaderComponent from "../Component/Header/Header";
import React from "react";
import FooterComponent from "../Component/Footer/FooterComponent";
import ProfileComponent from "../Component/ProfileComponent/ProfileComponent";

const ProfilePage = () => {

    return (
        <>
            <HeaderComponent/>
            <ProfileComponent />
            <FooterComponent/>
        </>
    );
}

export default ProfilePage;

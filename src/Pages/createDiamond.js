import HeaderComponent from "../Component/Header/Header";
import React from "react";
import FooterComponent from "../Component/Footer/FooterComponent";
import CreateDiamondComponent from "../Component/createDiamondComponent/createDiamondComponent";

const CreateDiamond = () => {

    return (
        <>
            <HeaderComponent/>
            <CreateDiamondComponent />
            <FooterComponent/>
        </>
    );
}

export default CreateDiamond;

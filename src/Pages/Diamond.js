import React from 'react';
import DiamondTable from '../Component/DiamondTable/DiamondTable';
import HeaderComponent from '../Component/Header/Header';
import FooterComponent from "../Component/Footer/FooterComponent";

const Diamond = () => {
  return (
    <div>
        <HeaderComponent />
        <DiamondTable />
        <FooterComponent />
    </div>
  );
};

export default Diamond;

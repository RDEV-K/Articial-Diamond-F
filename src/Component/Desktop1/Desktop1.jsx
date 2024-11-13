import React from "react";
import { Frame } from "../Frame/Frame";
// import hero from "./hero.png";
// import image1 from "./image-1.png";
// import image from "./image.png";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      {/* <img className="hero" alt="Hero" src={hero} /> */}
      <div className="content">
        <div className="promo">
          <div className="title">
            <p className="whether-you-re-a">
              WHETHER YOU&#39;RE A BUYER OR A SELLER, LABNET HAS THE PERFECT MEMBERSHIP OPTION FOR YOU.
            </p>
            <p className="text-wrapper">Join Labnet and unlock exclusive access to lab-grown diamonds and more!</p>
          </div>
        </div>
        <div className="sign-up">
          {/* <img className="image" alt="Image" src={image} /> */}
          <div className="col">
            <div className="buttons">
              <button className="button">
                <div className="signup-as-buyer">SIGNUP AS BUYER</div>
              </button>
              <button className="signup-as-seller-wrapper">
                <div className="div">SIGNUP AS SELLER</div>
              </button>
            </div>
            <p className="p">
              All prices are in USD. Plans can be canceled at any time in accordance with our terms and conditions.
              Accepting Visa, Master Card, American Express, and Discover.
            </p>
            {/* <img className="img" alt="Image" src={image1} /> */}
          </div>
        </div>
        <div className="questions">
          <Frame className="frame-instance" />
          <Frame className="icon-instance-node" />
          <div className="text">
            <div className="text-wrapper-2">Have any questions?</div>
            <p className="text-wrapper-3">
              Our highly trained and friendly Customer Service representatives are always here to answer your questions
              about our products, integrations, or any other queries you have.
            </p>
          </div>
          <button className="contact-us-wrapper">
            <div className="div">CONTACT US</div>
          </button>
        </div>
      </div>
      <footer className="footer">
        <div className="row">
          <div className="logo">
            <div className="text-wrapper-4">Labnet</div>
            <div className="text-wrapper-5">Global Lab-grown diamond inventory</div>
          </div>
        </div>
        <div className="row-2">
          <div className="menu">
            <div className="text-wrapper-6">About Us</div>
            <div className="text-wrapper-6">Contact Us</div>
          </div>
          {/* <img className="img" alt="Image" src={image1} /> */}
        </div>
        <div className="row-3">
          <p className="text-wrapper-7">© 2024 Labnet. All rights reserved.</p>
          <div className="links">
            <div className="text-wrapper-7">Terms and conditions</div>
            <div className="text-wrapper-7">Privacy policy</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

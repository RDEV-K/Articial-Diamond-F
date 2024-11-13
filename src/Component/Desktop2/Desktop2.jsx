import React from "react";
import frame from "./frame.svg";
import hero from "./hero.png";
import image1 from "./image-1.png";
import image from "./image.png";
import styled from "styled-components";

const StyledDesktop = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const StyledHero = styled.img`
  align-self: stretch;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
`;

const StyledContent = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const StyledPromo = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  padding: 192px 68px 0px;
  position: relative;
  width: 100%;
`;

const StyledTitle = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 48px;
  position: relative;
  width: 100%;
`;

const WhetherYouReABuyer = styled.p`
  color: #daa14c;
  font-family: "Jost-Medium", Helvetica;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1.12px;
  line-height: 21px;
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

const TextWrapper = styled.p`
  align-self: stretch;
  color: #30373e;
  font-family: "Bona Nova-Regular", Helvetica;
  font-size: 50px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 60px;
  position: relative;
  text-align: center;
`;

const StyledSignUp = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 40px;
  padding: 160px 68px;
  position: relative;
  width: 100%;
`;

const StyledImage = styled.img`
  height: 671px;
  object-fit: cover;
  position: relative;
  width: 628px;
`;

const StyledCol = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  flex-grow: 1;
  gap: 56px;
  position: relative;
`;

const StyledButtons = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 24px;
  position: relative;
  width: 100%;
`;

const StyledButton = styled.button`
  all: unset;
  align-items: center;
  background-color: #30373e;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-grow: 1;
  height: 56px;
  justify-content: center;
  padding: 24px 56px;
  position: relative;
`;

const SignupAsBuyer = styled.div`
  color: #ffffff;
  font-family: "Jost-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.96px;
  line-height: normal;
  margin-bottom: -0.5px;
  margin-top: -2.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

const SignupAsSellerWrapper = styled.button`
  all: unset;
  align-items: center;
  border: 2px solid;
  border-color: #30373e;
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-grow: 1;
  height: 56px;
  justify-content: center;
  padding: 24px 56px;
  position: relative;
`;

const Div = styled.div`
  color: #30373e;
  font-family: "Jost-SemiBold", Helvetica;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 0.96px;
  line-height: normal;
  margin-top: -3.5px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;

const StyledP = styled.p`
  align-self: stretch;
  color: #666666;
  font-family: "Jost-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
`;

const StyledImg = styled.img`
  height: 32px;
  position: relative;
  width: 206px;
`;

const StyledQuestions = styled.div`
  align-items: center;
  align-self: stretch;
  background-color: #f8f6f4;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 40px;
  padding: 112px 68px;
  position: relative;
  width: 100%;
`;

const StyledFrame = styled.img`
  height: 125px;
  left: 105px;
  position: absolute;
  top: 76px;
  width: 125px;
`;

const StyledFrame2 = styled.img`
  height: 125px;
  left: 1175px;
  position: absolute;
  top: 239px;
  width: 125px;
`;

const StyledText = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 48px;
  padding: 0px 72px;
  position: relative;
  width: 100%;
`;

const TextWrapper2 = styled.div`
  align-self: stretch;
  color: #30373e;
  font-family: "Bona Nova-Regular", Helvetica;
  font-size: 40px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  text-align: center;
`;

const TextWrapper3 = styled.p`
  align-self: stretch;
  color: #666666;
  font-family: "Jost-Regular", Helvetica;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  text-align: center;
`;

const ContactUsWrapper = styled.button`
  all: unset;
  align-items: center;
  border: 2px solid;
  border-color: #daa14c;
  box-sizing: border-box;
  display: inline-flex;
  height: 56px;
  justify-content: center;
  padding: 24px 40px;
  position: relative;
`;

const StyledFooter = styled.footer`
  align-items: flex-start;
  align-self: stretch;
  background-color: #121d23;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  padding: 64px 68px 0px;
  position: relative;
  width: 100%;
`;

const StyledRow = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  position: relative;
  width: 100%;
`;

const StyledLogo = styled.div`
  align-items: flex-end;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 24px;
  position: relative;
`;

const TextWrapper4 = styled.div`
  color: #ffffff;
  font-family: "Bona Nova-Bold", Helvetica;
  font-size: 34px;
  font-weight: 700;
  letter-spacing: 0;
  line-height: normal;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const TextWrapper5 = styled.div`
  color: #d8d8d8;
  font-family: "Jost-Regular", Helvetica;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: normal;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const StyledRow2 = styled.div`
  align-items: flex-end;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 40px 0px;
  position: relative;
  width: 100%;
`;

const StyledMenu = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 40px;
  position: relative;
`;

const TextWrapper6 = styled.div`
  color: #ffffff;
  font-family: "Jost-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const StyledRow3 = styled.div`
  align-items: center;
  align-self: stretch;
  border-color: #ffffff14;
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 40px 0px;
  position: relative;
  width: 100%;
`;

const TextWrapper7 = styled.div`
  color: #a2aaae;
  font-family: "Jost-Regular", Helvetica;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0;
  line-height: 24px;
  margin-top: -1px;
  position: relative;
  white-space: nowrap;
  width: fit-content;
`;

const StyledLinks = styled.div`
  align-items: flex-start;
  display: inline-flex;
  flex: 0 0 auto;
  gap: 40px;
  justify-content: center;
  position: relative;
`;

export const Desktop = () => {
  return (
    <StyledDesktop>
      <StyledHero alt="Hero" src={hero} />
      <StyledContent>
        <StyledPromo>
          <StyledTitle>
            <WhetherYouReABuyer>
              WHETHER YOU&#39;RE A BUYER OR A SELLER, LABNET HAS THE PERFECT MEMBERSHIP OPTION FOR YOU.
            </WhetherYouReABuyer>
            <TextWrapper>Join Labnet and unlock exclusive access to lab-grown diamonds and more!</TextWrapper>
          </StyledTitle>
        </StyledPromo>
        <StyledSignUp>
          <StyledImage alt="Image" src={image} />
          <StyledCol>
            <StyledButtons>
              <StyledButton>
                <SignupAsBuyer>SIGNUP AS BUYER</SignupAsBuyer>
              </StyledButton>
              <SignupAsSellerWrapper>
                <Div>SIGNUP AS SELLER</Div>
              </SignupAsSellerWrapper>
            </StyledButtons>
            <StyledP>
              All prices are in USD. Plans can be canceled at any time in accordance with our terms and conditions.
              Accepting Visa, Master Card, American Express, and Discover.
            </StyledP>
            <StyledImg alt="Image" src={image1} />
          </StyledCol>
        </StyledSignUp>
        <StyledQuestions>
          <StyledFrame alt="Frame" src={frame} />
          <StyledFrame2 alt="Frame" src={frame} />
          <StyledText>
            <TextWrapper2>Have any questions?</TextWrapper2>
            <TextWrapper3>
              Our highly trained and friendly Customer Service representatives are always here to answer your questions
              about our products, integrations, or any other queries you have.
            </TextWrapper3>
          </StyledText>
          <ContactUsWrapper>
            <Div>CONTACT US</Div>
          </ContactUsWrapper>
        </StyledQuestions>
      </StyledContent>
      <StyledFooter>
        <StyledRow>
          <StyledLogo>
            <TextWrapper4>Labnet</TextWrapper4>
            <TextWrapper5>Global Lab-grown diamond inventory</TextWrapper5>
          </StyledLogo>
        </StyledRow>
        <StyledRow2>
          <StyledMenu>
            <TextWrapper6>About Us</TextWrapper6>
            <TextWrapper6>Contact Us</TextWrapper6>
          </StyledMenu>
          <StyledImg alt="Image" src={image1} />
        </StyledRow2>
        <StyledRow3>
          <TextWrapper7>© 2024 Labnet. All rights reserved.</TextWrapper7>
          <StyledLinks>
            <TextWrapper7>Terms and conditions</TextWrapper7>
            <TextWrapper7>Privacy policy</TextWrapper7>
          </StyledLinks>
        </StyledRow3>
      </StyledFooter>
    </StyledDesktop>
  );
};
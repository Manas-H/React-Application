import React from "react";
import { FaCopyright, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import "../../index.css";
import styled from "styled-components";

const Box = styled.div`
  padding: 9px 0px 0px 0px;
  background: black;
  position: relative;
  bottom: 0;
  width: 100%;
  top: 450px;
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  /* background: black; */
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;
  color: #ffffff;
`;

const Row = styled.div`
  margin-top: 15px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 135px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const FooterLink = styled.a`
  color: white;
  margin-bottom: 15px;
  font-size: 20px;
  font-style: italic;
  text-decoration: none;
  &:hover {
    color: orange;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 20px;
  color: white;
  margin-bottom: 40px;
  font-weight: 300;
`;
const SecondRow = styled.div`
color:white;
display:flex;
justify-content: space-between;
margin-top:20px;
font-size: 20px;
font-weight: 300`;

const ColumnTwo = styled.div`
display:flex;
align-items:center;`;
const Button = styled.div`
border: 1px solid white;
padding: 1px 20px;
background: white;
color:black;
font-size: 18px;
font-weight: 500;`;
const Hr = styled.div`
border-bottom: 0.1px solid white;
width: 100%;
padding; 10px;`;

const Copyright = styled.div`
color: white;
display: flex;
justify-content:center;
padding-top: 20px;`;


const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>CONTACT</Heading>
            <p>
              Call Us : +(91)-20-65267884 amitkaushik175@gmail.com Karyalaya
              Pune, Maharashtra - 411 041, India
            </p>
            {/* <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=644&amp;height=448&amp;hl=en&amp;q=Dhayari Phata, Singhagad Road,, Pune, Maharashtra 411041&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}
          </Column>
          <Column className="series">
            <Heading>SERIES</Heading>
            <FooterLink href="#">Rectangle Series</FooterLink>
            <FooterLink href="#">Round Series</FooterLink>
            <FooterLink href="#">Vertical Series</FooterLink>
            <FooterLink href="#">Bowl Series</FooterLink>
          </Column>

          <Column>
            <Heading>TERMS OF SERVICE & FAQ</Heading>
            <p>TERMS AND RETURN POLICIES</p>
          </Column>
        </Row>
        <SecondRow>
          <ColumnTwo>
            <Button>India</Button>
          </ColumnTwo>
          <ColumnTwo>
            <p style={{ marginLeft: "17px" }}>Contact Us</p>
            <p style={{ marginLeft: "17px" }}>Company Info</p>
            <FooterLink href="https://www.facebook.com/">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px", fontSize: "20px", fontWeight: "300" }}>
                  <FaFacebook size="1.2em" color="white" /> 
                </span>
              </i>
            </FooterLink>
            <FooterLink href="https://www.instagram.com/">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <FaInstagramSquare
                    size="1.2em"
                    color="white"
                    marginbottom="20px"
                  />{" "}
                  
                </span>
              </i>
            </FooterLink>
          </ColumnTwo>
        </SecondRow>
      </Container>
      <Hr />

      <Copyright>
            <FaCopyright style={{ marginTop: "4px", marginRight: "2px" }}/>
            <p>2022 Purva Fiber, Pune</p>
      </Copyright>
    </Box>
  );
};
export default Footer;
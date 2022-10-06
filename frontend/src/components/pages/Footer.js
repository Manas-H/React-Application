import React from "react";
import { FaFacebook,FaInstagramSquare} from 'react-icons/fa'
import styled from "styled-components";


const Box = styled.div`
padding: 9px 0px 33px 0px;
background: #102223;
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
`

const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
margin-left: -25px;
font-weight: 300;
color: #ffffff;
`;

const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,
      minmax(185px, 1fr));
grid-gap: 85px;

@media (max-width: 1000px) {
 grid-template-columns: repeat(auto-fill,
      minmax(200px, 1fr));
}
`;

const FooterLink = styled.a`
color: white;
margin-bottom: 15px;
font-size: 20px;
width: 230px;
font-style:italic;

text-decoration: none;

&:hover {
 color: #ff9900;
 transition: 200ms ease-in;
}
`;

const Heading = styled.p`
font-size: 20px;
color: white;
margin-bottom: 40px;
font-weight: 300;
`;

const Footer = () => {
return (
 <Box>
 <Container>
  <Row>
  <Column>
   <Heading>CONTACT</Heading>
   <p>Call Us : +(91)-20-65267884
      amitkaushik175@gmail.com 
      
      Karyalaya Pune, Maharashtra - 411 041, India</p>
{/* <iframe className="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=644&amp;height=448&amp;hl=en&amp;q=Dhayari Phata, Singhagad Road,, Pune, Maharashtra 411041&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> */}

   
  </Column>
  <Column>
   <Heading>SERIES</Heading>
   <FooterLink href="#">Rectangle Series</FooterLink>
   <FooterLink href="#">Round Series</FooterLink>
   <FooterLink href="#">Vertical Series</FooterLink>
   <FooterLink href="#">Bowl Series</FooterLink>
   </Column>

   <Column>
   <Heading>TERMS OF SERVICE & FAQ</Heading>
   <p>
      TERMS AND RETURN POLICIES
   </p>
   

  </Column>
  <Column>
   <Heading>SOCIAL MEDIA</Heading>
   <FooterLink href="https://www.facebook.com/">
   <i className="fab fa-facebook-f">
    <span style={{ marginLeft: "10px"}}>
    <FaFacebook size="1.2em" color="blue"/>  Facebook
    </span>
   </i>
   </FooterLink>
   <FooterLink href="https://www.instagram.com/">
   <i className="fab fa-instagram">
    <span style={{ marginLeft: "10px" }}>
     <FaInstagramSquare size="1.2em" color="purple" marginbottom="20px"/>  Instagram
    </span>
   </i>
   </FooterLink>
  </Column>
  </Row>
 </Container>
 </Box>
);
};
export default Footer;

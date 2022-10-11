import React from "react";
import styled from "styled-components";
import { CgProfile } from "react-icons/cg";
import { FcAbout } from "react-icons/fc";
import { AiOutlineLogout } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { Link, useNavigate} from "react-router-dom";
import "./profile.css"
const Section = styled.div``;
const Left = styled.div`
  position: absolute;
  float: right;
  background: black;
  height: fit-content;
  margin:2vh -13vh;
`;
const ProfileDetails = styled.div`
  text-align: center;
  margin-top: 4vh;
  text-decoration:none;
`;
const ProfileTitle = styled.div`
  color: white;
  font-size: 25px;
  font-weight: 300;
`;
const ProfileDetailsSection = styled.div`
  padding: 0vh 3vh;
  text-align: left;
  color: white;
  font-size: 25px;
  font-weight: 250;
`;
const ProfileItem = styled.div`
  display: flex;
  align-items: center;
  padding-top: 50px;
`;
const Button = styled.div`
display:flex;
color:white;
padding: 0 80px;
margin-top:60px;
font-size:23px;
font-weight:200;
cursor:pointer;
margin-bottom:5vh;
`;
const Icon = styled.div`
  padding-right: 10px;
`;
const Profile = () => {


    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        localStorage.removeItem("token");
        navigate("/");
        alert('You have been Log Out Successfully');
      };

  return (
    <Section>
      <Left>
        <ProfileDetails>
          <ProfileTitle>Account</ProfileTitle>
          <ProfileDetailsSection>

           <Link to="" className="profiles-compo-link">
            <ProfileItem>
              <Icon>
                <CgProfile />
              </Icon>
              My Profile
            </ProfileItem>
            </Link>

            <Link to="" className="profiles-compo-link"><ProfileItem>My Orders</ProfileItem></Link>
            <Link to="" className="profiles-compo-link">
            <ProfileItem>
              <Icon>
                <FcAbout />
              </Icon>
              About
            </ProfileItem>
            </Link>
            <Link to="" className="profiles-compo-link">
            <ProfileItem>
              <Icon>
                <BiSupport />
              </Icon>
              Support
            </ProfileItem>
            </Link>
          </ProfileDetailsSection>
          <Button>
            <Icon>
            <AiOutlineLogout />
            </Icon>
            <button onClick={logout}>Logout</button>
          </Button>
        </ProfileDetails>
      </Left>
    </Section>
  );
};

export default Profile;

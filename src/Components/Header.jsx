import React, { Component } from "react";
import Styled from "styled-components";
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Registration from "./Registration";
import Login from "./Login";

const StyledHeader = Styled.header`
display: flex;
  flex-direction: row;
margin:auto;
margin-bottom:10px;
background-color: #ff4d4d;
  width:screen.width;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  font-size: 17px;
  height:100px;
`;

const StyledA = Styled.a`
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  flex: 50%;
  :hover {
    background-color: #ddd;
    color: black;
  }
`;

const LoginSignupA=Styled.a`
float:right;
color: #f2f2f2;
text-decoration: none;
font-size: 17px;
padding: 14px 16px;
flex: 50%;
:hover {
  background-color: #ddd;
  color: black;
}
`

const StyledImg = Styled.img`
float:left;
border-radius: 5px 5px 0 0;
width: 5rem;
height: 5rem;
padding:10px;
`;
class Header extends Component {
  render() {
    return (
      <Router>
      <StyledHeader>
        <StyledImg src={"Cart.png"}></StyledImg>
        <StyledA href="/" exact>Home</StyledA>
        <StyledA href="#news">News</StyledA>
        <StyledA href="#contact">Contact</StyledA>
        <StyledA href="#about">About</StyledA>

        <LoginSignupA href="/Login">Login</LoginSignupA>
        <LoginSignupA href='/Signup'>Signup</LoginSignupA>
      </StyledHeader>
      </Router>
    );
  }
}

export default Header;

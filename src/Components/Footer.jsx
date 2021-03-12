import React, { Component } from 'react';
import Styled from "styled-components";

const StyledFooter = Styled.footer`
background-color: #ff4d4d;
  position:sticky;
  width : screen.width;
  display: block;
  color: #f2f2f2;
  margin:auto;
  margin-top:10px;
  font-size: 17px;
  bottom : 0;
  padding: 50px;

`

class Footer extends Component {
    render() { 
        return ( 
            <StyledFooter>Footer</StyledFooter>
         );
    }
}
 
export default Footer;
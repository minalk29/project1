import React, { Component } from 'react';
import Styled from "styled-components";

const Img = Styled.img`
border-radius: 5px 5px 0 0;
width: 10rem;
height: 15rem;
`;
const Title = Styled.h2`
color:red
`;

const Desc = Styled.p`

height:50px;
`;

const Button = Styled.button`
    padding: 1.5em 3.1em;
	border: none;
	border-radius: 7px;
	color: #fff;
	background-color: #ff3f40;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
`;

const Div = Styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
width:20em;
padding:5px;
margin:10px;
border: 1px solid red;
display:inline-block;
`;

const Container = Styled.div`
padding: 2px 16px;
`;

const Span =Styled.span`
background-color: yellow;
  color: black;
`


class Card extends Component {
  render() { 
    return ( 
      <div>
      {
      this.props.data.map ((p) => {
        return (
          <Div>
          <Img src={p.imgUrl}/><hr/>
        <Container>
        <Title>{p.productName}</Title>
        <Desc>{p.description}</Desc>
          <Button>Add To Cart</Button>
        </Container>
        </Div>
        )
        
      })}
    </div>
     );
  }
}
 
export default Card;
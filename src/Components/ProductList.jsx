import React, { Component, useState, useEffect } from "react";
import products from "../ProductData";
import Card from "./Card";
import Styled from "styled-components";

const StyledDiv = Styled.div`
margin:20px;
height:5vw;
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

const Input = Styled.input`
height:50px;
`;
const ProductList = () => {
  var flag=false;
  const [product, getProduct] = useState("");
  const [searchedP, setSearchedP] = useState(products);
  useEffect(() => {
    console.log('useEffect has been called!');
    if(searchedP.length==0)
    {
      flag=true;
    }
    console.log(searchedP);
    
  
},[searchedP]);

  const showProduct = () => {
    setSearchedP(
      products.filter((n) => 
          n.productName.toLowerCase().includes(product.toLowerCase())
      )
    );
    console.log(searchedP);
  };

  return (
    <div>
      <StyledDiv>
        <Input
          placeholder={"Search Product"}
          value={product}
          onChange={(e) => getProduct(e.target.value)}
        />
        <Button onClick={showProduct}>search</Button>
      </StyledDiv>
      <hr />
{flag? <h2>Product not Found</h2>:<Card data={searchedP}></Card>}
      
    </div>
  );
};

export default ProductList;

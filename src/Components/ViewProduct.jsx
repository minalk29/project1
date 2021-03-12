import React, { Component } from "react";
import Styled from "styled-components";
import Products from "../ProductData";


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
width:40em;
padding:10px;
border: 1px solid red;
display:block;
margin:auto;
text-align:center;
`;

const Container = Styled.div`
padding: 2px 16px;
`;
class ViewProduct extends Component {
constructor()
{
  super()
  if (this.fetchUsers()) {
    this.state = {
      Cart: this.fetchUsers(),
    };
  } else {
    this.state = {
      Cart: [],
    };
  }
    
  
}

fetchUsers = () => {
  // this.Users = JSON.parse(localStorage.getItem("Users"));
  // return (this.Cart = this.Users.cart);
  return(JSON.parse(localStorage.getItem("Cart")));
};

componentDidUpdate() {
  this.timer = setInterval(
    () =>
      this.setState({
        Cart: this.fetchUsers(),
      }),
    1
  );
}
 
    addToCart =(Id)=>{

        let p = Products.find((p) => p.productId == Id);
        let name = p.productName;
        let price = p.price;
    
   // console.log('this.state.Cart.length ' , this.state.Cart.length)
    console.log('this.state.Cart ' , this.state.Cart)
        if (this.state.Cart.length == 0) {
          let productId = Id;
          let quantity = 1;
          let cart = [...this.state.Cart, { productId, quantity, name, price }];
          this.setState({
            Cart: cart,
          });
          //let Users = { ...this.Users, cart };
          localStorage.setItem("Cart", JSON.stringify(cart));
        }
         else if(this.state.Cart.length > 0) {
          console.log("product" , this.state.Cart.find((p) => p.productId === Id))
          if (this.state.Cart.find((p) => p.productId == Id)) {
            let product = this.state.Cart.find((p) => p.productId == Id);
            let productId = Id;
            console.log('product.quantity ' , product.quantity);
            let quantity = product.quantity + 1;
            console.log(quantity);
            let newCart = this.state.Cart.filter((p) => p.productId != Id);
            let cart = [...newCart, { productId, quantity, name, price }];
            this.setState({
              Cart: cart,
            });
           // let Users = { ...this.Users, cart };
            localStorage.setItem("Cart", JSON.stringify(cart));
          } else {
            let productId = Id;
            let quantity =  1;
            let index = this.state.Cart.findIndex((p) => p.productId == Id);
            console.log('newly added product',this.state.Cart[index]);
            let cart = [...this.state.Cart, { productId, quantity, name, price }];
            console.log('newly added cart',cart);
            this.setState({
              Cart: cart,
            });
           // let Users = { ...this.Users, cart };
            localStorage.setItem("Cart", JSON.stringify(cart));
          }
        }
     
     // window.location.href="http://localhost:3000/Cart/"+id;
    }
  render() {
     let productId=this.props.match.params.id
let product=Products.find((p) => p.productId==productId)
    //let product=this.props.location.myCustomProps
    return (
      
        <Div >
          <Img  src={product.imgUrl} />
          <hr />
          <Container>
            <Title>{product.productName}</Title>
            <Desc >{product.description}</Desc>
            <Button key={product.productId} onClick={()=>this.addToCart(product.productId)}>Add To Cart</Button>
          </Container>
        </Div>
      
    );
  }
}

export default ViewProduct;

import React, { Component } from "react";
import Styled from "styled-components";
const StyledDiv= Styled.div`
margin:50px;
`
class Counter extends Component {


//    renderTags = () => {
//     if (this.state.tags.length == 0)
//       return <p>Please Add Products to Cart</p>;

//     return (
//       <ul>
//         {this.state.tags.map((t) => (
//           <li key={t}>{t}</li>
//         ))}
//       </ul>
//     );
//   };

//   handleIncrement =(product)=>{
//       console.log(product)
//       this.setState({
//           count: this.state.count +1
//       })
//   }


  //add product id while incrementing
  


  render() {
   
    return (
      <React.Fragment>
        <StyledDiv>
    {/* <h4>{this.props.product.productId}</h4>
    <h4>{this.props.product.name}</h4> */}
            {/* {this.renderTags()} */}
            <button onClick={()=>this.props.onDecrement(this.props.product.productId)}>-</button>
          <span>{this.props.product.quantity}</span>
          {/* add product id while incrementing */}
          <button onClick={ ()=>this.props.onIncrement(this.props.product.productId)}>+</button>
          <button onClick={()=>this.props.onDelete(this.props.product.productId)}>Delete</button>
        </StyledDiv>
      </React.Fragment>
    );
  }
}

export default Counter;

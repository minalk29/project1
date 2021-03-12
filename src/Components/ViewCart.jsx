import React, { Component } from "react";
import Counter from "./Counter";
import { ProductConsumer } from "./userContext";
import Products from "../ProductData";
class ViewCart extends Component {
  constructor(props) {
    super(props);
    if (this.fetchUsers()) {
      this.state = {
        Cart: this.fetchUsers(),
      };
    } else {
      this.state = {
        Cart: [],
      };
    }
    this.total = 0;
    this.state.Cart.map((p) => {
      this.total = this.total + p.price * p.quantity;
    });
    this.tax = (this.total * 5) / 100;
    this.grandTotal = this.total + this.tax;
    console.log("constructor", this.total);

    let cart = this.fetchUsers();
    console.log("this.fetchUsers() : ", cart);
  }

  fetchUsers = () => {
    return JSON.parse(localStorage.getItem("Cart"));
  };

  componentDidUpdate() {
  //   this.state.Cart= this.fetchUsers()
  // this.total = 0;
  // this.state.Cart.map((p) => {
  //   this.total = this.total + p.price * p.quantity;
  // });
  // this.tax = (this.total * 5) / 100;
  // this.grandTotal = this.total + this.tax;
  // // console.log(this.grandTotal)

 

          


    this.timer = setInterval(
      () =>{
        this.setState({
          Cart: this.fetchUsers(),
        });

        this.total = 0;
      this.state.Cart.map((p) => {
        this.total = this.total + p.price * p.quantity;
      });
      this.tax = (this.total * 5) / 100;
      this.grandTotal = this.total + this.tax;
      }
        ,
      1
    );
  }

  handleIncrement = (Id) => {
    let p = Products.find((p) => p.productId == Id);
    let name = p.productName;
    let price = p.price;
    if (this.state.Cart.length == 0) {
      let productId = Id;
      let quantity = 0;
      let cart = [...this.state.Cart, { productId, quantity, name, price }];
      this.setState({
        Cart: cart,
      });
      localStorage.setItem("Cart", JSON.stringify(cart));
    } else if (this.state.Cart.length > 0) {
      if (this.state.Cart.find((p) => p.productId == Id)) {
        let product = this.state.Cart.find((p) => p.productId == Id);
        let productId = Id;
        let quantity = product.quantity + 1;
        let newCart = this.state.Cart.filter((p) => p.productId != Id);
        let cart = [...newCart, { productId, quantity, name, price }];
        this.setState({
          Cart: cart,
        });
        localStorage.setItem("Cart", JSON.stringify(cart));
      } else {
        let productId = Id;
        let quantity = 0;
        let index = this.state.Cart.findIndex((p) => p.productId == Id);
        let cart = [...this.state.Cart, { productId, quantity, name, price }];
        this.setState({
          Cart: cart,
        });
        localStorage.setItem("Cart", JSON.stringify(cart));
      }
    }
  };
 

  handleDecrement = (Id) => {
    let p = Products.find((p) => p.productId == Id);
    let name = p.productName;
    let price = p.price;

    let product = this.state.Cart.find((p) => p.productId == Id);
    let productId = Id;
    if (product.quantity > 1) {
      let quantity = product.quantity - 1;
      let newCart = this.state.Cart.filter((p) => p.productId != Id);
      let cart = [...newCart, { productId, quantity, name, price }];
      this.setState({
        Cart: cart,
      });
      localStorage.setItem("Cart", JSON.stringify(cart));
    }
    if (product.quantity == 1) {
      this.handleDelete(Id);
    }
  };

  handleDelete = (Id) => {
    let cart = this.state.Cart.filter((p) => p.productId != Id);
    this.setState({
      Cart: cart,
    });
    console.log(this.state.Cart);
    localStorage.setItem("Cart", JSON.stringify(cart));
  };

  render() {
    return (
      <div>
        {this.state.Cart.map((product) => {
          return (
            <div>
              <table>
                <tr>
                  <th>Product Id</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Total Price</th>
                </tr>
                <tr>
                  <td>{product.productId}</td>
                  <td>{product.name}</td>
                  <td>
                    <Counter
                      onDecrement={this.handleDecrement}
                      onIncrement={() =>
                        this.handleIncrement(product.productId)
                      }
                      key={product.productId}
                      onDelete={this.handleDelete}
                      product={product}
                    ></Counter>
                  </td>
                  <td>{product.price}</td>
                  <td>{product.price * product.quantity}</td>
                </tr>
              </table>
            </div>
          );
        })}
        <table>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Total</td>
            <td>{this.total}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Tax (5% of total )</td>
            <td>{this.tax}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>Grand Total</td>
            <td>{this.grandTotal}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default ViewCart;

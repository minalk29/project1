import React, { Component, useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import Styled from "styled-components";

const StyledDiv = Styled.div`
width: 382px;  
        margin: auto; 
        margin-top:10px;
        margin-bottom:10px;
        padding: 50px;
        border:1px solid #ff4d4d;
        border-radius: 15px ; 
`

const StyledButton =Styled.button`
border: none;
	border-radius: 7px;
	color: #fff;
	background-color: #ff3f40;
	box-shadow: 2px 2px 25px -7px #4c4c4c;
    cursor: pointer;
    text-align:center;
    height: 40px;
    width: 80px;
`

const formSchema = yup.object().shape({
  email: yup.string().email("Invalid E-mail").required("E-mail is Required"),
  password: yup.string().required("Password is Required"),
});

class Login extends Component {
  render() {
    const User = JSON.parse(localStorage.getItem("Users"));
    return (
      <StyledDiv>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(data) => {
            if (User.find((m) => m.email === data.email && m.password===data.password)) {
              let user=User.find((m) => m.email === data.email && m.password===data.password)
              sessionStorage.setItem("User",JSON.stringify(user));
              this.props.history.push("/AfterLogin");
            } else {
              console.log("sorry");
            }
          }}
        >
          {(props) => {
            return (
              <form onSubmit={props.handleSubmit}>
                <InputField
                  label={"E-Mail"}
                  name={"email"}
                  placeholder={"Email..."}
                ></InputField>
                <InputField
                  label={"Password"}
                  name={"password"}
                  placeholder={"Password..."}
                  type="password"
                ></InputField>
                <StyledButton type={"submit"}>Login</StyledButton>
              </form>
            );
          }}
        </Formik>
      </StyledDiv>
    );
  }
}

export default Login;

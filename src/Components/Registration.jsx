import React, { Component, useState, useEffect } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import InputField from "./InputField";
import { useHistory } from "react-router-dom";
import Styled from "styled-components";

const Form =Styled.form`
        width: auto;  
        margin: auto; 
        margin-top:10px;
        margin-bottom:10px;
        padding: 50px;
        border:1px solid #ff4d4d;
        border-radius: 15px ; 
        @media screen and (max-width: 400px) {
          width:auto;
         }
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
  firstName: yup.string().required("First Name is Required"),
  lastName: yup.string().required("Last Name is Required"),
  phone:yup.string().matches(/^\d{10}$/,"Phone number must be 10 Digits").required('A phone number is required'),
  email: yup.string().email("Invalid E-mail").required("E-mail is Required"),
  password: yup.string().required("Password is Required"),//.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*$/,"condition"),
  confirmPassword: yup.string().oneOf([yup.ref('password'),''],'Passwords must match').required("Confirm Password is Required")
});

const Registration =() =>{
  let history = useHistory();
      const [Users,setUser]= useState(JSON.parse(localStorage.getItem('Users')));
      // console.log(Users)
      useEffect(() => {
        
        // console.log(Users)
        localStorage.setItem("Users",JSON.stringify(Users))
      },[Users])
     
    return (
  
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          phone: 0,
          password: "",
          confirmPassword: "",
        
        }}
        validationSchema={formSchema}
        onSubmit={(data) => {
            let totalUsers =Users.length;
            let UserId=totalUsers+1;
            let User={...data, userId:UserId}
            let allUsers=[...Users,{...User}]
            setUser(allUsers)
        //     let allUsers={...Users,...User}
        //  setUser(allUsers)
         history.push("/Login");
          
          //********************* first user**********************
        //     let User = [{...data, userId:1}]
        //     setUser(User)
        //  history.push("/Login");
          
       // let User = {...data, userId:1}
          
   

      //  let data = [...data] Object.assign-------check
        }}
      >
        {({ handleSubmit, isValid }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <InputField
                label={"First Name"}
                name={"firstName"}
                placeholder={"First Name..."}
              ></InputField>
              <InputField
                label={"Last Name"}
                name={"lastName"}
                placeholder={"Last Name..."}
              ></InputField>
              <InputField
                label={"Phone"}
                name={"phone"}
                placeholder={"Phone Number..."}
                type="tel"
              ></InputField>
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
              <InputField
                type="password"
                label={"Confirm Password"}
                name={"confirmPassword"}
                placeholder={"confirm Password..."}
              ></InputField>
              <StyledButton type={"submit"} disabled={!isValid}>Submit</StyledButton>
            </Form>
          );
        }}
      </Formik>
     
    );
  
}

export default Registration;

//for Reference

  /* <label htmlFor="password">Password<span >*</span> :</label>
                  <input 
                  type="password"
                  placeholder={"Password"}
                  name={"password"}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  ></input>
                  {errors.password && touched.password && <p>Password is required</p>} */


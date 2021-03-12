// import React, { Component, useState, useEffect } from "react";
// import { Formik } from "formik";
// import * as yup from "yup";
// import InputField from "./InputField";
// import { useHistory } from "react-router-dom";
// import Styled from "styled-components";


// const Form =Styled.form`
//         width: 382px;  
//         margin: auto; 
//         margin-top:10px;
//         margin-bottom:10px;
//         padding: 50px;
//         border:1px solid #ff4d4d;
//         border-radius: 15px ; 
// `

// const StyledInput= Styled.input`
// width: 300px;  
// height: 30px;  
// border-radius: 3px solid;  
// display:block;
// font-size: 20px;
// `

// const StyledDiv =Styled.div`
// padding:10px;
// `
// const StyledButton = Styled.button`
// margin:7px;
// border: none;
// 	border-radius: 7px;
// 	color: #fff;
// 	background-color: #ff3f40;
// 	box-shadow: 2px 2px 25px -7px #4c4c4c;
//     cursor: pointer;
//     text-align:center;
//     height: 40px;
//     width: 80px;
//     font-size: 20px;
// `;


// const Profile =()=> {
//         const [User]= useState(JSON.parse(sessionStorage.getItem('User')));
    

//     updateProfile=()=>{
//         history.push("/Login");
//     }
   
        
//         return ( 
//             <div>
               
        
//             <Form>
//                 <StyledDiv>
//                 <label >First Name :</label>
//               <StyledInput
//                 label={"First Name"}
//                 name={"firstName"}
//                 placeholder={User.firstName}
//               ></StyledInput>
//                 </StyledDiv>

//                 <StyledDiv>
//                 <label >Last Name :</label>
//               <StyledInput
//                 label={"Last Name"}
//                 name={"lastName"}
//                 placeholder={User.lastName}
//               ></StyledInput>
//                 </StyledDiv>



//                 <StyledDiv>
//                 <label >Phone Number :</label>
//               <StyledInput
//                 label={"Phone"}
//                 name={"phone"}
//                 placeholder={User.phone}
//                 type="tel"
//               ></StyledInput>
//                 </StyledDiv>



//                 <StyledDiv>
//                 <label >E-Mail :</label>
//               <StyledInput
//                 label={"E-Mail"}
//                 name={"email"}
//                 placeholder={User.email}
//               ></StyledInput>
//                 </StyledDiv>
            
              
//                 <StyledButton onClick={()=>this.updateProfile()}>Edit</StyledButton>
              
//             </Form>
         
     
//             </div>
//          );
//     }

 
// export default Profile;
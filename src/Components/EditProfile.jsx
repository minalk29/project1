// import React, { Component } from 'react';

// const EditProfile = () => {


//     const [Users,setUser]= useState(JSON.parse(localStorage.getItem('Users')))
//     useEffect(() => {
//       localStorage.setItem("Users",JSON.stringify(Users))
//     },[Users])


//     const formSchema = yup.object().shape({
//         firstName: yup.string().required("First Name is Required"),
//         lastName: yup.string().required("Last Name is Required"),
//         phone:yup.string().matches(/^\d{10}$/,"Phone number must be 10 Digits").required('A phone number is required'),
//         email: yup.string().email("Invalid E-mail").required("E-mail is Required"),
//         password: yup.string().required("Password is Required"),//.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).*$/,"condition"),
//         confirmPassword: yup.string().oneOf([yup.ref('password'),''],'Passwords must match').required("Confirm Password is Required")
//       });


//     return ( 
//         <Formik
//         validationSchema={formSchema}
//         onSubmit={(data) => {
//             let totalUsers =Users.length;
//             let UserId=totalUsers+1;
//             let User={...data, userId:UserId}
//             let allUsers=[...Users,{...User}]
//             setUser(allUsers)
//         //     let allUsers={...Users,...User}
//         //  setUser(allUsers)
//          history.push("/Login");
          
//           //********************* first user**********************
//         //     let User = [{...data, userId:1}]
//         //     setUser(User)
//         //  history.push("/Login");
          
//        // let User = {...data, userId:1}
          
   

//       //  let data = [...data] Object.assign-------check
//         }}
//       >
//         {({ handleSubmit, isValid }) => {
//           return (
//             <Form onSubmit={handleSubmit}>
//               <InputField
//                 label={"First Name"}
//                 name={"firstName"}
//                 value={User.firstName}
//               ></InputField>
//               <InputField
//                 label={"Last Name"}
//                 name={"lastName"}
//                 value={User.lastName}
//               ></InputField>
//               <InputField
//                 label={"Phone"}
//                 name={"phone"}
//                 value={User.phone}
//                 type="tel"
//               ></InputField>
//               <InputField
//                 label={"E-Mail"}
//                 name={"email"}
//                 value={User.email}
//               ></InputField>
//               <StyledButton type={"submit"} disabled={!isValid}>Submit</StyledButton>
//             </Form>
//           );
//         }}
//       </Formik>
//      );
// }
 


 
// export default EditProfile;
import React, { Component, useState, useEffect } from "react";

const User=() =>{
    const [Users,setUser]= useState([JSON.parse(localStorage.getItem('Users'))]);
    console.log(Users);
        return ( 
            <div>
               
            </div>
         );
    
}
 
export default User;
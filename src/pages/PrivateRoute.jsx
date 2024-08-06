import React, { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext";

export default function PrivateRoute({ Component }) {
  const { isAuth } = useContext(AuthContext);
  const [user,setUser]=useState({})

  // useEffect(()=>{

  //   let userFormLocalStorage=localStorage.getItem('loggedUser')
  //   setUser(userFormLocalStorage)
  // },[user])
  // console.log('isAuth', isAuth)


  console.log('isAuth', isAuth)

  if (!isAuth) {
    return <Navigate to="/auth/login" />;
  }
  return <Component />;
}

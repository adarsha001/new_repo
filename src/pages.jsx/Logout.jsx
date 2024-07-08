import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import {usejwt} from '../../context/jwt'
const Logout = () => {
    const {Logoutuser}=usejwt();
  useEffect(() => {
    Logoutuser();
  }, [Logoutuser]);
  return <Navigate to='/login'/>
};

export default Logout;

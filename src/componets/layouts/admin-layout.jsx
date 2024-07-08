import React from "react";
import { NavLink, Navigate, Outlet } from "react-router-dom";
import { RiHome2Line, RiContactsLine, RiUserLine } from 'react-icons/ri'; // Importing icons from react-icons
import { usejwt } from "../../../context/jwt";

const Admin_layout = () => {
  const {user,isLoading}=usejwt()
  console.log("user",user)
  if(isLoading){
    return <h1>loading...</h1>
  }
  if(!user.isAdmin){
    return <Navigate to="/"/>
  }


  return (
    <div className="glass text-white">
      <nav className="flex items-center justify-between px-4 py-2">
        <div>
          <NavLink to='/' className="text-xl font-bold">
            <RiHome2Line className="inline-block mr-2" /> Home
          </NavLink>
        </div>
        <ul className="flex space-x-4">
          <li>
            <NavLink to='/admin/contact' className="flex items-center">
              <RiContactsLine className="inline-block mr-2" /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to='/admin/users' className="flex items-center">
              <RiUserLine className="inline-block mr-2" /> Users
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="px-4 py-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin_layout;

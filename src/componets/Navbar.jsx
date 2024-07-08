import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../photo/shopsherelogo-removebg-preview.png";
import { MdHome } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { MdOutlineInfo } from "react-icons/md";
import { PiSignInBold } from "react-icons/pi";
import { HiOutlineLogin } from "react-icons/hi";
import { FaSearch } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { useFilterContext } from "../../context/filtercontest";
import {usejwt} from '../../context/jwt';
const navelinks = [
  { path: "/profile", text: "profile", icon: <AiOutlineUser /> },
  { path: "/contact", text: "Contact", icon: <IoCallOutline /> },
  { path: "/about", text: "About", icon: <MdOutlineInfo /> },
  { path: "/register", text: "Sign In", icon: <PiSignInBold /> },
  { path: "/login", text: "Log In", icon: <HiOutlineLogin /> },
];
const navelinklogout = [
  { path: "/profile", text: "profile", icon: <AiOutlineUser /> },
  { path: "/contact", text: "Contact", icon: <IoCallOutline /> },
  { path: "/about", text: "About", icon: <MdOutlineInfo /> },
  
  { path: "/logout", text: "Logout", icon: <HiOutlineLogin /> },
];


const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const [search, setsearch] = useState(false);
  const [sidebar, setsidebar] = useState(false);
const {isloggedin}=usejwt();
  return (
    <div className="flex navbar z-2 bg-indigo-200 h-[50px]  w-[100vw] md:h-[140px] text-fuchsia-900 justify-around items-center gap-2 sticky z-50">
      <NavLink to={"/"}>
        <img
          className={`object-cover w-[130px] flex-shrink h-[60px] sm:w-[150px] ${
            search
              ? "md:w-[200px] lg:w-[250px] xl:w-[350px] lg:h-[150px] xl:h-[200px]"
              : "md:w-[170px] lg:w-[200px] xl:w-[300px] lg:h-[110px] xl:h-[150px]"
          }`}
          src={logo}
          alt="shopsphere360"
        />
      </NavLink>
      {/* <div className="flex justify-center items-center">
        <div className={`transition-opacity duration-300 `}>
          <form onSubmit={(e) => e.preventDefault()}>

            <input
              className="w-[115px] h-[20px] pl-[2px] max-w-[500px] flex-grow   sm:h-[20px] md:w-[130px] md:h-[20px] lg:w-[250px] lg:h-[30px] rounded-xl md:rounded-xl lg:rounded-xl sm:rounded-xl"
              type="text"
              name="text"
  
              placeholder="search"
             
            />
          </form>
        </div>
        <div className="flex justify-center items-center cursor-pointer ml-2">
          <FaSearch
            onClick={() => setsearch(!search)}
            className={`transition-opacity duration-500 `}
          />
        </div>
      </div> */}
{!isloggedin ? ( <div className="gap-3  flex overflow-hidden cursor-pointer text-[10px] md:text-[12px] items-center justify-center lg:text-[15px] xl:text-[20px] relative">
        <div className="md:flex gap-2 hidden lg:gap-[4px] md:gap-[3px]">
          {navelinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex hover:underline items-center p-2"
            >
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          ))}
        </div>
      </div>):<div className="gap-3 flex cursor-pointer text-[10px] md:text-[12px] items-center justify-center lg:text-[15px] xl:text-[20px] relative">
        <div className="md:flex gap-2 hidden lg:gap-[4px] md:gap-[3px]">
          {navelinklogout.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              className="flex hover:underline items-center p-2"
            >
              {link.icon}
              <span>{link.text}</span>
            </NavLink>
          ))}
        </div>
      </div>}












      
      <div className="flex gap-4 top-1 relative text-white md:hidden">
        <div
          className="h-full"
          onClick={() => {
            settoggle(!toggle);
          }}
        >
          <span className=" bg-white">
            <BsThreeDotsVertical />
          </span>

          <div>
            {!isloggedin ? (
              <div
                className={`fixed mt-3 glass w-full flex items-center rounded-lg text-[30px] min-h-full ${
                  !toggle ? "scale-0" : " "
                } flex-col z-50 left-0 transition-transform duration-700`}
              >
                {navelinks.map((link, index) => (
                  <NavLink
                    key={index}
                    to={link.path}
                    className="flex hover:underline items-center gap-1"
                  >
                    {link.icon}
                    <span className="">{link.text}</span>
                  </NavLink>
                ))}
              </div>
            ) :
            <div
            className={`fixed mt-3  w-full h-full flex items-center glass -z-10 rounded-lg text-[30px] min-h-full ${
              !toggle ? "scale-0" : " "
            } flex-col z-50 left-0 transition-transform duration-700`}
          >
            {navelinklogout.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className="flex hover:underline items-center gap-1"
              >
                {link.icon}
                <span className="">{link.text}</span>
              </NavLink>
            ))}
          </div> 
}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

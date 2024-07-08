import { NavLink } from "react-router-dom";
import { IoMdTrendingUp } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
import { Link } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";
import React, { useContext } from "react";
import { CounterContext } from "../../context/context";
const Sidebar = ({ navelinks }) => {
  const { setSelectedIndex } = useContext(CounterContext);
 const counterState = useContext(CounterContext)
  // const navelinks = [
  //   { name: "trending ", icon: <IoMdTrendingUp /> , onClick: () => portfolioSecRef.current.scrollIntoView({ behavior: 'smooth' }) },
  //   { name: "todays-pick ", icon: <FaFire /> , onClick: () => todays_PickRef.current.scrollIntoView({ behavior: 'smooth' })},
  //   { name: "instagram-followers ", icon: <CiInstagram /> },
  //   { name: "all-brand", icon: <BsCollection /> },
  //   { name: "promotional", icon: <AiFillNotification /> },
  //   { name: "exclusive", icon: <AiFillNotification /> },
  // ];


  return (
    <div className=''>  
      <div
        className={`${counterState.open ? "w-44" : "w-14"} ${
          counterState.open ? "md:w-56" : "md:w-14"
        }  h-full relative overflow-x-hidden z-10 duration-300 `}
        onClick={() => {
          counterState.setSelectedIndex(0);
        
        }}
        style={{
          backgroundImage: "linear-gradient(transparent, )",
        }}
      >
        <div
          className={`flex fixed left-9   bg-slate-50  z- rounded-full border border-purple-400 ${
            !counterState.open && "rotate-180"
          }`}
          onClick={() => counterState.setopen(!counterState.open)}
        >
          <FaLongArrowAltRight className="rotate-180" />
        </div>
        <div className={`mr-3 mt-6 overflow-hidden ${counterState.open? "fixed":""}`}>
          {navelinks && navelinks.map((link, index) => (
            <NavLink
              key={index}
              to={link.path}
              onClick={link.onClick}
              className="flex hover:underline hover:bg-slate-600 rounded-lg transition-all duration-700 items-center gap-7 px-5 py-4  ease-in-out  "
            >
              <div className={`text-[20px]  hover:underline hover:bg-slate-600 rounded-lg transition-all duration-400 hover:scale-105  hexagon-text  fixed `}>{link.icon}</div>
              <span className={`text-white ml-9 ease-in-out transition-all duration-700 ${!counterState.open? "scale-0" : " "}`}>
                {link.name}
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};  export default Sidebar;
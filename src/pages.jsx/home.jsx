import Sidebar from "../componets/sidebar";
import Feed from "../componets/Feed";
import Categary_list from "../componets/catagary/categary_list";

import Button from "../componets/button";
import { CounterProvider } from "../../context/context";
import React, { useState, useRef } from "react";

import { CounterContext } from "../../context/context";
import { IoMdTrendingUp } from "react-icons/io";
import { CiInstagram } from "react-icons/ci";
import { FaFire } from "react-icons/fa";
import { AiFillNotification } from "react-icons/ai";
import { BsCollection } from "react-icons/bs";
// import Comments from '../../dummy/comments/comments'
import MainComponent from "../componets/MainComponent";
// import  { commentData } from '../../public/json/comment'
import useFunctions from "../../dummy/comments/useFunctions";
import Cat from "../componets/dummy_cat/cat";
import Category from "../componets/catagary/categary_card"
import { FaBorderAll } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";import { FaHeart } from "react-icons/fa";
;
import { VscRocket } from "react-icons/vsc";
const Home = () => {
  const trendingRef = useRef(null);
  const todays_PickRef = useRef(null);
  const instagram_followersRef = useRef(null);
  const all_brandRef = useRef(null);
  const likedref = useRef(null);
  const exclusiveref = useRef(null);
  <script src="https://cdn.lordicon.com/lordicon.js"></script>

  const navelinks = [
    {
      name: 'TRENDING ',
      icon: <IoMdTrendingUp className="nav-icon" />,
      path: '/trending',
      onClick: () => trendingRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      name: 'ALL-BRAND',
      icon: <FaBorderAll className="nav-icon" />,
      path: '/all_brand',
      onClick: () => todays_PickRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      name: 'FOLLOWERS',
      icon: <VscRocket className="nav-icon" />,
      path: '/followers',
      onClick: () => all_brandRef.current.scrollIntoView({ behavior: 'smooth' }),
    },
    {
      name: 'LIKED',
      icon: <FaHeart className="nav-icon" />,
      path: '/liked',
      onClick: () => likedref.current.scrollIntoView({ behavior: 'smooth' }),
    },
  ];
  //   const [comments, setcommentsdata] = useState(commentData)

  //  const handleAddComments= (commentId,comment) => {

  // const updatedtree=addcomment(comments,commentId,comment);
  // setcommentsdata(updatedtree);
  //  }
  //   const {addcomment}=useFunctions();

  return (
    <CounterProvider>
      <div className="flex container ">
        <Sidebar navelinks={navelinks} />

        <div>
          <Feed />
          <MainComponent
            trendingRef={trendingRef}
            todays_PickRef={todays_PickRef}
            all_brandRef={all_brandRef}
            likedref={likedref}
          />
          {/* <Comments comments={comments} handleAddComments={handleAddComments}/> */}
        </div>

        <div></div>
      </div>
    </CounterProvider>
  );
};

export default Home;

import React, { useRef } from "react";
import MainComponent from "./MainComponent";
import Sidebar from "../sidebar";
import Navbar from "./Navbar";

function Parent() {
  const portfolioSecRef = useRef(null);
  const todays_PickRef = useRef(null);
  const instagram_followersRef = useRef(null);
  const all_brandRef = useRef(null);
  const promotionalRef = useRef(null);
  const exclusiveRef = useRef(null);
  // const navelinks = [
  //   { name: "trending ", icon: <IoMdTrendingUp /> , onClick: () => portfolioSecRef.current.scrollIntoView({ behavior: 'smooth' }) },
  //   { name: "todays-pick ", icon: <FaFire /> , onClick: () => todays_PickRef.current.scrollIntoView({ behavior: 'smooth' })},
  //   { name: "instagram-followers ", icon: <CiInstagram /> },
  //   { name: "all-brand", icon: <BsCollection /> },
  //   { name: "promotional", icon: <AiFillNotification /> },
  //   { name: "exclusive", icon: <AiFillNotification /> },
  // ];

  const navelinks = [
    {
      name: "trending ",
      icon: <IoMdTrendingUp />,
      onClick: () =>
        portfolioSecRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "todays-pick ",
      icon: <FaFire />,
      onClick: () =>
        todays_PickRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "instagram-followers ",
      icon: <CiInstagram />,
      onClick: () =>
        instagram_followersRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "all-brand",
      icon: <BsCollection />,
      onClick: () =>
        all_brandRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "promotional",
      icon: <AiFillNotification />,
      onClick: () =>
        promotionalRef.current.scrollIntoView({ behavior: "smooth" }),
    },
    {
      name: "exclusive",
      icon: <AiFillNotification />,
      onClick: () =>
        exclusiveRef.current.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <>
      <Sidebar navelinks={navelinks} />
      <MainComponent
        portfolioSecRef={portfolioSecRef}
        todays_PickRef={todays_PickRef}
        instagram_followersRef={instagram_followersRef}
        all_brandRef={all_brandRef}
        promotionalRef={promotionalRef}
        exclusiveRef={exclusiveRef}
      />
    </>
  );
}

export default Parent;

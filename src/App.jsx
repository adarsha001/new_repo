import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages.jsx/home";
import About from "./pages.jsx/about";
import Contact from "./pages.jsx/contact";
import Navbar from "./componets/Navbar";
import { Register } from "./pages.jsx/register";
import { Login } from "./pages.jsx/login";
import Error from "./pages.jsx/Error";
import Logout from "./pages.jsx/Logout";


import Singleproduct from "../src/pages.jsx/Singleproduct";
import Cat from "./componets/dummy_cat/cat";
import Categary_list from "./componets/catagary/categary_list";
import Admin_layout from "./componets/layouts/admin-layout";
import Admin_users from "./pages.jsx/Admin_users";
import Admin_contact from "./pages.jsx/Admin_contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          <Route path="/category" element={<Cat />}></Route>
          <Route path="/trending" element={<Home />} />
          <Route path="/instagram" element={<Home />} />
          <Route path="/promotional" element={<Home />} />
          <Route path="/followers" element={<Home />} />
          <Route path="/liked" element={<Home />} />
          <Route path="/all_brand/" element={<Home />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/exclusive" element={<Home />} />

          <Route path="/singleproduct/:id" element={<Singleproduct />} />
          <Route path="*" element={<Error />} />
          <Route path='/admin' element={<Admin_layout/>}>
          <Route path="users" element={<Admin_users/>}/>
          <Route path="contact" element={<Admin_contact/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// import React, { useRef } from 'react';
// import MainComponent from './componets/test/MainComponent';
// import Navbar from './componets/test/Navbar';

// function App() {
//   const portfolioSecRef = useRef(null);
//   const todays_PickRef = useRef(null);

//   const buttons = [
//     { text: 'Portfolio', onClick: () => portfolioSecRef.current.scrollIntoView({ behavior: 'smooth' }) },
//     { text: 'Contact', onClick: () => todays_PickRef.current.scrollIntoView({ behavior: 'smooth' }) },
//   ];

//   return (
//     <>
//       <Navbar
//        buttons={buttons}
//       />
//       <MainComponent
//         portfolioSecRef={portfolioSecRef}
//         todays_PickRef={todays_PickRef}
//       />
//     </>
//   );
// }

// export default App;

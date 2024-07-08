import React from 'react'
import Slider from './slider'

const Mainslider = () => {
    const slides = [
        { image: "./images/saveee.jpeg" },
        { image: "./images/saveee.jpeg" },
        { image: "./images/saveee.jpeg" },
        
        { image: "./images/saveee.jpeg" }
        ,
        { image: "./images/saveee.jpeg" }
        ,
        { image: "./images/saveee.jpeg" },
        { image: "./images/saveee.jpeg" }
        ,
        { image: "./images/saveee.jpeg" }
        ,
        { image: "./images/saveee.jpeg" }
        
       

       
      ];

  return (<>

    <div className='
     flex-grow max-h-[40px]  pt-3 pl-3'>
    <Slider slides={slides} />
  </div></>
  )
}

export default Mainslider

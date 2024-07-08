import React from 'react'
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { useState } from 'react'

const Slider = ({slides}) => {

    const [current, setCurrent] = useState(0);

    const prevslide = () => {
        setCurrent(current === 0 ? slides.length - 1 : current - 1);
        console.log(current);
    }

   const nextslide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
    console.log(current);
}

    

    return (
        <div className='overflow-hidden relative'>
            <div className='flex transition ease-out duration-500 object-cover ' style={{ transform: `translateX(-${current * 100}%)` }}>
                {slides.map((slide, i) => (
                    <img className='min-w-full min-h-20' src={slide.image} alt="" key={i} />
                ))}
            </div>

            <div className='absolute top-0 h-full items-center text-white text-[40px justify-between flex w-full'>
                <button onClick={prevslide}><FaLongArrowAltLeft className='bg-black border rounded-full' /></button><button onClick={nextslide}><FaLongArrowAltRight className='bg-black border rounded-full' /></button>
            </div>
        </div>
    )
}

export default Slider

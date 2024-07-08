import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Product = (ele) => {
    const { id, Full_name, Followed_by_Viewer, Is_Verified, Biography, image_link, External_url } = ele;
    const [activeLink, setActiveLink] = useState(null);

    const handleClick = (productId) => {
        setActiveLink(productId);
    };

    return (
        <div className='mx-1 my-1 bg-green-400 w-full flex justify-center  sm:w-[98%] transition-all duration-500 hover:bg-green-200'>
            <NavLink
                to={`/singleproduct/${id}`}
                className={`text-gray-500 hover:text-gray-900 ${
                    activeLink === id ? 'bg-red-700' : ''
                } transition-all duration-500 `}
                onClick={() => handleClick(id)}
            >
                <div>
                    <img src={image_link} className='w-[140px] sm:w-[200px] md:w-[250px] lg:w-[300px] overflow-hidden' alt={Full_name} />
                    <div className='text-center font-bold'>
                        <h1>
                            <button className='bg-slate-500 rounded-md'>{Full_name}</button>
                        </h1>
                    </div>
                    <div className='text-center caveat-ak'>{Biography}</div>
                    <div className='text-center'>
                        <a href={External_url} target='_blank' rel='noopener noreferrer'>
                            <button>Visit Website</button>
                        </a>
                    </div>
                </div>
            </NavLink>
        </div>
    );
};

export default Product;

import React, { createContext } from 'react';

const ImagesContext = createContext();

const ImageComponent = ({ children }) => {
  const images = [
    'https://tse1.mm.bing.net/th?id=OIP.cMO1HKJQm_xmcyD03Ep46AHaFY&pid=Api&P=0&h=220/',
    'https://tse1.mm.bing.net/th?id=OIP.cMO1HKJQm_xmcyD03Ep46AHaFY&pid=Api&P=0&h=220',
    'https://placekitten.com/g/250/200'
  ];

  return (
    <ImagesContext.Provider value={images}>
      {children}
    </ImagesContext.Provider>
  );
};

export { ImagesContext, ImageComponent };

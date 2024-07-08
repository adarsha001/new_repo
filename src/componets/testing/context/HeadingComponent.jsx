import React, { createContext } from 'react';

const HeadingsContext = createContext();

const HeadingComponent = ({ children }) => {
  const headings = ['Tom', 'Maru', 'Jellylorum'];

  return (
    <HeadingsContext.Provider value={headings}>
      {children}
    </HeadingsContext.Provider>
  );
};

export { HeadingsContext, HeadingComponent };

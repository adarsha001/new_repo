// LoadingPage.jsx

import React from 'react';

const LoadingPage = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-12 w-12 animate-spin"></div>
      <p className="text-gray-700 text-xl ml-2">Loading...</p>
    </div>
  );
}

export default LoadingPage;

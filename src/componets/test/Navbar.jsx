import React from 'react';

const Navbar = ({ buttons }) => {
  return (
    <nav>
      {buttons && buttons.map((button, index) => (
        <button key={index} onClick={button.onClick}>
          {button.text}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;
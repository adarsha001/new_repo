import React, { useContext } from 'react';
import { CounterContext } from '../../context/context';

const buttonNames = ['Tom', 'Maru', 'Jellylorum','asd',];
const NavButtons = ({ listRef }) => {
  const { setSelectedIndex } = useContext(CounterContext);

  const handleButtonClick = (index) => {
    setSelectedIndex(index);
    const imgNode = listRef.current.querySelectorAll('li > div')[index];
    imgNode.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  };

  return (
    <nav>
      {buttonNames.map((name, index) => (
        <button key={index} onClick={() => handleButtonClick(index)}>
          {name}
        </button>
      ))}
    </nav>
  );
};

export default NavButtons;

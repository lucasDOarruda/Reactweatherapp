import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import '../style.css';

const Header = () => {
  const titleText = ":)";

  return (
    <div className='appname'>
      <h1 className='mytitle'>
        <FontAwesomeIcon icon={faRobot} /> {titleText}
      </h1>
    </div>
  );
};

export default Header;

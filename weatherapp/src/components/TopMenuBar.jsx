import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSun, faGamepad, faTasks, faCalculator } from '@fortawesome/free-solid-svg-icons';
import '../style.css';

const TopMenuBar = () => {
  return (
    <div className='appname'>
      <h1 className='mytitle'>Widget Garage</h1>

      <div className="menu-bar">
        <Link to="/" className="menu-item">
          <FontAwesomeIcon icon={faHome} /> Home
        </Link>
        <Link to="/weather" className="menu-item">
          <FontAwesomeIcon icon={faSun} /> Weather
        </Link>
        <Link to="/tictactoe" className="menu-item">
          <FontAwesomeIcon icon={faGamepad} /> Tic-Tac-Toe
        </Link>
        <Link to="/todo" className="menu-item">
          <FontAwesomeIcon icon={faTasks} /> Todo List
        </Link>
        <Link to="/PostForm" className="menu-item">
          <FontAwesomeIcon icon={faCalculator} /> Budget Calculator
        </Link>
      </div>
    </div>
  );
}

export default TopMenuBar;

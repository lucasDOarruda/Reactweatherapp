import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../style.css';

const TopMenuBar = () => {
  return (
    <div className='appname'>
      <h1 className='mytitle'>Widget Garage</h1>

      <div className="menu-bar">
        {/* Use Link components for navigation */}
        <Link to="/" className="menu-item">Home</Link>
        <Link to="/weather" className="menu-item">Weather</Link>
        <Link to="/tictactoe" className="menu-item">Tic-Tac-Toe</Link>
        <Link to="/todo" className="menu-item">Todo List</Link>
        <Link to="/PostForm" className="menu-item">Post Form</Link>

      </div>
    </div>
  );
}

export default TopMenuBar;

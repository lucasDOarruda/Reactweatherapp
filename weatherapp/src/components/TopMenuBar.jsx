import React from 'react';
import '../style.css'

const TopMenuBar = () => {
  return (

    <div className="menu-bar">
      <h1 className='mytitle'>Widget Garage</h1>
      <div className="menu-item">Weather</div>
      <div className="menu-item">Tic-Tac-Toe</div>
      <div className="menu-item">Todo List </div>
      <div className="menu-item">Contact</div>
    </div>
  );
}

export default TopMenuBar;

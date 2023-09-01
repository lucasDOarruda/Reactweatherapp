import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import TodoList from './components/Todolist';
import TicTacToe from './components/TicTacToe';
import Weather from './components/Weather';
import TopMenuBar from './components/TopMenuBar';
import PostForm from './components/PostForm';


function App() {
  return (
    <Router>
      <div>
        <TopMenuBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<TodoList />} />
          <Route path="/tictactoe" element={<TicTacToe />} />
          <Route path="/weather" element={<Weather />} />
          <Route path="/Postform" element={<PostForm/>} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;

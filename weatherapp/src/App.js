import React from 'react'
import Home from './Home'
import TodoList from './components/Todolist'
import TicTacToe from './components/TicTacToe'
import Weather from './components/Weather'



function App() {
  return (
<div>
    <Home />
   <TodoList/>
   <TicTacToe/>
    <Weather/>

</div>
  )
  
}

export default App

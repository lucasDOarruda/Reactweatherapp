import React from 'react'
import Home from './Home'
import TodoList from './components/Todolist'
import TicTacToe from './components/TicTacToe'
import Weather from './components/Weather'
import TopMenuBar from './components/TopMenuBar'



function App() {
  return (
<div>
  
  <TopMenuBar/>
    <Home />
   <TodoList/>
   <TicTacToe/>
    <Weather/>

</div>
  )
  
}

export default App

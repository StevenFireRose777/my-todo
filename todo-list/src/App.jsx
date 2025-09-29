import { useState } from 'react'
import './App.css'

function App() {
  const[tasks, setTasks] = useState([])
  const[input, setInput] = useState("")

  return (
    <>
      <header>
        <h1 className='todo-title'>List today's priorities!</h1>
        <div id='todo-container'>
          <input type="text" placeholder='Add task...' id="todo-input" maxLength={60}/>
          <button id='todo-add'>Add</button>
        </div>
      </header>

      <div id='ul-container'>
        <ul id='myUL'>
          <li><input type="checkbox" id='todo-checkbox'/>Get a Job for summer 2026!</li>
          <li><input type="checkbox" id='todo-checkbox'/>Join a club by next week!</li>
          <li><input type="checkbox" id='todo-checkbox'/>Cry about College for an hour!</li>
        </ul>
      </div>

      <button id='clear-button'>Clear</button>
      


    </>
  )
}

export default App

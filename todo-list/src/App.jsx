import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  return (
    <>
      <header>
        <h1 className='todo-title'>List today's priorities!</h1>
        <div id='todo-container'>
          <input type="text" placeholder='Add task...' id="todo-input" maxLength={60}/>
          <button id='todo-add'>Add</button>
        </div>
      </header>

      <ul id='myUL'>
        <li>Get a Job for summer 2026!</li>
        <li>Join a club by next week!</li>
        <li>Cry about College for an hour!</li>
      </ul>

      <button>Clear</button>
      


    </>
  )
}

export default App

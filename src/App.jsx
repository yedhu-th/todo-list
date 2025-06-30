import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './components/Input'
import Card from './components/Card'

function App() {
  

  const initial_task=[
    {
      id : 10,
      text: "Task 1"
    },
    {
      id : 11,
      text : "Task 2"
    },
    {
      id : 12,
      text:"Task 3"
    }
  ];
  return (
    <>
      <div className="App">
        <header>
          <h1>
            MY REACT APP
          </h1>
          <h2>This is my first application</h2>
        </header>
        <main>
          <div id="tasks">
           <Input/>
            {
              initial_task.map((task) => (
                <Card data={task}/>
              )
              )
            }
           
          </div>
         
        </main>
      </div>
     
    </>
  )
}


export default App

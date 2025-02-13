import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios, { AxiosError } from 'axios'

function App() {
  
  const [jokes, setJokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })
  })

  return (
    <>
      <h1>Hello</h1>
      <p>Jokes:{jokes.length}</p>
    
    {
      jokes.map((joke)=>(
        <div key={joke.id}>
          <h3>{joke.title} {joke.id}</h3>
          <p>{joke.content}</p>
        </div>
      ))
    }
    
  </>
  )
}

export default App

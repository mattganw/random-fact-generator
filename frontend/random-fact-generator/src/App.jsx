import { useState, useEffect } from 'react'
import './App.css'
import FactCard from './components/FactCard.jsx'

function App() {

  const [fact, setFact] = useState(null)

  const getFact = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/fact")
      const data = await response.json()
      setFact(data)

    } catch(err) {
      console.error("failed to fetch fect: ", err)
    }
  }  

  useEffect(() => {
    getFact()

  }, [])

  return (
    <>
      {fact ? fact.text : "Loading..."}
    </>
  )
}

export default App

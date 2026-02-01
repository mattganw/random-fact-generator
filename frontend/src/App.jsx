import { useState, useEffect } from 'react'
import './App.css'
import FactCard from './components/FactCard.jsx'

function App() {

  const [randomFact, setRandomFact] = useState(null)
  const [todayFact, setTodayFact] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // get random fact
  const getRandomFact = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("http://localhost:3000/api/fact")

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json()
      setRandomFact(data)

    } catch(err) {
      setError(err)
      console.error("failed to fetch fect: ", err)
    } finally {
      setLoading(false)
    }
  } 

  // get today's fact
  const getTodayFact = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("http://localhost:3000/api/today");
      
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json();
      setTodayFact(data)

    } catch(err) {
      setError(err)
      console.error("failed to fetch today's fact: ", err)
    } finally {
      setLoading(false)
    }
  }
  

  useEffect(() => {
    getRandomFact();
    getTodayFact();
  }, [])

  if (loading) return <>Loading...</>
  if (error) return <>Error: {error.message}</>

  return (
    <>
      {randomFact ? <FactCard fact={randomFact}/> : "No fact available"}
    </>
  )
}

export default App

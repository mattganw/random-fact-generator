import { useState, useEffect } from 'react'
import './App.css'
import FactCard from './components/FactCard.jsx'

function App() {

  const [fact, setFact] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getFact = async () => {
    try {
      setLoading(true)
      setError(null)

      const response = await fetch("http://localhost:3000/api/fact")

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json()
      setFact(data)

    } catch(err) {
      setError(err)
      console.error("failed to fetch fect: ", err)
    } finally {
      setLoading(false)
    }
  }  

  useEffect(() => {
    getFact()
  }, [])

  if (loading) return <>Loading...</>
  if (error) return <>Error: {error.message}</>

  return (
    <>
      {fact ? <FactCard fact={fact}/> : "No fact available"}
    </>
  )
}

export default App

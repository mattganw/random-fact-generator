import { useState, useEffect } from 'react'
import './App.css'
import FactCard from './components/FactCard.jsx'

function App() {

  const [isToday, setIsToday] = useState(false)
  const [fact, setFact] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // get random fact
  const getRandomFact = async () => {
    try {
      setLoading(true)
      setError(null)
      setIsToday(false);

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

  // get today's fact
  const getTodayFact = async () => {
    try {
      setLoading(true)
      setError(null)
      setIsToday(true)

      const response = await fetch("http://localhost:3000/api/today");
      
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`)
      }

      const data = await response.json();
      setFact(data)

    } catch(err) {
      setError(err)
      console.error("failed to fetch today's fact: ", err)
    } finally {
      setLoading(false)
    }
  }
  
  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error("Failed to copy: ", err);
    } 
  };


  useEffect(() => {
    getRandomFact();
  }, [])

  if (error) return <p className="google-sans-p">Error: {error.message}</p>

  return (
    <>
      {fact ? 
        <FactCard 
          fact={fact}
          onGetNewFact={getRandomFact}
          onGetTodayFact={getTodayFact}
          isToday={isToday}
          onCopy={copyToClipboard}
          isLoading={loading}
        /> 
        : <div className="card skeleton">
            <div className="card-header"></div>
            <div className="fact-text"></div>
          </div>}
    </>
  )
}

export default App

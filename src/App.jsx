import { useState } from 'react'
import Header from './components/Header'
import UserInputs from './components/UserInputs'
import Results from './components/Results'

function App() {
      const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 10
      })
  const isValidInput = userInput.duration > 0

    function handleChange(key, value) {
        setUserInput((prevValue) => ({
            ...prevValue,
            [key]: +value
        }))
    }
  return (
    <>
     <Header />
      <UserInputs handleChange={handleChange} userInput={userInput} />
      {!isValidInput && <p className="center">Please enter valid duration more than zero.</p>}
      { isValidInput && <Results userInput={userInput} /> }
    </>
  )
}

export default App

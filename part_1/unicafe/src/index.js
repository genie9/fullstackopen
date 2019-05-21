import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = ({ text }) => (
  <h1>{text}</h1>
)

const Button = ({ handleClick, text }) => (
  <button style={{marginRight:5+'px'}} onClick={handleClick}>{text}</button>
)

const Stats = ({ text, stats }) => (
  <tr>
    <td>{text}</td>
    <td>{stats}</td>
  </tr>
)

const Statistics = ({ good, neutral, bad }) => {
  if (good > 0 | neutral > 0 | bad > 0) {
    return (
      <>
        <table cellSpacing="10">
          <tbody>
            <Stats text={'hyvä'} stats={good} />
            <Stats text={'neutraali'} stats={neutral} />
            <Stats text={'huono'} stats={bad} />
            <Stats text={'yhteensä'} stats={good + neutral + bad} />
            <Stats text={'keskiarvo'} stats={(good - bad) / (good + neutral + bad)} />
            <Stats text={'positiivisia'} stats={`${100 * good / (good + neutral + bad)} %`} />
          </tbody>
        </table>
      </>
    )
  }
  return (
    <p>Ei yhtään palautetta annettu</p>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const addToGood = (newValue) => () => {
    setGood(newValue)
  }
  const addToNeutral = (newValue) => () => {
    setNeutral(newValue)
  }
  const addToBad = (newValue) => () => {
    setBad(newValue)
  }

  return (
    <div>
      <Header text={'Anna palautetta'} />
      <Button handleClick={addToGood(good + 1)} text='hyvä' />
      <Button handleClick={addToNeutral(neutral + 1)} text='neutraali' />
      <Button handleClick={addToBad(bad + 1)} text='bad' />
      <Header text={'Statistiikka'} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)

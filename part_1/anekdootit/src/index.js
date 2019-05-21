import React, { useState} from 'react'
import ReactDOM from 'react-dom'


const Button = ({ handleClick, text }) => (
  <button  style={{marginRight:5+'px'}} onClick={handleClick}>{text}</button>
)

const Paragraph = ({header, anecdote, votes}) => (
  <>
    <h1>{header}</h1>
    <p>{anecdote}</p>
    <p>{votes}</p>
  </>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(props.anecdotes.length).fill(0))
  const random = max => Math.floor(Math.random() * max)

  const pickAnecdot = (max) => () => {
    const n = random(max)
    setSelected(n)
  }

  const addToVotes = (selected) => () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }
  
  const most = (arr) => {
    const copy = [...arr]
    copy.sort().reverse()
    return (votes.indexOf(copy[0]))
  }

  return (
    <div>
      <Paragraph header='Anecdote of the day' 
                 anecdote={props.anecdotes[selected]}
                 votes={`has ${votes[selected]} votes`}/>
      <Button handleClick={addToVotes(selected)} text={'vote'} />
      <Button handleClick={pickAnecdot(props.anecdotes.length)} text={'next anecdote'} />
      <Paragraph header='Anecdote with most votes' 
                 anecdote={props.anecdotes[most(votes)]}
                 votes={`has ${votes[most(votes)]} votes`}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)

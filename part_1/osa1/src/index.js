import React from 'react'
import ReactDOM from 'react-dom'

const Part = (props) => {
  return (
    <>
      <p>{props.name} {props.exercises}</p>
    </>
  )
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>        
    </div>
   )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>yhteensä {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} tehtävää</p>
    </div>
  )
}

const App = () => {  
  const course = 'Half Stack -sovelluskehitys'
  const parts = [
    {
      name: 'Reactin perusteet',
      exercises: 10
    },
    {
      name: 'Tiedonvälitys propseilla',
      exercises: 7
    },
    {
      name: 'Komponenttien tila',
      exercises: 14
    }
  ]
  parts.forEach(element => {
    console.log(element.name, element.exercises)})

  return (
    <>
      <Header course={course} />
      <Content
        parts={parts}
        // name0={parts[0].name} exercises0={parts[0].exercises} 
        // name1={parts[1].name} exercises1={parts[1].exercises} 
        // name2={parts[2].name} exercises2={parts[2].exercises}
        />
      <Total parts={parts} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

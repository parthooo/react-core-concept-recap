// import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const names = ['Rahman', 'Akram', 'Mojo']

  const students = [
    {id:'01', name: 'Farha', roll: 110},
    {id:'02', name: 'Wadud', roll: 111},
    {id:'03', name: 'Mofiz', roll: 112}
  ]

  const [persons, setPersons] = useState([])
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setPersons(data))
  }, [])

  return (
    <div className="App">
      <div>
        <MovieCounter></MovieCounter>
      </div>

      <div>
        <Abc name={names[0]} words="20"></Abc>
        <Abc name="Musfiq" words="40"></Abc>
        <Abc name={names[2]} words="50"></Abc>
        <Abc></Abc>
      </div>
  
      {
        students.map(student => <Student nameOfStudent={student.name} rollOfStudent={student.roll} key={student.id}></Student>)
      }

      {
        persons.map(person => <Person name={person.name} email={person.email} phone={person.phone} key={person.id}></Person>)
      }
    </div>
  );
}

function Abc(props) {
  const abcStyle = {
    border: '5px solid red',
    margin: '20px' 
  }
  return (
    <div style={abcStyle}>
      <h3>I am ABC-{props.name}</h3>
      <p>I am normal text with "{props.words || 10}" words</p>
    </div>
  )
}

function Student(props) {
  const studentStyle = {
    border: '5px solid green',
    margin: '20px' 
  }
  return (
    <div style={studentStyle}>
      <h3>Student name-{props.nameOfStudent}</h3>
      <p>Student Roll : {props.rollOfStudent}</p>
    </div>
  )
}

function Person(props) {
  const personStyle = {
    border: '5px solid orange',
    margin: '20px' 
  }
  return(
    <div style={personStyle}>
      <h3>Person name is: {props.name}</h3>
      <p>Person's email id is: {props.email}</p>
      <p>Person's phone number is: {props.phone}</p>
    </div>
  )
}

function MovieCounter() {
  const [count, setCount] = useState(0);
  
  const movieHandler = () => setCount(count + 1);

  return (
    <div>
      <button onClick={movieHandler}>Add Movie</button>
      <h3>Total movie watched : {count}</h3>
      <AnotherMovieCounter movie={count}></AnotherMovieCounter>
      <AnotherMovieCounter movie={count}></AnotherMovieCounter>
    </div>
  )
}

function AnotherMovieCounter(props) {
  return <h4> Movies I acted: {props.movie} </h4>
}

export default App;

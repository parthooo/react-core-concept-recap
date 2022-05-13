import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const names = ['Rahman', 'Akram', 'Mojo']
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

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

function Abc(props) {
  const abcStyle = {
    border: '2px solid red',
    margin: '5px' 
  }
  return (
    <div style={abcStyle}>
      <h3>I am ABC-{props.name}</h3>
      <p>I am normal text with "{props.words || 10}" words</p>
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

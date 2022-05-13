import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Rahman', 'Akram', 'Mojo']
  return (
    <div className="App">
      <Abc name={names[0]} words="20"></Abc>
      <Abc name="Musfiq" words="40"></Abc>
      <Abc name={names[2]} words="50"></Abc>
      <Abc></Abc>
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

export default App;

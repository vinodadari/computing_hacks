import React from 'react';
import { Demo, Demo2, Demo3, Demo4 } from './components/Demo';
// import logo from './logo.svg';
import Parent from './components/Parent';
import Sample from './components/Sample';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>This is App component</h1>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Demo></Demo>
      <Demo2></Demo2>
      <Demo3 Vinod="I am text for arrow function component" ></Demo3>
      <Demo4></Demo4>
      <Parent></Parent>
      <Sample></Sample>
    </div>
  );
}

export default App;

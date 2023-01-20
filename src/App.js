import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';

function App() {
  const [mode, setMode] = useState('info');

  function toggleMode() {
    console.log('clicked')
    if (mode === 'info') {
      setMode('success');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
    } else {
      setMode('info');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
     }
  }
  return (
    <div>
      <Navbar title='Text Utilities' toggleMode={toggleMode} mode={mode} />
      <TextForm heading='Enter Your Text To Format' mode={mode}/>
      {/* <About /> */}
    </div>
  );
}

export default App;

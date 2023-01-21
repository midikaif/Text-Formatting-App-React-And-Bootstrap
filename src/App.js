import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('info');
  const [alert, setAlert] = useState(null);

  function toggleMode() {
    console.log('clicked')
    if (mode === 'info') {
      setMode('success');
      document.body.style.backgroundColor = 'black'
      document.body.style.color = 'white'
      changeAlert('success', 'Switched to Dark Mode');
    } else {
      setMode('info');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      changeAlert('success', 'Switched to Light Mode')
    }
  }

  function changeAlert(res, msg) {
    setAlert({
      res: res,
      msg: msg
    });
    setTimeout(() => {
      setAlert(null)
    }, 1600);
  }

  return (
    <div>
      <BrowserRouter>
          <Navbar title='Text Utilities' toggleMode={toggleMode} mode={mode} />
          <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForm heading="Enter text to analyze" mode={mode} alert={changeAlert} />}>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <TextForm heading='Enter Your Text To Format' mode={mode} alert={changeAlert} />
      <About /> */}
    </div>
  );
}

export default App;

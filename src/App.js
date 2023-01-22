import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('info');
  const [alert, setAlert] = useState(null);

  function toggleMode() {
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
    }, 1800);
  }

  return (
    <div>
      <Navbar title='Text Formatter' toggleMode={toggleMode} mode={mode} />
      <Alert alert={alert} />
      <TextForm heading='Enter Your Text To Format' mode={mode} alert={changeAlert} />
    </div>
  );
}

export default App;

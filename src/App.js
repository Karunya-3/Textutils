import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// import About from './components/About.js';
import Navbar from './components/Navbar';
import Textform from './components/Textform.js';
import Alert from './components/Alert.js';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
      showAlert("Dark Mode Enabled", "Success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode Enabled", "Success");
    }
  }

  return (
    <div>
      {/* <BrowserRouter> */}
      <Navbar title="Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
          {/* <Route path="/about" element={<About showAlert={showAlert} mode={mode}/>} /> */}
          <Textform showAlert={showAlert} heading="Enter Text to analyze" mode={mode} />
        {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}

    </div>
    
  );
}

export default App;

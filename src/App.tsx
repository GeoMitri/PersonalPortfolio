import React from 'react';
import logo from './logo.svg';
import './App.css';
//Components
import { Thing } from './Components/Thing';
//Style
import X from './GlobalStyling';
//MUI
import Button from "@mui/material/Button";

function App() {
  return (
    /**
     <header className="App-header">
       <img src={logo} className="App-logo" alt="logo" />
       <p>
         Edit <code>src/App.tsx</code> and save to reload.
       </p>
       <a
         className="App-link"
         href="https://reactjs.org"
         target="_blank"
         rel="noopener noreferrer"
       >
         Learn React
       </a>
     </header>
     */
    <div className="App">
      <Thing />
      <div>
      <button>dsfdsf</button>
      <X.Button>ddsfdfsffs</X.Button>
      </div>
      <X.Div>
      <button>dsfdsf</button>
      <X.Button>ddsfdfsffs</X.Button>
      <Button variant="text">sdafsaf</Button>
      <Button variant="outlined" disabled>sddd</Button>
      </X.Div>
      <Button variant="contained">sfff</Button>
    </div>
    
  );
}

export default App;

import {Route, Routes } from "react-router-dom";
//Components
import { Introduction } from './Components/HomePage/Introduction';
//Style
import X from './PlayAround/GlobalStyling';
//MUI
import Button from "@mui/material/Button";
import ResponsiveAppBar from './Components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Projects } from "./Components/Projects/Projects";

const theme = createTheme({
  palette: {
    primary: {
      main: '#33ff11',
      light: '#aff4c1',
      dark: '#ff3f11',
    },
  },  
});


function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Introduction/>}/>
        <Route path="/Projects" element={<Projects />}/>
      </Routes>
    </div>
    
  );
}

export default App;

import {Route, Routes } from "react-router-dom";
//Components
import { Home } from './Components/Home/Home';
//Style
import X from './PlayAround/GlobalStyling';
//MUI
import Button from "@mui/material/Button";
import ResponsiveAppBar from './Components/Generic/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Projects } from "./Components/Projects/Projects";

import ProjectTemplate from "./Components/Project/ProjectTemplate";
import * as PROJECTS_DATA from "./Data/ProjectsData";
import * as TAGS_DATA from "./Data/ProjectTagsData";
import Contact from "./Components/Contact/Contact";
import { Project } from "./Objects/Interfaces";
import FullpageTesting from "./PlayAround/FullpageTesting";

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

    const myProjects : [string, Project][] = Object.entries(PROJECTS_DATA);

    return (
    <div className="App">
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<FullpageTesting/>}/> */}
        <Route path="/Projects" element={<Projects />}/>
        {myProjects.map((proj) => <Route path={"/Projects/" + proj[0]} element={<ProjectTemplate {...proj[1]}/>}/>)}

        <Route path="/Contact" element={<Contact/>}/> 
        {/* temp used for ProjectTemplate */}
        {/* <Route path="/Testing" element={<ProjectTemplate {...PROJECTS_DATA.GridBlade}/>}/>  */}
      </Routes>
    </div>
    
  );
}

export default App;
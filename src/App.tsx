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
import snesTheme from "./Components/Generic/Theme";





function App() {

    const myProjects : [string, Project][] = Object.entries(PROJECTS_DATA);

    return (
    <ThemeProvider theme={snesTheme}>      
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
    </ThemeProvider>
    
  );
}

export default App;
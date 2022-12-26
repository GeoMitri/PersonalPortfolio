import { createHashRouter, RouterProvider} from "react-router-dom";
//Components
import { Home } from './Components/Home/Home';
//MUI
import ResponsiveAppBar from './Components/Generic/Navbar';
import { ThemeProvider } from '@mui/material/styles';
import { Projects } from "./Components/Projects/Projects";

import ProjectTemplate from "./Components/Project/ProjectTemplate";
import * as PROJECTS_DATA from "./Data/ProjectsData";
import Contact from "./Components/Contact/Contact";
import { Project } from "./Objects/Interfaces";
import snesTheme from "./Components/Generic/Theme";
import ScrollToTop from "./Components/Generic/ScrollToTop";

function App() {

    const myProjects : [string, Project][] = Object.entries(PROJECTS_DATA); 

    const router = createHashRouter([
      { path: '/', element: <Home/>}, 
      { path: '/contact', element: <Contact/>}, 
      { path: '/projects/', element: <Projects/>}
    ].concat(
      myProjects.map((proj) => { return {
        path: `/projects/${proj[0]}`,
        element: <ProjectTemplate {...proj[1]}/>
      }})
    ));

    return (
      <ThemeProvider theme={snesTheme}>      
        <div className="App">
          <ResponsiveAppBar />
          <RouterProvider router={router}/> 
        </div>
      </ThemeProvider>
    );
}

export default App;
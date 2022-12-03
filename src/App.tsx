import { BrowserRouter, Route, Routes} from "react-router-dom";
//Components
import { Home } from './Components/Home/Home';
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
    
    // const router = createBrowserRouter(
    //   createRoutesFromElements(
    //     <Route>
    //       <Route path="/PersonalPortfolio" element={<Home />}/>
    //       <Route path="/PersonalPortfolio/Projects" element={<Projects />}/>
    //       {myProjects.map((proj) => <Route path={"/PersonalPortfolio/Projects/" + proj[0]} element={<ProjectTemplate {...proj[1]}/>}/>)}
    //       <Route path="/PersonalPortfolio/Contact" element={<Contact/>}/> 
    //     </Route>
    //   )
    // );

    return (
      <ThemeProvider theme={snesTheme}>      
      <div className="App">
        <ResponsiveAppBar />
        <BrowserRouter>
        <Routes>
        <Route path="/PersonalPortfolio" element={<Home />}/>
          <Route path="/PersonalPortfolio/Projects" element={<Projects />}/>
          {myProjects.map((proj) => <Route path={"/PersonalPortfolio/Projects/" + proj[0]} element={<ProjectTemplate {...proj[1]}/>}/>)}
          <Route path="/PersonalPortfolio/Contact" element={<Contact/>}/> 
        </Routes>
        </BrowserRouter>
        {/* <RouterProvider router={router}/>  */}
      </div>
      </ThemeProvider>
  );
}

export default App;
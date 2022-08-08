//Components
import { Introduction } from './Components/HomePage/Introduction';
//Style
import X from './PlayAround/GlobalStyling';
//MUI
import Button from "@mui/material/Button";
import ResponsiveAppBar from './Components/Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';


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
      <Introduction></Introduction>
      {/* <Thing />
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
      <Button variant="contained">sfff</Button> */}

    </div>
    
  );
}

export default App;

import { createTheme } from "@mui/material";


const snesTheme = createTheme({
    palette: {
        player1: {
            main: '#c1121c',
            light: "#e85b63",
            //dark
            contrastText: '#dbdbdb',
        },
        player2: {
            main: '#00387b',
            light: "#2896df",
            //dark
            contrastText: '#dbdbdb',
        },
        player3: {
            main: '#007243',
            light: "#13bd77",
            //dark
            contrastText: '#dbdbdb',
        },
        player4: {
            main: '#bc8a39',
            light: "#f0d46a",
            //dark
            contrastText: '#dbdbdb',
        },
        neutral: {
          main: '#707372',
          light: "#dbdbdb",
          dark: "#34332f",
        },
      },
    typography: {
        fontFamily: [
            'Prompt', 
            "sans-serif"
        ].join(",")
    }
  });

export default snesTheme; 
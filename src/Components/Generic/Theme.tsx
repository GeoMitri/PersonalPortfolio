import { createTheme } from "@mui/material";


const snesTheme = createTheme({
    palette: {
        player1: {
            main: '#c1121c',
            light: "#e85b63",
            //dark
            //contrastText: '#fff',
        },
        player2: {
            main: '#00387b',
            light: "#2896df",
            //dark
            //contrastText: '#fff',
        },
        player3: {
            main: '#007243',
            light: "#13bd77",
            //dark
            //contrastText: '#fff',
        },
        player4: {
            main: '#b89200',
            light: "#f0d46a",
            //dark
            //contrastText: '#fff',
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
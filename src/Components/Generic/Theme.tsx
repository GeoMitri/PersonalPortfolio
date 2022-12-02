import { createTheme, Typography } from "@mui/material";
import { breakpoints } from "@mui/system";

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
            main: '#d5ae2d',
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
        ].join(","),
    }

  });

  snesTheme.typography.h1 = {
    fontWeight:300,
    fontSize: '6rem',
    lineHeight:1.167,
    letterSpacing: "-0.01562em",
    [snesTheme.breakpoints.down('md')]: {
      fontSize: '3rem',
    },
  };

  snesTheme.typography.h2 = {
    fontWeight:300,
    fontSize: '3.75rem',
    lineHeight:1.2,
    letterSpacing: "-0.00833em",
    [snesTheme.breakpoints.down('md')]: {
        fontSize: '1.875rem',
    },
};

snesTheme.typography.h3 = {
    lineHeight:1.167,
    fontSize: '3rem',
    fontWeight:400,
    letterSpacing: "0em",
    [snesTheme.breakpoints.down('md')]: {
      fontSize: '1.5rem',
    },
};

snesTheme.typography.h4 = {
    fontWeight:400,
    fontSize: '2.125rem',
    lineHeight:1.235,
    letterSpacing: "0.00735em",
    [snesTheme.breakpoints.down('md')]: {
      fontSize: '1.0625rem',
    },
};

snesTheme.typography.h5 = {
    fontWeight:400,
    fontSize: '1.5rem',
    lineHeight:1.334,
    letterSpacing: "0em",
    [snesTheme.breakpoints.down('md')]: {
      fontSize: '0.75rem',
    },
};

snesTheme.typography.h6 = {
    fontWeight:500,
    fontSize: '1.25rem',
    lineHeight:1.6,
    letterSpacing: "0.0075em",
    [snesTheme.breakpoints.down('md')]: {
      fontSize: '1rem',
    },
};

export default snesTheme; 
import { ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
        player1: Palette['primary'];
        player2: Palette['primary'];
        player3: Palette['primary'];
        player4: Palette['primary'];
        neutral: Palette['primary'];
    }
    interface PaletteOptions {
      neutral: PaletteOptions['primary'];
      player1: PaletteOptions['primary'];
      player2: PaletteOptions['primary'];
      player3: PaletteOptions['primary'];
      player4: PaletteOptions['primary'];
      neutral: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
        player1: true;
        player2: true;
        player3: true;
        player4: true;
        neutral: true;
    }
  }

declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonGroupColorOverrides {
      player1: true;
      player2: true;
      player3: true;
      player4: true;
      neutral: true;
  }
}

declare module '@mui/material/Chip' {
  interface ChipPropsColorOverrides {
      player1: true;
      player2: true;
      player3: true;
      player4: true;
      neutral: true;
  }
}

// declare module "@mui/material/styles" {
//     interface Theme {
//         gameCol: {
//             player1: string
//             player2: string
//             player3: string
//             player4: string
//             player1Light: string
//             player2Light: string
//             player3Light: string
//             player4Light: string
//             bodyGrayLight: string
//             bodyGrayDark: string
//             fontBlack: string
//         }
//     }


//     interface ThemeOptions {
//         gameCol: {
//             player1: React.CSSProperties["color"];
//             player2: React.CSSProperties["color"];
//             player3: React.CSSProperties["color"];
//             player4: React.CSSProperties["color"];
//             player1Light: React.CSSProperties["color"];
//             player2Light: React.CSSProperties["color"];
//             player3Light: React.CSSProperties["color"];
//             player4Light: React.CSSProperties["color"];
//             bodyGrayLight: React.CSSProperties["color"];
//             bodyGrayDark: React.CSSProperties["color"];
//             fontBlack: React.CSSProperties["color"];
//         }
//     }   
// }
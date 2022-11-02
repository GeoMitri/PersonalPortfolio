import { useRef, useState, ReactNode } from 'react';
import { Box, Button, Grid, TextField, CircularProgress, Snackbar, Alert, AlertColor} from "@mui/material";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import EmailForm from './Contact-EmailForm';
import { SocialIcon } from 'react-social-icons';

/** My socials + email me via email.js 
 * TODO: Socials buttons
*/
function Contact() { 
    return(
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
        <Grid bgcolor="brown" container direction="row" justifyContent="center" alignItems="left" margin={3}>
            <Grid container xs={12} justifyContent="center" sx={{backgroundColor:"turquoise"}}>
                Contact
            </Grid>
            <Grid container xs={12} justifyContent="center" sx={{backgroundColor:"teal"}}>
                <EmailIcon/>
                Email Me!
            </Grid>

            <EmailForm/>
               
            <Grid container xs={12} justifyContent="center" sx={{backgroundColor:"turquoise"}}>
                Socials
            </Grid>

            <Grid container xs={8} justifyContent="space-evenly" sx={{backgroundColor:"turquoise"}}>
                <SocialIcon url="https://www.linkedin.com/in/george-mitri-10b65a118/"/>
                <SocialIcon url="https://discordapp.com/users/260225926476988416/"/>
                <SocialIcon url="https://twitter.com/SorzeeMitri"/>
                <SocialIcon url="https://www.instagram.com/georgemichaelmitri/"/>
                <SocialIcon url="https://www.facebook.com/george.mitri.9"/>
                <SocialIcon url="https://github.com/GeoMitri"/>
            </Grid>

        </Grid>
        </Box>
    )
}

export default Contact;
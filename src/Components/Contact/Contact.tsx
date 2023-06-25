import { useRef, useState, ReactNode } from 'react';
import { Box, Button, Grid, TextField, CircularProgress, Snackbar, Alert, AlertColor, Typography, Divider} from "@mui/material";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailForm from './Contact-EmailForm';
import { SocialIcon } from 'react-social-icons';
import { useLocation } from 'react-router-dom';
import { useLayoutEffect } from "react";


function Contact() { 

    const location = useLocation();
    useLayoutEffect(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, [location.pathname]);

    return(
        <Box bgcolor="neutral.light" sx={{display: 'flex', flexWrap: "nowrap",}}>
        <Grid container direction="row" justifyContent="center" alignItems="left" margin={3}>
            <Typography color={"neutral.dark"} variant="h1" fontWeight={"bold"} lineHeight={1.5} gutterBottom justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                CONTACT
            </Typography>

            <Grid container direction="row" xs={12} justifyContent="center" spacing={0}>
                <Typography color={"neutral.dark"} variant="h3" justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                Email Me!
                </Typography>
            </Grid>

            <EmailForm/>

            <Grid container marginTop={5} direction="row" xs={12} justifyContent="center">
                <Typography color={"neutral.dark"} variant="h3" gutterBottom justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    Socials
                </Typography>
            </Grid>

            <Grid container xs={8} marginBottom={2} justifyContent="space-evenly">
                <SocialIcon url="https://www.linkedin.com/in/george-mitri-10b65a118/" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon url="https://discordapp.com/users/260225926476988416/" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon url="https://twitter.com/SorzeeMitri" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon url="https://github.com/GeoMitri" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon url="https://www.instagram.com/georgemichaelmitri/" target="_blank" rel="noopener noreferrer"/>
                <SocialIcon url="https://www.facebook.com/george.mitri.9" target="_blank" rel="noopener noreferrer"/>
            </Grid>

            <Grid container xs={12} marginTop={2} justifyContent="center">
                <Divider variant="fullWidth" style={{width:'100%'}} ></Divider>
            </Grid>

            <Grid container marginTop={4} direction="row" xs={12} justifyContent="center">
                <Typography color={"neutral.dark"} variant="body1" gutterBottom justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    <EmailIcon sx={{marginRight:1}}/> georgemmitri@gmail.com
                </Typography>
                <Typography color={"neutral.dark"} variant="body1" gutterBottom justifyContent={"center"} sx={{display: 'flex', flex: 1}}>
                    <PhoneIcon sx={{marginRight:1}}/> (+61) 406 900 981
                </Typography>
            </Grid>


        </Grid>
        </Box>
    )
}

export default Contact;
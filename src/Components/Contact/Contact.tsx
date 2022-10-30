import { useRef, useState, ReactNode } from 'react';
import { Box, Button, Grid, TextField, CircularProgress, Snackbar, Alert, AlertColor} from "@mui/material";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';

/** My socials + email me via email.js 
 * TODO: Socials buttons
*/
function Contact() { 
    
    const myForm = useRef();


    const [submitDisabled, setsubmitDisabled] = useState<boolean>(false);
    const [submitIcon, setSubmitIcon] = useState<ReactNode>(<SendIcon/>);

    const sendEmail = (e : any) => {
        e.preventDefault();
        setsubmitDisabled(true);
        setSubmitIcon(<CircularProgress size={20}/>);
        
        emailjs.sendForm("service_pnpz824", "template_9r1tzoc", myForm.current!, "MqlJX_XWupVhGJLPA")
        .then((result) => {
            console.log(result.text);
            setSubmitIcon(<SendIcon/>);
            setsubmitDisabled(false);

            setFeedbackSeverity("success");
            setfeedbackMessage("Email sent! George will respond as soon as possible.")
            setOpen(true);
            
        }, (error) => {
            console.log(error.text);
            setSubmitIcon(<SendIcon/>);
            setsubmitDisabled(false);            
            
            setFeedbackSeverity("error");
            setfeedbackMessage("Email failed to send. " + error.text)
            setOpen(true);

        });
    };


    //email feedback
    const [open, setOpen] = useState(false);
    const [feedbackSeverity, setFeedbackSeverity] = useState<AlertColor | undefined>("success");
    const [feedbackMessage, setfeedbackMessage] = useState<string>("");
    
    const handleCloseFeedback = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') { return; }
        setOpen(false);
    };

    return(
        <Box bgcolor="secondary.main" sx={{display: 'flex', flexWrap: "nowrap",}}>
        <Grid bgcolor="azure" container direction="row" justifyContent="center" alignItems="left" margin={3}>
            <Box bgcolor="chocolate" component="form" ref={myForm} onSubmit={sendEmail}>
                <TextField required label="Full Name" type="text" name="user_name" fullWidth />
                <TextField required label="Email" type="email" name="user_email" fullWidth />
                <TextField required label="Message" name="message" fullWidth multiline rows={5} />
                <Button disabled={submitDisabled} type="submit" value="Send" endIcon={submitIcon}>Send</Button>
            </Box>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseFeedback}>
                <Alert severity={feedbackSeverity} sx={{ width: '100%' }}>
                    {feedbackMessage}
                </Alert>
            </Snackbar>       
        </Grid>
        </Box>
    )
}

export default Contact;
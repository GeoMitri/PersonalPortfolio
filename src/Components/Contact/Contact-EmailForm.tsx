import { useRef, useState, ReactNode } from 'react';
import { Box, Button, Grid, TextField, CircularProgress, Snackbar, Alert, AlertColor} from "@mui/material";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';


function EmailForm() { 
    
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
            setfeedbackMessage("Email failed to send :( Please try again later." + error.text)
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

    return(<>

        <Box component="form" ref={myForm} onSubmit={sendEmail}>
            <TextField margin="normal" required label="Full Name" type="text" name="user_name" fullWidth />
            <TextField margin="normal" required label="Email" type="email" name="user_email" fullWidth />
            <TextField margin="normal" required label="Message" name="message" fullWidth multiline rows={5} />
            <Box display="flex" justifyContent="flex-end">
            <Button disabled={submitDisabled} type="submit" value="Send" endIcon={submitIcon} variant="contained" color="player3">Send</Button>
            </Box>
        </Box>

        <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseFeedback}>
            <Alert severity={feedbackSeverity} sx={{ width: '100%' }}>
                {feedbackMessage}
            </Alert>
        </Snackbar>

    </>)
}

export default EmailForm;
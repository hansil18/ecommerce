import { Dialog,DialogContent,makeStyles,Box,Typography,TextField,Button} from "@material-ui/core";
import { useState } from "react";
import { authenticateLoginIn, authenticateSignup } from "../../service/api";

const useStyle = makeStyles({
    container: {
        height: '70vh',
        width: '90vh'
    },
    login: {
        padding: '25px 35px',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        '& > *': {
            marginTop: 20,

        }
    },
    image: {
        backgroundImage: `url(${'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png'})`,
        height: '70vh',
        backgroundRepeat: 'no-repeat',
        background: '#2874f0',
        width: '40%',
        backgroundPosition: 'center 85%',
        padding: '45px 35px',
        '& > *': {
            color: '#ffffff',
            fontWeight: 600
        }
    },
    signup: {
        view: 'signup',
        heading: 'Looks like youre new here!',
        subHeading: 'Sign up with your mobile number to get started'
    },
    text: {
        color: '#878787',
        fontSize: 12
    },
    loginB: {
        textTransform: 'none',
        background: '#fb641b',
        color: '#ffffff',
        height: 48,
        borderRadius: 2
    },
    reqB: {
        textTransform: 'none',
        background: '#ffffff',
        color: '#2874f0',
        fontWeight: 550,
        height: 48,
        borderRadius: 2,
        boxShadow: '0 2px 4px 0 rgb(0 0 0 / 20%)'
    },
    createTxt: {
        textAlign: 'center',
        marginTop: 'auto',
        fontSize: 14,
        color: '#2874f0',
        fontWeight: 600,
        cursor: 'pointer' 
    },
    error: {
        fontSize: 10,
        color: '#ff6161',
        marginTop: 10,
        fontWeight: 600,
        lineHeight: 0
    }
})

const initialValue = {
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations' 
    },
    signup: {
        view: 'signup',
        heading: 'Looks like you\'re new here!',
        subHeading: 'Sign up with your mobile number to get started'
    }
}

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValues = {
    username: '',
    passoword: ''
}

const Login = ({ open, setopen, setAccount}) => {
    const classes = useStyle();

    const [account,toggleAccount] = useState(initialValue.login);

    const [signup, setSignup] = useState(signupInitialValues);

    const [login, setLogin] = useState(loginInitialValues);

    const [error, setError] = useState(false);

    const toggleUserAccount = () => {
        toggleAccount(initialValue.signup)
    }

    const closedialogue = () => {
        setopen(false);
        toggleAccount(initialValue.login)
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value});
        console.log(signup);
    }

    const singupUser = async () => {
        let response = await authenticateSignup(signup);
        if(!response) return;
        closedialogue();
        setAccount(signup.username);
    }

    const loginUser = async () => {
        let response = await authenticateLoginIn(login);
        if(!response)
        {
            setError(true);
            return;
        }
        closedialogue();
        setAccount(login.username);
    }

    const onValueChange = (e) => {
        setLogin({ ...login,[e.target.name]: e.target.value });
    }

    return (
        <Dialog open = {open} onClose = {closedialogue}>
            <DialogContent className = {classes.container}>
                <Box style = {{display: 'flex'}}>
                    <Box className = {classes.image}>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{marginTop:20}}>{account.subHeading}</Typography>
                    </Box>
                    {
                        account.view === 'login' ?
                        <Box className = {classes.login}>
                            <TextField onChange={(e) => onValueChange(e)} name='username' label='Enter Username/Mobile number' />
                            <TextField onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />
                            {error && <Typography className={classes.error}>Invalid Username or Password</Typography>} 
                            <Typography className={classes.text}>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Typography>
                            <Button variant="contained" onClick = {() => loginUser()} className={classes.loginB}>Login</Button>
                            <Typography className={classes.text} style={{textAlign: 'center'}}>OR</Typography>
                            <Button variant="contained" className={classes.reqB}>Request OTP</Button>
                            <Typography onClick = {() => toggleUserAccount()} className={classes.createTxt}>New to Flipkart? Create an account</Typography>
                        </Box>
                        :
                        <Box className={classes.login}>
                            <TextField onChange={(e) => onInputChange(e)} name='firstname' label='Enter Firstname' />
                            <TextField onChange={(e) => onInputChange(e)} name='lastname' label='Enter Lastname' />
                            <TextField onChange={(e) => onInputChange(e)} name='username' label='Enter Username' />
                            <TextField onChange={(e) => onInputChange(e)} name='email' label='Enter Email' />
                            <TextField onChange={(e) => onInputChange(e)} name='password' label='Enter Password' />
                            <TextField onChange={(e) => onInputChange(e)} name='phone' label='Enter Phone Number' />
                            <Button variant="contained" onClick={() => singupUser()} className={classes.loginB}>Signup</Button>
                        </Box>
                    }
                </Box>
            </DialogContent>
        </Dialog>
    )
}

export default Login;
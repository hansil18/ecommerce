import {Box,Button,makeStyles,Typography,Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { useState, useContext } from 'react';

import Logindialogue from './../login/Login'
import { LoginContext } from '../../context/ContextProvider';
import Profile from './Profile';

const useStyle = makeStyles({
    login: {
        background : 'white',
        color: '#2874f0',
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        alignItems: 'center',
        '& > *': {
            marginRight: 50,
            textDecoration: 'none',
            color: 'white'
        }
    },
    cart: {
        display: 'flex'
    },
    more: {
        display: 'flex'
    }
})
const Headerbuttons = () => {
    const classes = useStyle();
    const [open,setopen] = useState(false);
    const { account, setAccount } = useContext(LoginContext);

    const opendialogue = () => {
        setopen(true);
    }
    return (
        <Box className = {classes.wrapper}>
            {
                account ? <Profile account = {account} setAccount = {setAccount} /> :
                <Link>
                    <Button variant = 'contained' onClick = {() => opendialogue()} className = {classes.login}>Login</Button>
                </Link>
            }
            <Box className = {classes.more}>
                <Typography>More</Typography>
                <KeyboardArrowDownIcon style = {{fontSize: 15,marginTop: 5}} />
            </Box>
            <Link to = '/cart' className = {classes.cart}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style = {{marginLeft: 10}}>Cart</Typography>
            </Link>
            <Logindialogue open = {open} setopen = {setopen} setAccount = {setAccount}/>
        </Box>
    )
}

export default Headerbuttons;
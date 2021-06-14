import {Box,Button,makeStyles,Typography,Badge} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
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
            marginRight: 50
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
    return (
        <Box className = {classes.wrapper}>
            <Button variant = 'contained' className = {classes.login}>Login</Button>
            <Box className = {classes.more}>
                <Typography>More</Typography>
                <KeyboardArrowDownIcon style = {{fontSize: 15,marginTop: 5}} />
            </Box>
            <Box className = {classes.cart}>
                <Badge badgeContent={4} color="secondary">
                    <ShoppingCart />
                </Badge>
                <Typography style = {{marginLeft: 10}}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default Headerbuttons;
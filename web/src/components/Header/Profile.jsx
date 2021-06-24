import { useState } from "react";
import { makeStyles, Typography, Menu, MenuItem, Box} from "@material-ui/core";
import { Link } from "react-router-dom";
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const useStyle = makeStyles({
    component: {
        marginTop: 40
    },
    logout: {
        marginLeft: 20,
        fontSize: 14
    }
})

const Profile = ({ account, setAccount}) => {
    const [open, setOpen] = useState(false);

    const classes = useStyle();

    const handleClose = () => {
        setOpen(false);
    }

    const handleClick = (event) => {
        setOpen(event.currentTarget);
    }

    const logout = () => {
        setAccount('');
    }

    return (
        <>
            <Link>
                <Box style = {{display: 'flex'}}>
                    <Typography onClick = {handleClick} style = {{ marginTop: 'auto'}}>
                        {account}
                    </Typography>
                    <KeyboardArrowDownIcon style = {{fontSize: 15,marginTop: 5}} />
                </Box>
            </Link>
            <Menu
                anchorEl = {open}
                open = {Boolean(open)}
                onClose = {handleClose}
                className = {classes.component}
            >
                <MenuItem onClick = {() => {handleClose(); logout();}}>
                    <PowerSettingsNewIcon fontSize = "small" color = "primary" />
                    <Typography className = {classes.logout}>Logout</Typography>
                </MenuItem>
            </Menu>
        </>
    )
}

export default Profile;
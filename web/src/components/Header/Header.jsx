import {AppBar,Toolbar,makeStyles,Box,Typography,withStyles} from '@material-ui/core';
import Searchbar from './Searchbar';
import Headerbuttons from './Headerbuttons';
const useStyle = makeStyles({
    header: {
        background: '#2874f0',
        height: 55
    },
    logo: {
        width: 75
    },
    subURL: {
        width: 10,
        height: 10,
        marginLeft: 4
    },
    subHeading: {
        fontSize: 10,
        fontStyle: 'italic'
    },
    container: {
        display: 'flex'
    },
    component: {
        marginLeft: '12%',
        lineHeight: 0,
        color: '#FFFFFF',
        textDecoration: 'none'
    }
})

const ToolBar = withStyles({
    root: {
      minHeight: 55
    },
})(Toolbar);

const Header = () => {
    const classes = useStyle();
    const logo = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <AppBar className = {classes.header}>
            <ToolBar>
                <Box className = {classes.component}>
                    <img src = {logo} className = {classes.logo} />
                    <Box component = "span" className = {classes.container}>
                        <Typography className = {classes.subHeading}>Explore
                            <Box component = "span" style = {{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </Typography>
                        <img src = {subURL} className = {classes.subURL} />
                    </Box>
                </Box>
                <Searchbar/>
                <Headerbuttons />
            </ToolBar>
        </AppBar>
    )
}

export default Header;
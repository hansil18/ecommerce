import { navData } from "../../constants/data";
import {Box,Typography,makeStyles} from '@material-ui/core';

const useStyle = makeStyles({
    container: {
        display: 'flex',
        margin: '55px 130px 0 130px',
        justifyContent: 'space-between'
    },
    navdata: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 64
    },
    text: {
        fontSize: 14,
        fontWeight: 600
    }
})
const Navbar = () => {
    const classes = useStyle();
    return (
        <Box className = {classes.container}>
            {navData.map(
                (data) => (
                    <Box className = {classes.navdata}>
                        <img src = {data.url} className = {classes.image}></img>
                        <Typography className = {classes.text}>{data.text}</Typography>
                    </Box>
                )
            )}
        </Box>
    )
}
export default Navbar;
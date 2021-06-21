import { Dialog,DialogContent,makeStyles} from "@material-ui/core";

const useStyle = makeStyles({
    container: {
        height: '70vh',
        width: '90vh'
    }
})

const Login = ({ open, setopen}) => {
    const classes = useStyle();
    const closedialogue = () => {
        setopen(false);
    }
    return (
        <Dialog open = {open} onClose = {closedialogue}>
            <DialogContent className = {classes.container}>
                <p>hello</p>
            </DialogContent>
        </Dialog>
    )
}

export default Login;
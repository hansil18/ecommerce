import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import { makeStyles,Box,Typography} from '@material-ui/core';
import Products, { products } from '../../constants/data';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
};

const useStyle = makeStyles({
    image: {
        height: 150
    },
    component: {
        marginTop: 12,
        background: 'white'
    },
    deal: {
        padding: '15px 20px'
    }
})
const Slide = () => {
    const classes = useStyle();
    const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';
    return (
        <Box className = {classes.component}>
            <Box className = {classes.deal}>
                <Typography>Deal of the day</Typography>
            </Box>
            <Carousel
                responsive={responsive}
                infinite = {true}
                draggable = {false}
                swipeable = {false}
                centerMode = {true}
                autoPlay =  {true}
                autoPlaySpeed = {10000}
                keyBoardControl = {true}
                removeArrowOnDeviceType = {["tablet","mobile"]}
                containerClass="carousel-container"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {
                    products.map(products => (
                        <img src = {products.url} className = {classes.image}/>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;
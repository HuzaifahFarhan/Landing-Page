import { Grid, Paper } from "@mui/material";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card1 from "../Assets/C1.png";
import Card2 from "../Assets/C2.png";
import Card3 from "../Assets/C3.png";
import Card4 from "../Assets/C4.png";
import Card5 from "../Assets/C5.png";
import Card6 from "../Assets/C6.png";
import Card7 from "../Assets/C7.png";
import Card8 from "../Assets/C8.png";
import Card9 from "../Assets/C9.png";
import Card10 from "../Assets/C10.png";
import Card11 from "../Assets/C11.png";
import Card12 from "../Assets/C12.png";
import { Box, margin } from "@mui/system";

const LowerSlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 12,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <>
      <Carousel
        swipeable={false}
        draggable={false}
        showDots={true}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        //   deviceType={this.props.deviceType}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Box sx={{ display: "flex" }}>
          <img src={Card1} width="100%" />
          <img src={Card2} width="100%" />
          <img src={Card3} width="100%" />
          <img src={Card4} width="100%" />
          <img src={Card5} width="100%" />
          <img src={Card6} width="100%" />
          <img src={Card7} width="100%" />
          <img src={Card8} width="100%" />
          <img src={Card9} width="100%" />
          <img src={Card10} width="100%" />
          <img src={Card11} width="100%" />
          <img src={Card12} width="100%" />
        </Box>
      </Carousel>
      ;
    </>
  );
};
export default LowerSlider;

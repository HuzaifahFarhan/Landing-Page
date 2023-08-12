import { Box } from "@mui/system";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Slider1 from "../Assets/S1.png";
import Slider2 from "../Assets/S2.png";
import Slider3 from "../Assets/S3.png";
import Slider4 from "../Assets/S4.png";
import Slider5 from "../Assets/S5.png";
import Slider6 from "../Assets/S6.png";
import Slider7 from "../Assets/S7.png";
import Slider8 from "../Assets/S8.png";
import Slider9 from "../Assets/S9.jpg";
import RightBanner1 from "../Assets/RightBanner1.png";
import RightBanner2 from "../Assets/RightBanner2.png";

const MySlider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
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
      <Box sx={{display:"flex"}}>
        <Box sx={{ width: "70%" }}>
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlay={this.props.deviceType !== "mobile" ? true : false}
          autoPlaySpeed={10}
          // keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          // deviceType={this.props.deviceType}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <Box>
            <img src={Slider1} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider2} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider3} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider4} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider5} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider6} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider7} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider8} width={"100%"} />
          </Box>
          <Box>
            <img src={Slider9} width={"100%"} />
          </Box>
        </Carousel>
        </Box>
        <Box sx={{ width: "30%" }}>
          <img src={RightBanner1}  width={"50%"}/>
          <img src={RightBanner2} width={"50%"}/>
        </Box>
      </Box>
    </>
  );
};
export default MySlider;

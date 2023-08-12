import { Box } from "@mui/material";
import React from "react";
import Banner1 from "../components/Banner1";
import LowerSlider from "../components/LowerSlider";
import MyNavbar from "../components/MyNavbar";
import MySlider from "../components/MySlider";
import MySubMenu from "../components/MySubMenu";
import SecondDiv from "../components/SecondDiv";

const HomeComponents = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#FFFEEB" }}>
        <MyNavbar />
        <MySubMenu />
        <Banner1 />
        <MySlider />
        <LowerSlider />
      </Box>
      <Box sx={{ backgroundColor: "#F7F7FA" }}>
        <SecondDiv />
      </Box>
    </>
  );
};

export default HomeComponents;

import { Box } from "@mui/material";
import React from "react";
import div2card1 from "../Assets/1.png";
import div2card2 from "../Assets/2.png";
import div2card3 from "../Assets/3.png";
import div2card4 from "../Assets/4.png";
import div3card5 from "../Assets/5.jpg";
import div3card6 from "../Assets/6.jpg";
import div3card7 from "../Assets/7.jpg";
import div3card8 from "../Assets/8.jpg";
import div4card9 from "../Assets/9.png";
import div4card10 from "../Assets/10.png";
import MyCard from "./MyCard";

const SecondDiv = () => {
  return (
    <>
      <Box sx={{ display: "flex",
              justifyContent: "space-evenly", }}>
        <Box sx={{ width: "33%", backgroundColor: "white", margin: "15px 0px 20px 15px" }}>
          <h2 style={{ margin: "10px" }}>More reasons to shop</h2>
          <img style={{ width: "45%", margin: "10px" }} src={div2card1} />
          <img style={{ width: "45%", margin: "10px" }} src={div2card2} />
          <img style={{ width: "45%", margin: "10px" }} src={div2card3} />
          <img style={{ width: "45%", margin: "10px" }} src={div2card4} />
        </Box>

        {/* Second box */}

        <Box sx={{ width: "33%", backgroundColor: "#FEFAAC", margin: "15px 0px 20px 15px" }}>
          <h2 style={{ margin: "10px" }}>Mega Deals</h2>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "15px",
            }}
          >
            <MyCard image={div3card5} text={"HP Desk Jet"} />
            <MyCard image={div3card6} text={"HP Desk Jet"} />
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginTop: "15px",
            }}
          >
            <MyCard image={div3card7} text={"HP Desk Jet"} />
            <MyCard image={div3card8} text={"HP Desk Jet"} />
          </Box>
        </Box>

        {/* ThirdBox */}

        <Box sx={{ width: "33%", backgroundColor: "white", margin: "15px 0px 20px 15px" }}>
          <h2 style={{ margin: "10px" }}>In focus</h2>
          <img style={{ width: "95%", margin: "10px" }} src={div4card9} />
          <img style={{ width: "95%", margin: "10px" }} src={div4card10} />
        </Box>
      </Box>
        <h2 style={{ margin: "0px 0px 20px 15px", paddingBottom:"15px" }}>Recommended for you</h2>
    </>
  );
};

export default SecondDiv;

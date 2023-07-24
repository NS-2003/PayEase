import React, { useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import imgDetail2 from "../assets/makePayment.png";
import {
  FaUserCircle,
  FaPeriscope,
  FaBuilding,
  FaIdCard,
} from "react-icons/fa";

function MakePayment() {
  const regions = [
    {
      region: "Select Region",
      value: "",
    },
    {
      region: "Chennai",
      value: "chennai",
    },
    {
      region: "Madurai",
      value: "madurai",
    },
    {
      region: "Coimbatore",
      value: "coimbatore",
    },
  ];

  const [region, setRegion] = useState("");
  const [isSecondInputDisabled, setSecondInputDisabled] = useState(true);
  const [secondInputOptions, setSecondInputOptions] = useState([{ value: "", text: "Select Apartment" }]);
  
  const handleFirstInputChange = (event) => {
    const value = event.target.value;
    
    setRegion(value);
    setSecondInputDisabled(value === "");

    if (value === "chennai") {
      setSecondInputOptions([
        { value: "", text: "Select Apartment" },
        { value: "ashiana shubham", text: "Ashiana Shubham" },
      ]);
    } else if (value === "coimbatore") {
      setSecondInputOptions([
        { value: "", text: "Select Apartment" },
        { value: "helloworld kovai", text: "HelloWorld Kovai" },
        { value: "helloworld spring", text: "HelloWorld Spring" },
      ]);
    } else if (value === "madurai") {
      setSecondInputOptions([
        { value: "", text: "Select Apartment" },
        { value: "helloworld madurai", text: "HelloWorld Madurai" },
      ]);
    } else {
      setSecondInputOptions([]);
    }
  };

  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });
  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 2,
        // px: 2,
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        sx={{
          order: { xs: 4, sm: 4, md: 3 },
        }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={imgDetail2}
          alt=""
          style={{
            width: "70%",
          }}
        />
      </Grid>

      <CustomGridItem
        item
        xs={12}
        sm={8}
        md={6}
        sx={{
          order: { xs: 3, sm: 3, md: 4 },
        }}
      >
        <Box
          component="article"
          sx={{
            px: 4,
          }}
        >
          <Title
            text={"Make Secure Payments with PayEase"}
            textAlign={"center"}
          />
          <Paragraph
            text={
              "PayEase employs state-of-the-art encryption technology to safeguard your sensitive financial data."
            }
            maxWidth={"sm"}
            mx={0}
            textAlign={"center"}
          />
          <form action="#" className="contact-form" style={{ width: "100%" }}>
            <h2 className="title"></h2>
            <div className="input-field">
              <i className="user">
                {" "}
                <FaUserCircle />{" "}
              </i>
              <input type="number" placeholder="Mobile Number" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaPeriscope />
              </i>
              {/* <input type="text" placeholder="Region" /> */}
              <select
                name="cars"
                id="cars"
                value={region}
                onChange={handleFirstInputChange}
              >
                {regions.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.region}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-field">
              <i className="dateofbirth">
                <FaBuilding />
              </i>
              <select disabled={isSecondInputDisabled}>
                {secondInputOptions.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaIdCard />
              </i>
              <input type="text" placeholder="Apartment Number" />
            </div>
            <a type="submit" href="/" value="Login" className="btnm">
              Pay
            </a>
          </form>
        </Box>
      </CustomGridItem>
    </Grid>
  );
}

export default MakePayment;

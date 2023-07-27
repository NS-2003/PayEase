import React from "react";
import { Box, Button, styled, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import BillNavbar from "./BillNavbar";
//img
import headerImg from "../assets/landingPage.png";

const MyBills = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(3),
    // cor de fundo
    [theme.breakpoints.down("md")]: {
      paddingTop: theme.spacing(3),
      // flexDirection: "column",
      // alignItems: "center",
      // textAlign: "center",
    },
  }));
  return (
    <CustomBox component="header">
      <BillNavbar />
    </CustomBox>
  );
};

export default MyBills;

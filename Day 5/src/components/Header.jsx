import React from "react";
import { Box, Button, styled, Typography, Grid } from "@mui/material";
import { Link } from "react-router-dom";
//img
import headerImg from "../assets/landingPage.png";

const Header = () => {
  const CustomBox = styled(Box)(({ theme }) => ({
    minHeight: "80vh",
    display: "flex",
    justifyContent: "center",
    // tamanhos
    gap: theme.spacing(2),
    paddingTop: theme.spacing(10),
    // cor de fundo
    backgroundColor: "orange",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
    },
  }));

  const BoxText = styled(Box)(({ theme }) => ({
    flex: "1",
    paddingLeft: theme.spacing(8),
    [theme.breakpoints.down("md")]: {
      flex: "2",
      textAlign: "center",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },
  }));

  return (
    <CustomBox component="header">
      {/*  Box text  */}
      <BoxText component="section">
        <Typography
          variant="h2"
          component="h1"
          sx={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: 700,
            color: "#fff",
          }}
        >
          Effortless Bill Payments: Simplify Your Life with Ease
        </Typography>

        <Typography
          variant="p"
          component="p"
          sx={{
            py: 3,
            lineHeight: 1.6,
            color: "#fff",
          }}
        >
          Say goodbye to the hassle of bill payments and embrace convenience
          like never before.
        </Typography>

        <Box>
          <Button
            variant="contained"
            sx={{
              mr: 2,
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              textTransform: "capitalize",
              borderRadius: 0,
              fontFamily: "Poppins, sans-serif",
              borderColor: "#14192d",
              color: "#fff",
              backgroundColor: "#14192d",
              "&&:hover": {
                backgroundColor: "#343a55",
              },
              "&&:focus": {
                backgroundColor: "#343a55",
              },
            }}
          >
            Get Started
          </Button>
          <Button
            component={Link}
            to={"/addPayment"}
            variant="outlined"
            sx={{
              px: 4,
              py: 1,
              fontSize: "0.9rem",
              fontFamily: "Poppins, sans-serif",
              textTransform: "capitalize",
              borderRadius: 0,
              color: "#fff",
              backgroundColor: "transparent",
              borderColor: "#fff",
              "&&:hover": {
                color: "#343a55",
                borderColor: "#343a55",
              },
              "&&:focus": {
                color: "#343a55",
                borderColor: "#343a55",
              },
            }}
          >
            Add Payment
          </Button>
        </Box>
      </BoxText>

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
          src={headerImg}
          alt=""
          style={{
            width: "70%",
            marginRight: "5%",
          }}
        />
      </Grid>
      {/* <Box sx={theme => ({
                [theme.breakpoints.down('md')]:{
                    flex: '1',
                    paddingTop: '30px',
                    alignSelf: 'center',
                },
                [theme.breakpoints.up('md')]:{
                    flex: '2',
                    alignSelf: 'flex-end',
                },
            })}
            >
                <img
                src={headerImg}
                alt="headerImg"
                style={{ 
                    width: "100%", 
                    // marginBottom: -15,
                }}
                />
            </Box> */}
    </CustomBox>
  );
};

export default Header;

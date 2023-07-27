import React, { useEffect, useState } from "react";
import { Box, ListItemButton, useMediaQuery } from "@mui/material";
// menu
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import BillCard from "./BillCard";
import MakePayment from "./MakePayment";
import Reminder from "./Reminder";
import axios from "axios";
// personalizacao
const CustomNavbarLink = styled("a")({
  width: "100%",
  textAlign: "center",
  color: "#000",
  fontWeight: "bold",
  "&:hover": {
    color: "#1e2a5a",
    borderRadius: "5px",
  },
});

const CustomCardGrid = styled("Box")({
  flexBasis: "calc(33.33% - 1rem)",
  marginRight: "1rem",
  marginBottom: "1rem",
});

const CustomBox = styled("Box")({
  width: "100%",
});

const itemList = [
  {
    text: "My Bills",
  },
  {
    text: "Make Payment",
  },
  {
    text: "History",
  },
];

const BillNavbar = () => {
  const [billDetails, setBillDetails] = useState([]);
  const [PaidDetails, setPaidDetails] = useState([]);

  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:960px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  const [currentPage, setCurrentPage] = useState("My Bills");

  useEffect(() => {
    if (currentPage == "My Bills") {
      axios
        .get("http://localhost:8081/dueBills")
        .then((response) => setBillDetails(response.data));
    } else {
      axios.get("http://localhost:8081/transactions").then((response) =>
        setPaidDetails(response.data)
        // console.log(response.data)
      );
    }
  }, [currentPage]);

  return (
    <Box
      sx={{
        width: "100%",
        padding: 1,
        display: "grid",
        gridTemplateRows: "min-content 1fr",
      }}
    >
      {
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <Grid item xs={12} lg={4}>
                <ListItemButton
                  onClick={() => {
                    setCurrentPage(text);
                  }}
                  sx={{
                    color: "#000",
                    // width: "30%",
                    fontWeight: "600",
                    "&:hover": {
                      color: "#1e2a5a",
                      borderRadius: "5px",
                      color: "white",
                    },
                  }}
                >
                  <CustomNavbarLink>{text}</CustomNavbarLink>
                </ListItemButton>
              </Grid>
            );
          })}
        </Grid>
      }
      {currentPage == "My Bills" && (
        <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
          {billDetails.map((item, index) => (
            <BillCard
              billId={item.billId}
              name={item.recipient}
              relation={item.relationship}
              message={item.message}
              amount={item.amount}
              acc={item.accountNumber}
              key={index}
            />
          ))}
        </Grid>
      )}
      {currentPage == "Make Payment" && (
        <Box sx={{ marginTop: "1rem" }}>
          <MakePayment />
        </Box>
      )}
      {currentPage == "History" && (
        <Box sx={{ marginTop: "1rem" }}>
          <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
            {PaidDetails.map((item, index) => (
              <Reminder
                billId={item.billId}
                name={item.recipient}
                relation={item.relationship}
                message={item.message}
                amount={item.amount}
                key={index}
              />
            ))}
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default BillNavbar;

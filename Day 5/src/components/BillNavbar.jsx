import React, { useState } from "react";
import { Box, ListItemButton, useMediaQuery } from "@mui/material";
// menu
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import BillCard from "./BillCard";
import MakePayment from "./MakePayment";
import Reminder from "./Reminder";
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
    to: "/",
  },
  {
    text: "Make Payment",
    to: "/",
  },
  {
    text: "Add Reminders",
    to: "/",
  },
];

const billDetails = [
  {
    recipient: "Ravi",
    relationship: "Land Lord",
    accountNumber: 123456789,
    message:
      "The payment has been made as per our agreement and the specified amount has been transferred to the designated account.",
    amount: 5000,
  },
  {
    recipient: "Sarah",
    relationship: "Client",
    accountNumber: 456789012,
    message:
      "I am pleased to confirm that I've fulfilled my payment obligation as per our agreement, and the designated account has been credited with the specified amount.",
    amount: 1500,
  },

  {
    recipient: "David",
    relationship: "Supplier",
    accountNumber: 234567890,
    message:
      "I'm writing to inform you that the payment has been successfully completed as agreed upon, and the specified amount has been transferred to the designated account.",
    amount: 4000,
  },

  {
    recipient: "Lisa",
    relationship: "Landlord",
    accountNumber: 678901234,
    message:
      "This is to confirm that I have made the payment as per our agreement, and the designated account has been credited with the specified amount.",
    amount: 2000,
  },

  {
    recipient: "Michael",
    relationship: "Family Member",
    accountNumber: 345678901,
    message:
      "I wanted to let you know that I've completed the payment as agreed upon, and the specified amount has been successfully transferred to the designated account.",
    amount: 3500,
  },

  {
    recipient: "Sophie",
    relationship: "Business Partner",
    accountNumber: 789012345,
    message:
      "I am writing to confirm that I've fulfilled my payment commitment as per our agreement, and the designated account has been credited with the specified amount.",
    amount: 4500,
  },

  {
    recipient: "Alex",
    relationship: "Tenant",
    accountNumber: 901234567,
    message:
      "Just letting you know that the payment for this month has been completed as per our agreement, and the specified amount has been transferred to the designated account.",
    amount: 1800,
  },

  {
    recipient: "Olivia",
    relationship: "Business Client",
    accountNumber: 123456789,
    message:
      "I would like to inform you that I've made the payment in accordance with our agreement, and the specified amount has been successfully transferred to the designated account.",
    amount: 2800,
  },

  {
    recipient: "Daniel",
    relationship: "Vendor",
    accountNumber: 456789012,
    message:
      "I'm writing to confirm that the payment has been made as per our agreement, and the specified amount has been successfully transferred to the designated account.",
    amount: 3200,
  },
];

const BillNavbar = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const isMediumScreen = useMediaQuery(
    "(min-width:601px) and (max-width:960px)"
  );
  const isLargeScreen = useMediaQuery("(min-width:961px)");
  const [currentPage, setCurrentPage] = useState("My Bills");
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
        <Grid container spacing={2} sx={{marginTop: "1rem"}}>
          {billDetails.map((item, index) => (
            <BillCard
              name={item.recipient}
              relation={item.relationship}
              message={item.message}
              amount={item.amount}
              key={index}
            />
          ))}
          </Grid>
      )}
      {currentPage == "Make Payment" && (
        <Box sx={{ marginTop: "1rem" }}><MakePayment/></Box>
      )}
      {currentPage == "Add Reminders" && (
        <Box sx={{ marginTop: "1rem" }}><Reminder /></Box>
      )}
    </Box>
  );
};

export default BillNavbar;

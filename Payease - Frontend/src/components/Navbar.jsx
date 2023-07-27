import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  styled,
  ListItemButton,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import { Scale } from "@mui/icons-material";
import { useSelector } from "react-redux";

// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const CustomNavbarLink = styled("a")({
  color: "#000",
  fontWeight: "bold",
  "&:hover": {
    color: "#1e2a5a",
    borderRadius: "5px",
  },
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "Bills",
    to: "/bills",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Contact",
    to: "/contact",
  },
  {
    text: "Payment",
    to: "/addPayment",
  },
  {
    text: "Login",
    to: "/login",
  },
];

//rotas

const Navbar = () => {
  // {
  // }
  // const [val, setVal] = useState("Login");
  // const [link, setLink] = useState("/login");

  const caseSucees = useSelector((state) => state.case);

  var { name } = "name";

  if (caseSucees.case !== null) {
     name  = caseSucees.case.name;
    console.log(name);
  }
  // console.log(name);

  const loginList = [
    {
      text: "Home",
      to: "/",
    },
    {
      text: "Bills",
      to: "/bills",
    },
    {
      text: "About",
      to: "/about",
    },
    {
      text: "Contact",
      to: "/contact",
    },
    {
      text: "Payment",
      to: "/addPayment",
    },
    {
      text: name,
      to: "",
    },
  ];

  console.log(name, "eee");

  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "orange",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <img
          src={logo}
          alt=""
          width={100}
          height={100}
          style={{ transform: "scale(1.5)" }}
        />
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        {sessionStorage.getItem("isLoggedIn") && (
          <ListMenu>
            {loginList.map((item) => {
              const { text } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#000",
                      fontWeight: "600",
                      "&:hover": {
                        color: "#1e2a5a",
                        borderRadius: "5px",
                        color: "white",
                      },
                    }}
                  >
                    {/* <CustomNavbarLink>{text}</CustomNavbarLink> */}
                    <CustomNavbarLink>{text}</CustomNavbarLink>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </ListMenu>
        )}
        {!sessionStorage.getItem("isLoggedIn") && (
          <ListMenu>
            {itemList.map((item) => {
              const { text } = item;
              return (
                <ListItem key={text}>
                  <ListItemButton
                    component={Link}
                    to={item.to}
                    sx={{
                      color: "#000",
                      fontWeight: "600",
                      "&:hover": {
                        color: "#1e2a5a",
                        borderRadius: "5px",
                        color: "white",
                      },
                    }}
                  >
                    {/* <CustomNavbarLink>{text}</CustomNavbarLink> */}
                    <CustomNavbarLink>{text}</CustomNavbarLink>
                  </ListItemButton>
                </ListItem>
              );
            })}
          </ListMenu>
        )}
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Box, Grid, styled, Typography } from "@mui/material";
import Title from "./Title";
import imgDetail2 from "../assets/Contact.png";
import Paragraph from "./Paragraph";
import { BiLogoGmail } from "react-icons/bi";
import { MdMessage } from "react-icons/md";
import {
  FaTwitter,
  FaFacebook,
  FaGoogle,
  FaLinkedinIn,
  FaUserCircle,
  FaLock,
  FaMessage,
} from "react-icons/fa";
import axios from "axios";

const Details = () => {
  const CustomGridItem = styled(Grid)({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reg = { name: name, email: email, message: message };
    console.log(reg);
    const result = await axios.post("http://localhost:8001/feedback/addf", reg);
    console.log(result.data);
    alert("Message sent Succesfully!");
    // window.location.reload();
  };

  return (
    <Grid
      container
      spacing={{ xs: 4, sm: 4, md: 0 }}
      sx={{
        py: 10,
        px: 2,
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
            width: "60%",
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
          <Title text={"Contact us for any Queries"} textAlign={"center"} />
          <Paragraph
            text={
              "Have questions, feedback, or need assistance? We're here to help! \
                 Our dedicated support team is just a click or call away. "
            }
            maxWidth={"sm"}
            mx={0}
            textAlign={"center"}
          />
          <form
            action="#"
            className="contact-form"
            style={{ width: "100%" }}
            onSubmit={handleSubmit}
          >
            <h2 className="title"></h2>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaUserCircle />
              </i>
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {console.log(name)}
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <BiLogoGmail />
              </i>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field-text-area">
              <i className="fas fa-message">
                <MdMessage />
              </i>
              <textarea
                name=""
                id=""
                cols="30"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                rows="10"
              ></textarea>
            </div>
            <input type="submit" value="Send" className="btnm" />
          </form>
        </Box>
      </CustomGridItem>
    </Grid>
  );
};

export default Details;

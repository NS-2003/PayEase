import React from "react";
import { Box, Grid, styled} from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import imgDetail2 from "../assets/reminder.png";
import CreditCardOffIcon from "@mui/icons-material/CreditCardOff";
import { FaUserCircle, FaCreditCard } from "react-icons/fa";

function Reminder() {
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
                text={"Streamline Your Payments: Add Your Card Details Today!"}
                textAlign={"center"}
              />
              <Paragraph
                text={
                  "Discover the ultimate convenience by securely adding your card details to our platform.\
                   Say goodbye to fumbling with cash or tedious manual entry"
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
                  <input type="text" placeholder="Cardholder Name" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope">
                    <FaCreditCard />
                  </i>
                  <input type="email" placeholder="Card Number" />
                </div>
                <div className="input-field">
                  <i className="dateofbirth">
                    <CreditCardOffIcon fontSize="small" />
                  </i>
                  <input type="month" placeholder="Expiry Date" alt="Expiry Date" />
                </div>
                <div className="input-field">
                  <i className="fas fa-envelope">
                    <FaCreditCard />
                  </i>
                  <input type="email" placeholder="CVV" />
                </div>
                <a type="submit" href="/" value="Login" className="btnm">
                  Add Card
                </a>
              </form>
            </Box>
          </CustomGridItem>
        </Grid>
      );
}

export default Reminder
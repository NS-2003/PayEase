import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardTitle from "./CardTitle";
import Button from "@mui/material/Button";
import { styled, Typography } from "@mui/material";
import CardMessage from "./CardMessage";
import BillAmount from "./BillAmount";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import PaidIcon from '@mui/icons-material/Paid';

function Reminder({name, relation, message, amount}) {

  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const CustomTypography = styled(Typography)({
    fontSize: "1.1rem",
    textAlign: "start",
    lineHeight: "1.5",
    marginBottom: "0.5rem",
    color: "#515151",
    fontFamily: "Poppins, sans-serif",
  });

  return (
    <Grid item xs={isMobileScreen ? 12 : 4}>
      <Card
        style={{ height: "100%", display: "flex", flexDirection: "column" }}
      >
        <React.Fragment>
          <CardContent>
            <CardTitle text={name} textAlign={"start"} />
            <CustomTypography>{relation}</CustomTypography>
            <CardMessage text={message} textAlign={"start"} />
            <BillAmount text={amount} textAlign={"start"} />
          </CardContent>
          <CardActions>
            <PaidIcon />&nbsp; Paid
          </CardActions>
        </React.Fragment>
      </Card>
    </Grid>
  );
}

export default Reminder;

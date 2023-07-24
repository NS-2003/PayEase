import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardTitle from "./CardTitle";
import { styled, Typography } from "@mui/material";
import CardMessage from "./CardMessage";
import BillAmount from "./BillAmount";
import { Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const CustomTypography = styled(Typography)({
  fontSize: "1.1rem",
  textAlign: "start",
  lineHeight: "1.5",
  marginBottom: "0.5rem",
  color: "#515151",
  fontFamily: "Poppins, sans-serif",
});

function BillCard({ name, relation, message, amount }) {
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid item xs={isMobileScreen ? 12 : 4}>
      <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <React.Fragment>
          <CardContent>
            <CardTitle text={name} textAlign={"start"} />
            <CustomTypography>{relation}</CustomTypography>
            <CardMessage text={message} textAlign={"start"} />
            <BillAmount text={amount} textAlign={"start"} />
          </CardContent>
        </React.Fragment>
      </Card>
    </Grid>
  );
}

export default BillCard;

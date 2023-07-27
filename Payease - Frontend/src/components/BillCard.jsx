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
import axios from "axios";

const CustomTypography = styled(Typography)({
  fontSize: "1.1rem",
  textAlign: "start",
  lineHeight: "1.5",
  marginBottom: "0.5rem",
  color: "#515151",
  fontFamily: "Poppins, sans-serif",
});

function BillCard({ billId, name, relation, message, amount, acc }) {
  const loadscript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;

      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handlePay = async (am, e) => {
    // e.preventDefault();

    // if (!fname || !lname || !email || !roomType || !ng || !ad || !df) {
    //   alert("Please fill in all required fields before proceeding to payment.");
    //   return;
    // }

    const res = await loadscript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("You are offline..Failed to proceed!");
      return;
    }

    const options = {
      key: "rzp_test_V2vuy5GVn3WxlX",
      currency: "INR",
      amount: am * 100,
      name: "Amarprakash Apartments",
      description: "Be Cautious about who you are paying!",
      // image : ""
      handler: async function (response) {
        // console.log(response)
        // alert("Payment ID : ", response.razorpay_payment_id);
        // if(response.razorpay_payment_id)
        // {
        //   const dataa = {
        //     name: fname,
        //     // lname : lname,
        //     email: email,
        //     roomType: roomType,
        //     adate: ad,
        //     ddate: df,
        //     numofRoom: ng,
        //     amount : amount,
        //     payment_id : response.razorpay_payment_id,
        //     payment_status:"paid"
        //   };
        //   try {
        //     const resu= await axios.post(
        //       "http://127.0.0.1:2020/addReserv",
        //       dataa
        //       );
        //       console.log(resu.data);
        //     } catch (error) {
        //       console.log("error", error);
        //     }

        //     alert("payment successfull");
        //   }
        // console.log(response);
        const data = {
          billId: billId,
          amount: amount,
          recipient: name,
          accountNumber: acc,
          message: message,
        };
        if (response.razorpay_payment_id != null) {
          axios
            .post("http://localhost:8081/addTransaction", data)
            .then((r) => {
              console.log(r);
            })
            .catch((error) => {
              console.error(error);
            });
          // console.log(response);

          axios
            .delete(`http://localhost:8081/deleteBill/${billId}`)
            .then((r) => {
              console.log(r);
            })
            .catch((e) => {
              console.error(e);
            });
        }
      },

      prefill: {
        // name : "Subiksha"
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const theme = useTheme();
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));

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
            <Button variant="contained" onClick={() => handlePay(amount)}>
              Pay
            </Button>
          </CardActions>
        </React.Fragment>
      </Card>
    </Grid>
  );
}

export default BillCard;

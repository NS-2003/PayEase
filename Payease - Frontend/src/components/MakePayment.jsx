import React, { useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import Title from "./Title";
import Paragraph from "./Paragraph";
import imgDetail2 from "../assets/makePayment.png";
import {
  FaUserCircle,
  FaPeriscope,
  FaBuilding,
  FaIdCard,
} from "react-icons/fa";

function MakePayment() {

  // const [phone, setPhone] = useState(9489635423);
  const [dueTitle, setDueTitle] = useState('');
  const [apartment, setApartment] = useState('');
  const [apartmentNumber, setApartmentNumber] = useState('101-D');

  const handleChange = (e) => {
    e.preventDefault();
    setApartmentNumber(e.target.value);
  };

  const regions = [
    {
      region: "Select Type of Bill",
      value: "",
    },
    {
      region: "Water Bill",
      value: "waterbill",
    },
    {
      region: "Electricity Bill",
      value: "electricitybill",
    },
  ];

  const [isSecondInputDisabled, setSecondInputDisabled] = useState(true);
  const [secondInputOptions, setSecondInputOptions] = useState([{ value: "", text: "Select Apartment" }]);
  const [amount, setAmount] = useState(1000);
  

  const loadscript = (src) => {
      
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src;
      
      script.onload = () => {
        resolve(true);
      }
      
      script.onerror = () => {
        resolve(false);
      }
      document.body.appendChild(script);
      
    })
  }
  
  
  const handlePay = async (am,e) => {
    // e.preventDefault();
    
    // if (!fname || !lname || !email || !roomType || !ng || !ad || !df) {
    //   alert("Please fill in all required fields before proceeding to payment.");
    //   return;
    // }

    const res = await loadscript("https://checkout.razorpay.com/v1/checkout.js")
    
  if(!res)
  {
    alert("You are offline..Failed to proceed!")
    return
  }
  
  const options = {
    key:"rzp_test_V2vuy5GVn3WxlX",
    currency : "INR",
    amount:am*100,
    name : "Amarprakash Apartments",
    description :"Be Cautious about who you are paying!",
    // image : ""
    handler :  async function(response){
      // console.log(response)
      alert("Payment ID : ", response.razorpay_payment_id)
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
    },
    
    prefill : {
      // name : "Subiksha"
    }
  };
  
  const paymentObject = new  window.Razorpay(options)
  paymentObject.open();

}

  const handleFirstInputChange = (event) => {
    const value = event.target.value;
    
    setDueTitle(value);
    setSecondInputDisabled(value === "");

    if (value === "waterbill") {
      setSecondInputOptions([
        { value: "", text: "Select Organiser" },
        { value: "Shankar", text: "Shankar" },
      ]);
    } else if (value === "electricitybill") {
      setSecondInputOptions([
        { value: "", text: "Select Organiser" },
        { value: "Shivam", text: "Sivam" },
        { value: "Pradeep", text: "Pradeep" },
      ]);
    }
    else {
      setSecondInputOptions([]);
    }
  };

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
            text={"Make Secure Payments with PayEase"}
            textAlign={"center"}
          />
          <Paragraph
            text={
              "PayEase employs state-of-the-art encryption technology to safeguard your sensitive financial data."
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
              <input type="number" value={amount} onChange={(e) => {setAmount(e.target.value)}} placeholder="Bill Amount" />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaPeriscope />
              </i>
              {/* <input type="text" placeholder="Region" /> */}
              <select
                name=""
                id=""
                value={dueTitle}
                onChange={handleFirstInputChange}
              >
                {regions.map((item, index) => {
                  return (
                    <option value={item.value} key={index}>
                      {item.region}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="input-field">
              <i className="">
                <FaBuilding />
              </i>
              {console.log(apartment)}
              {console.log(dueTitle)}
              <select disabled={isSecondInputDisabled} value={apartment} onChange={(e) => {setApartment(e.currentTarget.value)}}>
                {secondInputOptions.map((item, index) => (
                  <option value={item.value} key={index}>
                    {item.text}
                  </option>
                ))}
              </select>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope">
                <FaIdCard />
              </i>
              <input type="text" placeholder="Apartment Number" value={apartmentNumber} onChange={handleChange} />
            </div>
            <button type="submit" onClick={(e)=>{handlePay(amount)}} value="Login" className="btnm">
              Pay
            </button>
          </form>
        </Box>
      </CustomGridItem>
    </Grid>
  );
}

export default MakePayment;

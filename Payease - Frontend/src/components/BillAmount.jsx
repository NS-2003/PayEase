import { Typography } from '@mui/material'
import React from 'react'

const BillAmount = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h6'
    component='h3'
    sx={{ 
      fontWeight: '500',
      textAlign: textAlign,
      fontFamily: "Poppins, sans-serif",
      color: "#fd5c63",
      marginTop: "0.5rem"
   }}
    >
      Rupee(s) : ₹{text}
    </Typography>
  )
}

export default BillAmount
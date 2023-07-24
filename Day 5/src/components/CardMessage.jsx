import { Padding } from '@mui/icons-material'
import { Typography } from '@mui/material'
import React from 'react'

const CardMessage = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h6'
    component='h3'
    sx={{ 
      fontWeight: '500',
      textAlign: textAlign,
      fontFamily: "Poppins, sans-serif",
      border: "1px solid",
      borderRadius: "5px",
      padding: "0.5rem"
   }}
    >
      {text}
    </Typography>
  )
}

export default CardMessage
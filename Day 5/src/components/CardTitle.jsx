import { Typography } from '@mui/material'
import React from 'react'

const CardTitle = ({ text, textAlign }) => {
  return (
    <Typography 
    variant='h6'
    component='h3'
    sx={{ 
      fontWeight: '700',
      textAlign: textAlign,
      fontFamily: "Poppins, sans-serif",
   }}
    >
      {text}
    </Typography>
  )
}

export default CardTitle
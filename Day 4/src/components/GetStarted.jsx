import React from 'react'
import { 
    Box,
    Grid,
    styled,
    Typography,
} from '@mui/material'
import Title from './Title'
// img
import imgDetail from '../assets/pay.png';
import imgDetail2 from '../assets/secure.png';


const GetStarted = () => {

    const CustomGridItem = styled(Grid) ({
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    })
    
    const CustomTypography = styled(Typography) ({
        fontSize: '1.1rem',
        textAlign: 'start',
        lineHeight: '1.5',
        color: '#515151',
        marginTop: '1.5rem',
    })

    return (
            
        <Grid container spacing={{ xs: 4, sm: 4, md: 0 }}   
        sx={{
            py: 10,
            px: 2,
             
        }}
        >
            <CustomGridItem item xs={12} sm={8} md={6} 
            component = 'section'
           
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Unlock the Power of Choice: Seamlessly Pay Your Way with Multiple Payment Methods'
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    Embrace flexibility and freedom with our  <br />
                    comprehensive payment solution. We understand that everyone<br />
                    has unique preferences when it comes to paying their bills.
                    </CustomTypography> 
                </Box>

            </CustomGridItem>
            
            <Grid item xs={12} sm={4} md={6} style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <img src={imgDetail} alt="" 
                style={{
                    width: '70%',
                }}
                />
            </Grid>

            <Grid item xs={12} sm={4} md={6}
            sx={{
                order: {xs: 4, sm: 4, md: 3}
            }}

            style={{display: "flex", alignItems: "center", justifyContent: "center"}}

            >
                <img src={imgDetail2} alt="" 
                style={{ 
                    width: "70%",
                }}
                />
            </Grid>

            <CustomGridItem item xs={12} sm={8} md={6}
            sx={{
                order: {xs: 3, sm: 3, md: 4}
            }}
            >
                <Box component='article'
                sx={{
                    px: 4,
                }}
                >
                    <Title
                    text={
                        'Your Security, Our Priority: Safeguarding Your Peace of Mind Every Step of the Way'
                        
                    }
                    textAlign={'start'}
                    />
                    <CustomTypography>
                    At PayEase, we take your security seriously. We understand the <br /> 
                    importance of protecting your sensitive information and ensuring your peace of mind
                    </CustomTypography>
                </Box>
            </CustomGridItem>
        </Grid>
    )
}

export default GetStarted;
import { Container, Grid, Typography, Box } from '@mui/material';
import React from 'react';
import Crypto from '../../../assets/images/banner/Crypto.png';

const DXBanner = () => {
  return (
    <>
      <Container>
        <Grid container spacing={{ xs: 5, sm: 8 }}>
          <Grid item xs={12} sm={6}>
            <Typography
              sx={{
                fontSize: { xs: '25px', sm: '40px' },
                fontWeight: '900',
                display: 'flex',
                justifyContent: 'start',
                mb: { xs: 3, sm: 5 },
              }}
            >
              Get Started
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: '14px', sm: '16px', md: '25px' },
                textAlign: 'left',
                width: '100%',
              }}
            >
              Democracy X is your portal into the world of Crypto. The tech is
              new and ever-evolving – it helps to have a guide. Here's what we
              recommend you do if you want to dive in.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{ maxWidth: '600px', marginTop: { sm: '0px', md: '-14px' } }}
            >
              <img style={{ width: '100%' }} src={Crypto} alt="Crypto" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DXBanner;

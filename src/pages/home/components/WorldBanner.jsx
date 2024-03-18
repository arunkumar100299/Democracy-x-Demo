import { Container, Box } from '@mui/material';
import React from 'react';
import WorldBannerImg from '../../../assets/images/banner/WorldBanner.png';

const WorldBanner = () => {
  return (
    <>
      <Container>
        {/* <Box
          sx={{
            width: '100%',
            height: 'auto',
            backgroundImage: `url(${WorldBannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '500px',
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            justifyContent: 'center',
            mt: 8,
            mb: 10,
          }}
          
        ></Box> */}
        <Box sx={{ maxWidth: '100%', mb: {xs:6,sm:10} }}>
          <img
            style={{ width: '100%' }}
            src={WorldBannerImg}
            alt="WorldBannerImg"
          />
        </Box>
      </Container>
    </>
  );
};

export default WorldBanner;

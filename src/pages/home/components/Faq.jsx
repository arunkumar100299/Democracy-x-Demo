import { Container, Box, Typography, Stack } from '@mui/material';
import React from 'react';
import NextIcon from '../../../assets/images/banner/NextIcon.png';

const Faq = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            height: { xs: '52vh', sm: '22vh' },
            backgroundColor: '#D7D7D7',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: 'center',
            justifyContent: 'start',
            borderLeft: '20px solid #05137F',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              alignItems: 'center !important',
              justifyContent: 'start',
            }}
          >
            <Box sx={{ pl: { xs: 0, sm: 10 } }}>
              <Typography
                sx={{
                  fontSize: { xs: '30px', sm: '30px', md: '50px' },
                  fontWeight: '700',
                  mt: { xs: 2, sm: 0 },
                }}
              >
                FAQ's
              </Typography>
            </Box>
            <Box sx={{ ml: { xs: 1, sm: 8 },mt:{xs:2,sm:0}}}>
              <Typography
                sx={{
                  fontSize: {
                    xs: '14px',
                    sm: '14px',
                    md: '20px',
                    mt: { sm: 0 },
                  },
                }}
              >
                The most common queries about the business process
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              width: {xs:"65px",sm:"70px"},
              height: {xs:"60px",sm:"60px"},
              backgroundColor: '#05137F',
              borderRadius: '50%',
              position: 'relative',
                          mr: { xs: 2, sm: 4, md: 8 },
              mt:{xs:4,sm:0}
            }}
          >
            <img
              src={NextIcon}
              alt={NextIcon}
              style={{ position: 'absolute', top: '30%', left: 5 }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Faq;

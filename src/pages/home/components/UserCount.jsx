import { Box, Container, Typography, Stack } from '@mui/material';
import React from 'react';

const array = [
  {
    count: '15k',
    name: 'USERS',
  },
  {
    count: '3k',
    name: 'SELLERS',
  },
  {
    count: '1.5k',
    name: 'PRODUCTS',
  },
  {
    count: '20M',
    name: 'MONEY SAVED',
  },
];

const UserCount = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{ backgroundColor: '#C1C8FF', height: { xs: '85vh', sm: '35vh' } }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-evenly',
          }}
        >
          {array.map((item, index) => {
            return (
              <Box key={index}>
                <Typography
                  sx={{
                    fontSize: { xs: '30px', sm: '40px', md: '45px' },
                    fontWeight: '900',
                    color: '#05137F',
                    mt: { xs: 3, sm: 4, md: 5.5 },
                  }}
                >
                  {item.count}
                </Typography>
                <Typography sx={{ fontSize: { xs: '15px', sm: '20px' } }}>
                  {item.name}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
};

export default UserCount;

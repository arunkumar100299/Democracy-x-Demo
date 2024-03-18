import { Container, Typography } from '@mui/material';
import React from 'react';
import SliderResponsive from '../../../components/Slider';
import TS1 from '../../../assets/images/TopSellingImages/Ts1.png';
import TS2 from '../../../assets/images/TopSellingImages/Ts2.png';
import TS3 from '../../../assets/images/TopSellingImages/Ts3.png';
import TS4 from '../../../assets/images/TopSellingImages/Ts4.png';

const array = [
  {
    img: TS1,
    bgColor: '',
    buttonName: '',
  },
  {
    img: TS2,
    bgColor: '',
    buttonName: '',
  },
  {
    img: TS3,
    bgColor: '',
    buttonName: '',
  },
  {
    img: TS4,
    bgColor: '',
    buttonName: '',
  },
  {
    img: TS1,
    bgColor: '',
    buttonName: '',
  },
];

export const TopSellingProducts = () => {
  return (
    <>
      <Container maxWidth="lg">
        <Typography
          sx={{
            fontSize: { xs: '25px', sm: '40px' },
            fontWeight: '900',
            mb: 4,
            display: 'flex',
            justifyContent: 'start',
            mt: 4,
          }}
        >
          Top selling products
        </Typography>
        <SliderResponsive array={array} />
      </Container>
    </>
  );
};

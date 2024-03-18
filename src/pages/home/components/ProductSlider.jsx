import { Container, Typography } from '@mui/material';
import React from 'react';
import SliderResponsive from '../../../components/Slider';
import accessories from '../../../assets/images/productSliderImages/accessories.png';
import menswears from '../../../assets/images/productSliderImages/menswears.png';
import womenswears from '../../../assets/images/productSliderImages/womenswears.png';
import electronics from '../../../assets/images/productSliderImages/electronics.png';
import homeappliances from '../../../assets/images/productSliderImages/homeappliances.png';

const array = [
  {
    img: accessories,
    bgColor: '#FD68A4',
    buttonName: 'Accessories',
  },
  {
    img: menswears,
    bgColor: '#FF7C66',
    buttonName: 'Menswears',
  },
  {
    img: womenswears,
    bgColor: '#FE617A',
    buttonName: 'Womenswears',
  },
  {
    img: electronics,
    bgColor: '#F9BE22',
    buttonName: 'Electronics',
  },
  {
    img: homeappliances,
    bgColor: '#FE6AF6',
    buttonName: 'Home Appliances',
  },
];

const ProductSlider = () => {
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
          }}
        >
          Product Categories
        </Typography>
        <SliderResponsive array={array} />
      </Container>
    </>
  );
};

export default ProductSlider;

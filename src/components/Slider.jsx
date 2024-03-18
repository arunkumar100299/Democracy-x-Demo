/* eslint-disable react/jsx-key */
import { Container, Box } from '@mui/material';
import React from 'react';
import Slider from 'react-slick';
import { ButtonMui } from './Button';

const SliderResponsive = ({ array }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Slider {...settings}>
          {array.map((item, index) => (
            <Box
              key={index}
              sx={{
                width: '90% !important',
                display: 'flex !important',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'end',
                backgroundColor: item.bgColor,
                backgroundImage: `url(${item.img})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: '65vh',
                borderRadius: '30px',
                mb: 5,
                margin: '10px !important',
              }}
            >
              {item.buttonName ? (
                <ButtonMui
                  sx={{
                    width: '80%',
                    backgroundColor: 'white',
                    mb: 5,
                    borderRadius: '20px',
                    fontSize: { xs: '12px', sm: '14px' },
                    fontWeight: '700',
                    whiteSpace: 'nowrap',
                    color: 'black',
                  }}
                  label={item.buttonName}
                  type="submit"
                  variant="contained"
                  color="primary"
                />
              ) : (
                ''
              )}
            </Box>
          ))}
        </Slider>
      </Container>
    </>
  );
};

export default SliderResponsive;

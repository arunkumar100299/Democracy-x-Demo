import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import absa from '../../../assets/images/trustedPartners/absa.png';
import fnb from '../../../assets/images/trustedPartners/fnb.png';
import SB from '../../../assets/images/trustedPartners/SB.png';
import VLogo from '../../../assets/images/trustedPartners/VLogo.png';
import NEDBank from '../../../assets/images/trustedPartners/NEDBank.png';
import Capitec from '../../../assets/images/trustedPartners/Capitec.png';
import Building from '../../../assets/images/trustedPartners/Building.png';

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '60px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '40px',
      height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '65px',
      height: 'auto',
    },
  },
});

const array = [
  {
    image: absa,
  },
  {
    image: fnb,
  },
  {
    image: SB,
  },
  {
    image: VLogo,
  },
  {
    image: NEDBank,
  },
  {
    image: Capitec,
  },
  {
    image: Building,
  },
];

const TrustedPartners = () => {
  const classes = useStyles();
  return (
    <>
      <Container>
        <Box
          sx={{
            height: { xs: '158vh', sm: '50vh', md: '55vh' },
            mb: { xs: 10, sm: 0 },
          }}
        >
          <Box sx={{ display: 'flex', justifyContentL: 'left' }}>
            <Typography
              sx={{
                p: { xs: 2, sm: 4, md: 7 },
                fontSize: { xs: '18px', sm: '20px' },
              }}
            >
              Our Trusted Partners:
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-evenly',
            }}
          >
            {array.map((item, index) => {
              return (
                <Box key={index} sx={{ mt: { xs: 4, sm: 2, md: -2 } }}>
                  <img
                    className={classes.image}
                    src={item.image}
                    alt={item.image}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default TrustedPartners;

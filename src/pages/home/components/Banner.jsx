import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BannerImg from '../../../assets/images/banner/Banner.png';
import DxBlack from '../../../assets/images/header/leftImages/DXBlack.png';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { ButtonMui } from '../../../components/Button';
import { useSelector } from 'react-redux';

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '40px',
      height: '28px',
      marginLeft: '5px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '90px',
      height: '60px',
      marginTop: '14px',
      marginLeft: '10px',
    },
  },
});

const Banner = () => {
  const screenTheme = useSelector((state) => state.screenMode.mode);
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            backgroundImage: `url(${BannerImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '894px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            mb: { xs: -12, sm: 12 },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: screenTheme ? 'black' : 'white',
              position: 'absolute',
              padding: '50px',
              marginTop: { xs: '-500px', sm: '-300px' },
              paddingTop: '10px',
              borderRadius: '50%',
            }}
          >
            <Typography
              sx={{ fontSize: { xs: '40px', sm: '60px' }, fontWeight: '300' }}
            >
              TRADE &
            </Typography>
            <Typography
              sx={{ fontSize: { xs: '40px', sm: '60px' }, fontWeight: '900' }}
            >
              MARKET
            </Typography>
            <Typography sx={{ fontSize: { xs: '10px', sm: '15px' } }}>
              Crypto currency for a modern world
            </Typography>

            <ButtonMui
              sx={{
                backgroundColor: '#051380',
                color: 'white',
                mt: 3,
                width: { xs: '180px', sm: '250px' },
                borderRadius: '30px',
                padding: '10px',
              }}
              label="START TRADE NOW"
              type="submit"
              variant="contained"
              color="primary"
            />
          </Box>

          <Box
            sx={{
              borderTop: '3px solid #051380',
              backgroundColor: '#E6E8ED',
              width: '100%',
              height: { xs: '62vh', sm: '90vh', md: '75vh' },
              marginTop: { xs: '348px', sm: '600px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                mt: 5,
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '18px', sm: '50px' },
                  fontWeight: '800',
                  color: 'black',
                }}
              >
                Welcome to Democracy
              </Typography>
              <img src={DxBlack} alt="DxLogo" className={classes.image} />
            </Box>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '9px', sm: '20px' },
                  mt: { xs: 3, sm: 4 },
                  mb: { xs: 1, sm: 2 },
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  color: 'black',
                }}
              >
                Democracy X is the community-run technology powering the
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '9px', sm: '20px' },
                  mb: { xs: 1, sm: 2 },
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  color: 'black',
                }}
              >
                cryptocurrency ether (ETH) and thousands of
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: '9px', sm: '20px' },
                  mb: { xs: 1, sm: 2 },
                  textAlign: 'center',
                  whiteSpace: 'nowrap',
                  color: 'black',
                }}
              >
                decentralized applications.
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonMui
                sx={{
                  backgroundColor: '#051380',
                  color: 'white',
                  mt: 3,
                  width: { xs: '150px', sm: '250px' },
                  borderRadius: '30px',
                  padding: '10px',
                }}
                label="EXPLORE MORE"
                type="submit"
                variant="contained"
                color="primary"
              />
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Banner;

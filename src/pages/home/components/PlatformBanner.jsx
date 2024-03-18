import { Container, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import BGCrypto from '../../../assets/images/banner/BGCrypto.png';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import RotatedLogo from '../../../assets/images/header/leftImages/RotatedLogo.png';

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '40px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '70px',
      height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '90px',
      height: 'auto',
    },
  },
});

const PlatformBanner = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        spacing={3}
        sx={{ mt: { xs: 4, sm: 6 }, mb: { xs: 1, sm: 6 } }}
      >
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              backgroundColor: '#05137F',
              backgroundImage: `url(${BGCrypto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: { xs: '50vh', sm: '60vh' },
              pl: { xs: 1, sm: 4, md: 8 },
              borderBottomRightRadius: '50px',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '20px', sm: '40px' },
                fontWeight: '700',
                mt: 8,
              }}
            >
              {' '}
              Pick a wallet
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '12px', sm: '20px' },
                textAlign: 'left',
                mt: { xs: 2 },
              }}
            >
              A wallet lets you connect to Democracy X and manage your funds
              with commerce.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              backgroundColor: '#262626',
              backgroundImage: `url(${BGCrypto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: { xs: '50vh', sm: '60vh' },
              pl: { xs: 1, sm: 4, md: 8 },
              borderBottomLeftRadius: '50px',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: '20px', sm: '40px' },
                  fontWeight: '700',
                  mt: 8,
                }}
              >
                {' '}
                Get A DX
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: '12px', sm: '20px' },
                  textAlign: 'left',
                  mt: { xs: 2 },
                }}
              >
                A wallet lets you connect to Democracy X and manage your funds
                with commerce.
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'end',
                alignItems: 'center',
                position: 'absolute',
                right: 3,
                bottom: 3,
              }}
            >
              <img
                className={classes.image}
                src={RotatedLogo}
                alt="RotatedLogo"
              />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              backgroundColor: '#262626',
              backgroundImage: `url(${BGCrypto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: { xs: '50vh', sm: '60vh' },
              pl: { xs: 1, sm: 4, md: 8 },
              borderTopRightRadius: '50px',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '20px', sm: '40px' },
                fontWeight: '700',
                mt: 8,
              }}
            >
              {' '}
              Get A DX
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '12px', sm: '20px' },
                textAlign: 'left',
                mt: { xs: 2 },
              }}
            >
              A wallet lets you connect to Democracy X and manage your funds
              with commerce.
            </Typography>

            <Box></Box>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              backgroundColor: '#05137F',
              backgroundImage: `url(${BGCrypto})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              height: { xs: '50vh', sm: '60vh' },
              pl: { xs: 1, sm: 4, md: 8 },
              borderTopLeftRadius: '50px',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '20px', sm: '40px' },
                fontWeight: '700',
                mt: 8,
              }}
            >
              {' '}
              Earn & Build
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '12px', sm: '20px' },
                textAlign: 'left',
                mt: { xs: 2 },
              }}
            >
              A wallet lets you connect to Democracy X and manage your funds
              with commerce.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default PlatformBanner;

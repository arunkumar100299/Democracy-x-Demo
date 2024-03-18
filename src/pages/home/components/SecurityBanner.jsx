import { Container, Box, Grid, Typography, Button } from '@mui/material';
import React from 'react';
import SecureLap from '../../../assets/images/banner/SecureLap.png';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';

const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '80%',
    },
    [theme.breakpoints.up('sm')]: {
      width: '90%',
      height: 'auto',
    },
  },
});

const SecurityBanner = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 0 }}
          sx={{
            backgroundColor: '#E6E8ED',
            mt: { xs: 2, sm: 0 },
            pt: { xs: 4, sm: 4 },
            pb: { xs: 3, sm: 8 },
          }}
        >
          <Grid item xs={12} sm={4}>
            <Box
              sx={{
                maxWidth: '300px',
                mt: { sm: 2 },
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <img className={classes.image} src={SecureLap} alt="SecureLap" />
            </Box>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Box
              sx={{
                maxWidth: '680px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                mt: { xs: 4 },
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: '22px', sm: '38px' },
                  fontWeight: '900',
                  display: 'flex',
                  justifyContent: 'start',
                  mb: { xs: 2, sm: 2, md: 4 },
                  pl: 2,
                  mt: { sm: -3 },
                  color: 'black',
                }}
              >
                Strong Security
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: '14px', sm: '14px', md: '25px' },
                  textAlign: 'left',
                  pl: 2,
                  color: 'black',
                }}
              >
                More than 95% of all currency are stored on cold wallets. WAF
                (Web Application Firewall) - is a web application security
                screen that detects and blocks hacker attacks.
              </Typography>

              <Button
                size="large"
                variant="text"
                sx={{
                  display: 'flex',
                  justifyContent: 'start',
                  fontSize: { xs: '14px', sm: '16px', md: '23px' },
                  color: '#05137F',
                  pl: 2,
                  textTransform: 'none',
                }}
              >
                Learn more
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default SecurityBanner;

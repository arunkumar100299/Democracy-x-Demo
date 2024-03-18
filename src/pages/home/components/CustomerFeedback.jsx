import { Container, Grid, Box, Typography } from '@mui/material';
import React from 'react';
import BGCrypto from '../../../assets/images/banner/BGCrypto.png';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  comma: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '20',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '26px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '32px',
    },
  },
});

export const CustomerFeedback = () => {
  const classes = useStyles();
  return (
    <>
      <Container maxWidth="lg">
        <Grid container sx={{ backgroundColor: '#253297' }}>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                backgroundImage: `url(${BGCrypto})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: { xs: '25vh', sm: '50vh' },
                pl: { xs: 1, sm: 4, md: 8 },
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: '20px', sm: '30px', md: '40px' },
                  fontWeight: '700',
                  mt: { xs: 3, sm: 8 },
                  textAlign: 'left',
                  pl: { sm: 3 },
                }}
              >
                Customer feedbacks
              </Typography>
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: '12px', sm: '18px', md: '20px' },
                  textAlign: 'left',
                  mt: { xs: 2 },
                  pl: { sm: 3 },
                }}
              >
                Information provided by customers about their experience with a
                product or service.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#05137F',
                height: { xs: '30vh', sm: '50vh' },
                borderRadius: '30px',
                mt: { xs: -2, sm: 4 },
                mb: { xs: 2, sm: 4 },
                ml: { xs: 3, sm: 6 },
                mr: { xs: 3, sm: 6 },
              }}
            >
              <Typography
                sx={{
                  color: 'white',
                  fontSize: { xs: '10px', sm: '18px', md: '20px' },
                  p: { xs: 1, sm: 3 },
                  textAlign: 'left',
                }}
              >
                <span className={classes.comma}>“ </span>Lorem Ipsum is simply
                dummy text of the printing and typesetting industry
                <span className={classes.comma}> „</span>
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'start', width: '100%' }}>
                <Typography
                  sx={{
                    color: 'white',
                    fontSize: { xs: '10px', sm: '18px', md: '20px' },
                    ml: { sm: 4 },
                    p: { xs: 1, sm: 0 },
                  }}
                >
                  -John Peter
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

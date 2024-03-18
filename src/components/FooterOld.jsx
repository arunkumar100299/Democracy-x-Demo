import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  Divider,
} from '@mui/material';
import React from 'react';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { useSelector } from 'react-redux';
import DXWhite from '../../src/assets/images/header/leftImages/DXWhite.png';
import DXBlack from '../../src/assets/images/header/leftImages/DXBlack.png';
// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '70px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '90px',
      height: 'auto',
    },
  },
});

const FooterOld = () => {
  const classes = useStyles();
  const screenTheme = useSelector((state) => state.screenMode.mode);
  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            mt: 6,
            display: 'flex',
            justifyContent: 'start',
            pl: { xs: 1, sm: 3 },
            mb: 3,
          }}
        >
          <img
            className={classes.image}
            src={screenTheme ? DXWhite : DXBlack}
            alt="DxLogo"
          />
        </Box>

        <Grid
          container
          sx={{ pl: { xs: 3, sm: 5 } }}
          spacing={{ xs: 2, sm: 0 }}
        >
          <Grid item xs={6} sm={2}>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              Wallet
            </Typography>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              Marketplace
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              Trade
            </Typography>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              Jobs
            </Typography>
          </Grid>
          <Grid item xs={6} sm={2}>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              Banking
            </Typography>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              News
            </Typography>
          </Grid>
          <Grid item xs={6} sm={1.5}>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              FAQs
            </Typography>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              About Us
            </Typography>
            <Typography sx={{ textAlign: 'left', mb: { sm: 1 } }}>
              Contact Us
            </Typography>
          </Grid>

          <Grid
            item
            xs={12}
            sm={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              pl: { sm: 16, md: 6 },
              pr: { xs: '28px', sm: '0px' },
              mt: { sm: -1, md: -1 },
              ml: { sm: 2, md: 3 },
            }}
          >
            <Stack
              direction="row"
              spacing={1}
              sx={{
                backgroundColor: '#D3D3D3',
                height: { xs: '6vh', sm: '4vh', md: '0.5vh' },
                p: { xs: 2, sm: 4, md: 5 },
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '5px',
              }}
            >
              <Typography
                sx={{
                  whiteSpace: 'nowrap',
                  fontSize: { xs: '12px', sm: '10px', md: '14px' },
                }}
              >
                Upcoming Updates
              </Typography>
              <CalendarTodayIcon fontSize="small" />
              <Typography
                sx={{
                  textDecoration: 'underline',
                  fontSize: { xs: '12px', sm: '10px', md: '14px' },
                }}
              >
                Featured
              </Typography>
            </Stack>
          </Grid>
        </Grid>
        <Divider
          sx={{
            borderStyle: 'dotted',
            borderWidth: '1.5px',
            borderRadius: '0',
            mt: 5,
            marginBottom: '8px',
          }}
        />

        <Grid container sx={{ mt: { xs: 4, sm: 4 }, mb: { sm: 4 } }}>
          <Grid item xs={12} sm={12} md={5} sx={{ pl: { xs: 2, sm: 5 } }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Typography sx={{ textAlign: 'center' }}>
                Cookies Policy
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>Legal Terms</Typography>
              <Typography sx={{ textAlign: 'center' }}>
                Privacy Policy
              </Typography>
            </Stack>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={5}
            sx={{
              pl: { sm: 5, md: 7 },
              mt: { xs: 4, sm: 0 },
              mb: { xs: 2, sm: 0 },
            }}
          >
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Typography
                sx={{
                  textAlign: 'center',
                  fontSize: { xs: '20px', sm: '16px' },
                  fontWeight: '800',
                }}
              >
                Connect:
              </Typography>
              <Typography sx={{ textAlign: 'center' }}>Instagram</Typography>
              <Typography sx={{ textAlign: 'center' }}>LinkedIn</Typography>
              <Typography sx={{ textAlign: 'center' }}>Twitter</Typography>
              <Typography sx={{ textAlign: 'center' }}>Facebook</Typography>
              <Typography sx={{ textAlign: 'center' }}>Youtube</Typography>
              <Typography sx={{ textAlign: 'center' }}>TikTok</Typography>
              <Typography sx={{ textAlign: 'center' }}>Pinterest</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default FooterOld;

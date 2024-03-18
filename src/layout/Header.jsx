import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DXWhite from '../assets/images/header/leftImages/DXWhite.png';
import NewMenu from '../assets/images/header/leftImages/NewMenu.svg';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { Hidden, Stack } from '@mui/material';
import Notification from '../assets/images/header/rightImages/Notification.svg';
import Mail from '../assets/images/header/rightImages/Mail.svg';
import Profile from '../assets/images/header/rightImages/Profile.svg';
import { useDispatch, useSelector } from 'react-redux';
import { changeToggle } from '../layout/MenuSlice';

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '60px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '80px',
      height: 'auto',
    },
  },
  menu: {
    [theme.breakpoints.up('xs')]: {
      width: '54px',
      height: 'auto',
    },
    [theme.breakpoints.up('sm')]: {
      width: '35px',
      height: 'auto',
    },
  },
});

export default function Header() {
  const classes = useStyles();
  const menu = useSelector((state) => state.menuToggle.menu);
  const dispatch = useDispatch();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleMenu = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = () => {
    dispatch(changeToggle(!menu));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#05137F',
          display: 'flex',
          height: '60px',
          alignItems: 'center',
          width: '100%',
          position: 'fixed',
          zIndex: '999',
        }}
      >
        <Box>
          <Stack direction="row" spacing={{ xs: 25, sm: menu?15:5 }}>
            <img className={classes.image} src={DXWhite} alt="DxLogo" />

            <img
              className={classes.menu}
              src={NewMenu}
              alt="NewMenu"
              style={{ cursor: "pointer"}}
              onClick={handleMenu}
            />
          </Stack>
        </Box>

        <Box sx={{ width: '100%' }}>
          <Box
            sx={{
              color: 'white',
              display: 'flex ',
              justifyContent: 'space-between ',
            }}
          >
            <Hidden smDown>
              <Box>
                <Typography variant="h6" sx={{ ml: 5 }}>
                  DASHBOARD
                </Typography>
              </Box>
              <Box>
                <Stack direction="row" spacing={4} sx={{ ml: 4, mr: 2 }}>
                  <img
                    src={Notification}
                    alt="Notification"
                    style={{ height: '28px' }}
                  />
                  <img src={Mail} alt="Mail" style={{ height: '28px' }} />
                  <img src={Profile} alt="Profile" style={{ height: '28px' }} />
                </Stack>
              </Box>
            </Hidden>
          </Box>
        </Box>
      </Box>
    </>
  );
}

/* eslint-disable react/react-in-jsx-scope */
import React, { useState } from 'react';
import {
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
  Hidden,
} from '@mui/material';

import DollarWhite from '../assets/images/header/rightImages/DollarWhite.png';
import SearchBlack from '../assets/images/header/rightImages/SearchBlack.png';
import SearchWhite from '../assets/images/header/rightImages/SearchWhite.png';
import DollarBlack from '../assets/images/header/rightImages/DollarBlack.png';
import PersonBlack from '../assets/images/header/rightImages/PersonBlack.png';
import PersonWhite from '../assets/images/header/rightImages/PersonWhite.png';
import CartBlack from '../assets/images/header/rightImages/CartBlack.png';
import CartWhite from '../assets/images/header/rightImages/CartWhite.png';
import MenuBlack from '../assets/images/header/leftImages/MenuBlack.png';
import MenuWhite from '../assets/images/header/leftImages/MenuWhite.png';
import DXWhite from '../assets/images/header/leftImages/DXWhite.png';
import DXBlack from '../assets/images/header/leftImages/DXBlack.png';
import Popup from './Popup';
import RegisterPopup from '../pages/login/RegisterPopup';
import LoginPopup from '../pages/login/LoginPopup';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';
// import ToggleOnIcon from '@mui/icons-material/ToggleOn';
// import ToggleOffIcon from '@mui/icons-material/ToggleOff';
// import IconButton from '@mui/material/IconButton';
import { useDispatch } from 'react-redux';
import { changeLayout } from '../../src/layout/LayoutSlice';
import { changeMode } from '../DarkMode/DarkModeSlice';
import Language from '../language/Language';
import LoginDropdown from '../Login/LoginDropdown';

//------------------demo

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Users = [
  {
    id: 1,
    title: 'Admin',
  },
  {
    id: 2,
    title: 'User',
  },
  {
    id: 3,
    title: 'Seller',
  },
];

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('xs')]: {
      width: '54px',
      height: 'auto',
      paddingTop: '8px',
    },
    [theme.breakpoints.up('sm')]: {
      width: '90px',
      height: 'auto',
      marginTop: '7px',
    },
  },
  menu: {
    [theme.breakpoints.up('xs')]: {
      width: '30px',
      height: '22px',
      marginTop: '11px !important',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawer: {
    width: '50%',
  },
});

const HeaderOld = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // const handletoggle = () => {
  //   dispatch(changeMode());
  // };
  const screenTheme = useSelector((state) => state.screenMode.mode);

  const [openPopup, setOpenPopup] = useState(false);
  const [openLoginPopup, setOpenLoginPopup] = useState(false);
  const [open, setOpen] = useState(false);

  //for demo-------------------------------------

  const [loginType, setLoginType] = useState();
  const handleChange = (event) => {
    const selectedUser = event.target.value;
    console.log(selectedUser, 'selectedUser');
    setLoginType(selectedUser);
    if (selectedUser === 3) {
      setOpenPopup(true);
      dispatch(changeLayout('seller'));
    }
  };

  //---------------------------------------------

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(isOpen);
  };

  const list = () => (
    <div
      style={{ width: '200px' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ ml: 1 }}>
        <Stack direction="row" spacing={{ xs: 2 }} sx={{ m: 2 }}>
          <img
            style={{ width: '28px', height: '28px', paddingTop: '3px' }}
            src={screenTheme ? DollarWhite : DollarBlack}
            alt="Dollar"
          />

          <img
            style={{ width: '22px', height: '22px', paddingTop: '3px' }}
            src={screenTheme ? SearchWhite : SearchBlack}
            alt="Search"
          />

          <img
            style={{ width: '28px', height: '26px', paddingTop: '3px' }}
            src={screenTheme ? PersonWhite : PersonBlack}
            alt="ProfileIcon"
            onClick={handleProfile}
          />
          <img
            style={{ width: '24px', height: '22px', paddingTop: '3px' }}
            src={screenTheme ? CartWhite : CartBlack}
            alt="CartIcon"
          />
        </Stack>
      </Box>

      <Box sx={{ mt: 3 }}>
        <Stack direction="column" spacing={1}>
          <Link
            href="#"
            component="button"
            sx={{
              color: screenTheme ? 'white' : 'black',
              outline: 'none',
              cursor: 'pointer',
            }}
            underline="hover"
          >
            <Typography sx={{ fontWeight: '400', fontSize: '20' }}>
              Shop
            </Typography>
          </Link>
          <Divider orientation="vertical" />
          <Link
            href="#"
            component="button"
            sx={{ color: screenTheme ? 'white' : 'black', cursor: 'pointer' }}
            underline="hover"
          >
            <Typography sx={{ fontWeight: '400', fontSize: '20' }}>
              Explore
            </Typography>
          </Link>
          <Divider orientation="vertical" />
          <Link
            href="#"
            component="button"
            sx={{ color: screenTheme ? 'white' : 'black', cursor: 'pointer' }}
            underline="hover"
          >
            <Typography sx={{ fontWeight: '400', fontSize: '20' }}>
              Trade
            </Typography>
          </Link>
          <Divider orientation="vertical" />
          <Link
            href="#"
            component="button"
            sx={{ color: screenTheme ? 'white' : 'black', cursor: 'pointer' }}
            underline="hover"
          >
            <Typography sx={{ fontWeight: '400', fontSize: '20' }}>
              Wallet{' '}
            </Typography>
          </Link>
        </Stack>
      </Box>
    </div>
  );

  const handleProfile = () => {
    setOpenPopup(true);
  };

  return (
    <>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            marginTop: { xs: 1, sm: 1 },
          }}
        >
          <Box>
            <Stack direction="row" spacing={{ xs: 22, sm: 2 }}>
              <img
                className={classes.image}
                src={screenTheme ? DXWhite : DXBlack}
                alt="DxLogo"
              />

              <img
                className={classes.menu}
                src={screenTheme ? MenuWhite : MenuBlack}
                alt="MenuIcon"
                onClick={toggleDrawer(true)}
              />
            </Stack>
          </Box>

          <Hidden smDown>
            <Box sx={{ mt: 2 }}>
              <Stack
                direction="row"
                divider={<Divider orientation="vertical" flexItem />}
                spacing={{ sm: 2, lg: 4 }}
              >
                <Link
                  href="#"
                  component="button"
                  sx={{
                    color: screenTheme ? 'white' : 'black',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                  underline="hover"
                >
                  <Typography sx={{ fontWeight: '600', fontSize: '20' }}>
                    Shop
                  </Typography>
                </Link>

                <Link
                  href="#"
                  component="button"
                  sx={{
                    color: screenTheme ? 'white' : 'black',
                    cursor: 'pointer',
                  }}
                  underline="hover"
                >
                  <Typography sx={{ fontWeight: '600', fontSize: '20' }}>
                    Explore
                  </Typography>
                </Link>

                <Link
                  href="#"
                  component="button"
                  sx={{
                    color: screenTheme ? 'white' : 'black',
                    cursor: 'pointer',
                  }}
                  underline="hover"
                >
                  <Typography sx={{ fontWeight: '600', fontSize: '20' }}>
                    Trade
                  </Typography>
                </Link>

                <Link
                  href="#"
                  component="button"
                  sx={{
                    color: screenTheme ? 'white' : 'black',
                    cursor: 'pointer',
                  }}
                  underline="hover"
                >
                  <Typography sx={{ fontWeight: '600', fontSize: '20' }}>
                    Wallet{' '}
                  </Typography>
                </Link>
              </Stack>
            </Box>
          </Hidden>

          <Hidden smDown>
            <Box>
              <Stack
                direction="row"
                spacing={{ xs: 1, sm: 2 }}
                sx={{ mt: 1.5 }}
              >
                <img
                  style={{ width: '28px', height: '28px', paddingTop: '3px' }}
                  src={screenTheme ? DollarWhite : DollarBlack}
                  alt="Dollar"
                />
                <img
                  style={{ width: '22px', height: '22px', paddingTop: '3px' }}
                  src={screenTheme ? SearchWhite : SearchBlack}
                  alt="Search"
                />
                <img
                  style={{ width: '28px', height: '26px', paddingTop: '3px' }}
                  src={screenTheme ? PersonWhite : PersonBlack}
                  alt="ProfileIcon"
                  onClick={handleProfile}
                />
                <img
                  style={{ width: '24px', height: '22px', paddingTop: '3px' }}
                  src={screenTheme ? CartWhite : CartBlack}
                  alt="CartIcon"
                />

                {/* <Language /> */}
                <Box sx={{ minWidth: 100 }}>
                  <FormControl fullWidth>
                    <InputLabel sx={{mt:-1.5}}>Login</InputLabel>
                    <Select
                      size="small"
                      value={loginType}
                      label="Login"
                      onChange={handleChange}
                      sx={{ width: '100px',height:"30px" }}
                    >
                      {Users.map((item, index) => {
                        return (
                          <MenuItem key={index} value={item.id}>
                            {item.title}
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
                {/* <LoginDropdown /> */}

                {/* {screenTheme ? (
                  <IconButton
                    onClick={handletoggle}
                  
                  >
                    <ToggleOnIcon
                      style={{ color: screenTheme ? 'white' : 'black' ,marginTop:"-6px"}}
                    />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={handletoggle}
                    
                  >
                    <ToggleOffIcon
                      style={{ color: screenTheme ? 'white' : 'black',marginTop:"-6px" }}
                    />
                  </IconButton>
                )} */}
              </Stack>
            </Box>
          </Hidden>
        </Box>

        {openPopup === true && (
          <Popup
            maxWidth="lg"
            openPopup={openPopup}
            setOpenPopup={setOpenPopup}
            onClose={() => {
              setOpenPopup(false);
              setValues({ ...initialFieldValues });
            }}
          >
            <LoginPopup
              openPopup={openPopup}
              setOpenPopup={setOpenPopup}
              setOpenLoginPopup={setOpenLoginPopup}
            />
          </Popup>
        )}

        {openLoginPopup === true && (
          <Popup
            maxWidth="lg"
            openPopup={openLoginPopup}
            setOpenPopup={setOpenLoginPopup}
            onClose={() => {
              setOpenLoginPopup(false);
            }}
          >
            <RegisterPopup
              openLoginPopup={openLoginPopup}
              setOpenLoginPopup={setOpenLoginPopup}
              setOpenPopup={setOpenPopup}
            />
          </Popup>
        )}
        <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Container>
    </>
  );
};

export default HeaderOld;

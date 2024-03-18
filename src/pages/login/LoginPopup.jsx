/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Box, Checkbox, Grid, Link, Stack, Typography } from '@mui/material';
import CloseIcon from '../../assets/images/popup/closeIcon.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import DXWhite from '../../assets/images/header/leftImages/DXWhite.png';
import DXBlack from '../../assets/images/header/leftImages/DXBlack.png';
import { usePostApi } from '../../customHooks/useApi';
import useSnackbarHook from '../../customHooks/useSnackbarHook';
import { TextFieldMui } from '../../components/TextField';
import { ButtonMui } from '../../components/Button';
import { useSelector } from 'react-redux';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import { useNavigate } from 'react-router-dom';

// Define your theme
const theme = createTheme();

const useStyles = makeStyles({
  image: {
    [theme.breakpoints.up('sm')]: {
      width: '90px',
      height: 'auto',
    },
    [theme.breakpoints.up('md')]: {
      width: '80px',
      height: 'auto',
    },
  },

  closeMenu: {
    width: '20px',
    height: '20px',
    [theme.breakpoints.up('xs')]: {
      width: '18px',
      height: '18px',
      marginRight: '20px',
      marginTop: '20px',
    },

    [theme.breakpoints.up('sm')]: {
      width: '18px',
      height: '18px',
      marginRight: '-2px',
      marginTop: '18px',
    },
    [theme.breakpoints.up('md')]: {
      width: '20px',
      height: '20px',

      marginTop: '15px',
    },
  },
});

// const schema = yup.object().shape({
//   firstName: yup.string().required('First name is required'),
//   lastName: yup.string().required('Last name is required'),
//   email: yup.string().email('Invalid email').required('Email is required'),
//   mobile: yup.number().required('Mobile is required'),
//   password: yup
//     .string()
//     .min(6, 'Password must be at least 6 characters')
//     .required('Password is required'),
//   repeatPassword: yup
//     .string()
//     .oneOf([yup.ref('password'), null], 'Passwords must match')
//     .required('Repeat Password is required'),
//   date: yup
//     .date()
//     .transform((value, originalValue) =>
//       originalValue.trim() === '' ? undefined : value
//     ) // Convert empty string to undefined
//     .typeError('Date must be a valid date') // Custom type error message
//     .required('Date is required'),
// });

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

const LoginPopup = ({ setOpenLoginPopup, openLoginPopup, setOpenPopup }) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const classes = useStyles();
  const screenTheme = useSelector((state) => state.screenMode.mode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //Api
  const { post } = usePostApi('http://localhost:4001/auth/login');
  const { showSuccessMsg, showErrorMsg } = useSnackbarHook();

  const onSubmit = async (data) => {
    console.log(data, 'logindata');
    const response = await post(data);

    if (response.status) {
      showSuccessMsg('User Login Successfully !');
      setOpenPopup(false);
      setOpenLoginPopup(false);
      navigate('/sellerHomePage');
    } else {
      showErrorMsg('Invalid User');
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
  };
  const handleLogin = () => {
    setOpenPopup(false);
    setOpenLoginPopup(true);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  return (
    <>
      <Grid container spacing={{ sm: -3 }}>
        <Grid
          item
          xs={6}
          sx={{
            backgroundColor: '#EAEAEA',
            display: { xs: 'none', sm: 'block' },
            padding: '10px',
          }}
        >
          <Box
            sx={{
              width: '100%',
              marginLeft: '20px',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            <Stack direction="column" spacing={{ sm: 11, md: 16 }}>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: {
                    sm: '18px',
                    md: '28px',
                  },
                  color: 'black',
                }}
              >
                Welcome!
              </Typography>

              <Box
                sx={{
                  display: 'flex',
                  paddingLeft: {
                    sm: '50px',
                    md: '50px',
                    lg: '120px',
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '290',
                    color: '#D4D4D4',
                    marginTop: '2px',
                    marginRight: { sm: '-13px', md: '-13px' },
                    marginLeft: { md: '80px' },
                    fontSize: {
                      sm: '28px',
                      md: '36px',
                    },
                  }}
                >
                  DEMOCRACY
                </Typography>

                <img
                  className={classes.image}
                  src={screenTheme ? DXWhite : DXBlack}
                  alt="DxLogo"
                />
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  marginLeft: '20px',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              >
                <Typography
                  sx={{
                    fontWeight: '300',
                    fontSize: { sm: '15px', md: '20px' },
                    color: 'black',
                  }}
                >
                  Not a member yet?
                </Typography>
                <Link onClick={handleLogin}>
                  <Typography
                    sx={{
                      fontWeight: '700',
                      fontSize: { sm: '15px', md: '20px' },
                      paddingLeft: '6px',
                      color: '#00114D',
                    }}
                  >
                    Register now
                  </Typography>
                </Link>
              </Box>
            </Stack>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box
            sx={{
              width: '100%',
              height: 'auto',
              backgroundColor: '#FFFFFF',
              paddingLeft: { xs: '0px', sm: '18px' },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                marginLeft: { xs: '34px', sm: 0 },
              }}
            >
              <Typography
                sx={{
                  fontWeight: '900',
                  fontSize: {
                    xs: '18px',
                    sm: '18px',
                    md: '28px',
                  },
                  paddingLeft: '2px',
                  paddingTop: '10px',
                  marginTop: { xs: '20px', sm: '10px' },
                  color: 'black',
                }}
              >
                Log in
              </Typography>
              <img
                className={classes.closeMenu}
                src={CloseIcon}
                alt="CloseIcon"
                onClick={handleClose}
              />
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={{ sm: 0, md: 1 }}
                sx={{
                  mt: { xs: -4, sm: 0, md: 1, lg: 1 },
                  p: { xs: 5, sm: 0 },
                }}
              >
                <Grid item xs={12}>
                  <TextFieldMui
                    sx={{ width: '90%', color: 'black' }}
                    register={register}
                    label="Email"
                    variant="standard"
                    name="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldMui
                    sx={{ width: '90%' }}
                    register={register}
                    label="Password"
                    variant="standard"
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleTogglePasswordVisibility}
                            edge="end"
                          >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Stack direction="row" spacing={0} sx={{ ml: -1, mt: 1 }}>
                    <Checkbox />
                    <Typography
                      sx={{
                        marginTop: '10px',
                        whiteSpace: 'nowrap',
                        color: 'black',
                      }}
                    >
                      Keep me logged in
                    </Typography>
                  </Stack>
                </Grid>

                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: { xs: 2, sm: 2, md: 3 },
                    }}
                  >
                    <ButtonMui
                      sx={{
                        backgroundColor: '#00114D',
                        color: 'white',
                        borderRadius: '20px',
                        width: { xs: '350px', sm: '250px', md: '350px' },
                        padding: '6px',
                        mb: 3,
                        whiteSpace: 'nowrap',
                      }}
                      label="Login"
                      type="submit"
                      variant="contained"
                      color="primary"
                    />
                  </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      mt: { sm: 0, md: 4 },
                    }}
                  >
                    <Link onClick={handleLogin}>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: { sm: '15px', md: '20px' },
                          paddingLeft: '6px',
                          mb: 2,
                          whiteSpace: 'nowrap',
                          ml: { xs: 0, sm: 18, md: 30 },
                          color: '#00114D',
                        }}
                      >
                        Forgot your password?
                      </Typography>
                    </Link>
                  </Box>

                  <Box
                    sx={{
                      display: { xs: 'flex', sm: 'none' },
                      width: '100%',
                      marginLeft: '20px',
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: '300',
                        fontSize: { xs: '12px', sm: '15px', md: '20px' },
                        whiteSpace: 'nowrap',
                        marginLeft: { xs: '-10px', sm: '0px' },
                      }}
                    >
                      Not a member yet?
                    </Typography>
                    <Link onClick={handleLogin}>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: { xs: '12px', sm: '15px', md: '20px' },
                          paddingLeft: '6px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Register now
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>

          <Box></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPopup;

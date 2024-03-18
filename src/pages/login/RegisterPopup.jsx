/* eslint-disable react/prop-types */
import { Box, Checkbox, Grid, Link, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '../../assets/images/popup/closeIcon.png';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/styles';
import { usePostApi } from '../../customHooks/useApi';
import useSnackbarHook from '../../customHooks/useSnackbarHook';
import { TextFieldMui } from '../../components/TextField';
import { ButtonMui } from '../../components/Button';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useSelector } from 'react-redux';
import DXWhite from '../../assets/images/header/leftImages/DXWhite.png';
import DXBlack from '../../assets/images/header/leftImages/DXBlack.png';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';

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

const schema = yup.object().shape({
  firstname: yup.string().required('User name is required'),
  lastname: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  mobile_number: yup
    .number()
    .typeError('Mobile number must be a number')
    .integer('Mobile number must be an integer')
    .positive('Mobile number must be a positive number')
    .min(1000000000, 'Mobile number must be exactly 10 digits')
    .max(9999999999, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required('Repeat Password is required'),
});

const RegisterPopup = ({ setOpenPopup, setOpenLoginPopup }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showRepeatPassword, setShowRepeatPassword] = useState(false);
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: '',
    subtitle: '',
    onConfirm: '',
  });
  // api
  const { post } = usePostApi('http://localhost:4001/auth/register');

  const { showSuccessMsg, showErrorMsg } = useSnackbarHook();

  const classes = useStyles();
  const screenTheme = useSelector((state) => state.screenMode.mode);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    const userData = {
      ...data,
      type: 'seller',
      address: 'trichy',
      zipcode: '1001',
    };
    console.log(userData, 'user');
    const response = await post(userData);

    if (response.status) {
      showSuccessMsg('User Registered Successfully !');
      setOpenPopup(false);
      setOpenLoginPopup(false);
    } else {
      showErrorMsg('User Already Existed');
    }
  };

  const handleClose = () => {
    setConfirmDialog({
      isOpen: true,
      title: 'Are you sure to close this?',
      subtitle: "Note :  You can't undo this operation",
      onConfirm: () => {
        setConfirmDialog({ ...confirmDialog, isOpen: false });
        setOpenPopup(false);
        setOpenLoginPopup(false);
      },
    });
  };

  const handleRegister = () => {
    setOpenPopup(true);
    setOpenLoginPopup(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleToggleRepeatPasswordVisibility = () => {
    setShowRepeatPassword((prevShowPassword) => !prevShowPassword);
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
            <Stack direction="column" spacing={{ sm: 16, md: 18.5 }}>
              <Typography
                sx={{
                  fontWeight: '400',
                  fontSize: {
                    sm: '18px',
                    md: '28px',
                  },
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
                  }}
                >
                  Are you a member?
                </Typography>
                <Link onClick={handleRegister}>
                  <Typography
                    sx={{
                      fontWeight: '700',
                      fontSize: { sm: '15px', md: '20px' },
                      paddingLeft: '6px',
                    }}
                  >
                    Log in now
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
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography
                sx={{
                  fontWeight: '900',
                  fontSize: {
                    xs: '18px',
                    sm: '18px',
                    md: '28px',
                  },
                  paddingLeft: { xs: '38px', sm: '1px' },

                  paddingTop: '10px',
                  marginTop: { xs: '20px', sm: '10px' },
                  marginBottom: { xs: '40px', sm: '0px' },
                }}
              >
                Register
              </Typography>
              <img
                className={classes.closeMenu}
                src={CloseIcon}
                alt="DxLogo"
                onClick={handleClose}
              />
            </Box>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid
                container
                spacing={{ sm: 0, md: 1 }}
                sx={{
                  mt: { xs: -4, sm: 0, md: 1, lg: 1 },
                  pl: { xs: 5, sm: 0 },
                }}
              >
                <Grid item xs={12} sm={6}>
                  <TextFieldMui
                    sx={{ width: '80%' }}
                    register={register}
                    label="User Name (*)"
                    variant="standard"
                    name="firstname"
                    error={!!errors.firstname}
                    helperText={
                      errors.firstname ? errors.firstname.message : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldMui
                    sx={{ width: '80%' }}
                    register={register}
                    label="Last Name (*)"
                    variant="standard"
                    name="lastname"
                    error={!!errors.lastname}
                    helperText={errors.lastname ? errors.lastname.message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldMui
                    sx={{ width: { xs: '80%', sm: '90%' } }}
                    register={register}
                    label="Email (*)"
                    variant="standard"
                    name="email"
                    type="email"
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldMui
                    sx={{ width: { xs: '80%', sm: '90%' } }}
                    register={register}
                    label="Mobile (*)"
                    variant="standard"
                    name="mobile_number"
                    type="number"
                    error={!!errors.mobile_number}
                    helperText={
                      errors.mobile_number && errors.mobile_number
                        ? errors.mobile_number.message
                        : ''
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextFieldMui
                    sx={{ width: '80%' }}
                    register={register}
                    label="Password"
                    variant="standard"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
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
                <Grid item xs={12} sm={6}>
                  <TextFieldMui
                    sx={{ width: '80%' }}
                    register={register}
                    label="Repeat Password"
                    variant="standard"
                    name="repeatPassword"
                    type={showRepeatPassword ? 'text' : 'password'}
                    error={!!errors.repeatPassword}
                    helperText={
                      errors.repeatPassword && errors.repeatPassword
                        ? errors.repeatPassword.message
                        : ''
                    }
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleToggleRepeatPasswordVisibility}
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
                  <Stack direction="row" spacing={0} sx={{ ml: -1, mt: 3 }}>
                    <Checkbox />
                    <Typography
                      sx={{ marginTop: '10px', fontSize: { xs: '13px' } }}
                    >
                      I have read and accept the Terms and Conditions.
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
                        mr: { xs: 4, sm: 0 },
                        mt: { xs: '0px', sm: '14px', md: '0px' },
                      }}
                      label="Create Account"
                      type="submit"
                      variant="contained"
                      color="primary"
                    />
                  </Box>

                  <Box
                    sx={{
                      display: { xs: 'flex', sm: 'none' },
                      width: '100%',
                      marginLeft: { xs: '10px', sm: '20px' },
                      marginRight: { xs: 0 },
                      marginTop: '10px',
                      marginBottom: '10px',
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: '300',
                        fontSize: { xs: '12px', sm: '15px', md: '20px' },
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Are you a member?
                    </Typography>
                    <Link onClick={handleRegister}>
                      <Typography
                        sx={{
                          fontWeight: '700',
                          fontSize: { xs: '12px', sm: '15px', md: '20px' },
                          paddingLeft: '6px',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        Login now
                      </Typography>
                    </Link>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Grid>
      </Grid>
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default RegisterPopup;

import { Box, Typography, Stack, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextFieldMui } from "../../components/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { addUser } from "../user/slice";
import { useNavigate } from "react-router-dom";
import useSnackbarHook from "../../customHooks/useSnackbarHook";

const initialFieldValues = {
  mail: "",
  password: "",
};

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState(initialFieldValues);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showSuccessMsg } = useSnackbarHook();

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const login = () => {
    dispatch(
      addUser({
        mail: values.mail,
        password: values.password,
      })
    );
    navigate("/home");
    showSuccessMsg(`Login successfully`);
    console.log(values, "values");
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Stack direction="column" spacing={5}>
        <Typography variant="h3">Democracy x</Typography>
        <TextFieldMui
          label="Email"
          name="mail"
          variant="outlined"
          type="email"
          sx={{ width: "300px" }}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <TextFieldMui
          label="Password"
          name="password"
          variant="outlined"
          type={showPassword ? "text" : "password"}
          sx={{ width: "300px" }}
          onChange={(e) => {
            handleChange(e);
          }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleTogglePasswordVisibility} edge="end">
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <Button
          sx={{
            backgroundColor: "black",
            color: "white",
            width: "300px",
            "&:hover": { backgroundColor: "#4b4d4b" },
          }}
          onClick={login}
        >
          Login
        </Button>

        <Box sx={{}}>
          <Button sx={{ float: "left" }}>SignIn</Button>
          <Button sx={{ float: "right" }}>Forgot Password</Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default LoginPage;

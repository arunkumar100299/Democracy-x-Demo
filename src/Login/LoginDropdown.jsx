/* eslint-disable react/react-in-jsx-scope */
import react, { useState } from 'react';
import Box from '@mui/material/Box';
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

const LoginDropdown = () => {
  const [loginType, setLoginType] = useState();
  const handleChange = (event) => {
    const selectedUser = event.target.value;
    console.log(selectedUser, 'selectedUser');
    setLoginType(selectedUser);
  };
  return (
    <>
      <Box sx={{ minWidth: 100 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Login</InputLabel>
          <Select
            size="small"
            value={loginType}
            label="Login"
            onChange={handleChange}
            sx={{ height: '26px' }}
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
    </>
  );
};

export default LoginDropdown;

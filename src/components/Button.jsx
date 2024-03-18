/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { Button } from '@mui/material';

export const ButtonMui = ({ label, variant, type, ...other }) => {
  return (
    <Button variant={variant} type={type} {...other}>
      {label}
    </Button>
  );
};

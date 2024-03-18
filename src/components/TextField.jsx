/* eslint-disable react/prop-types */
import React from 'react';
import { TextField } from '@mui/material';

export const TextFieldMui = ({
  label,
  variant,
  name,
  error,
  helperText,
  register,
  ...rest
}) => {
  return (
    <>
      <TextField
        {...register(name)}
        label={label}
        variant={variant}
        error={error}
        helperText={helperText}
        {...rest}
      />
    </>
  );
};

import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { ButtonMui } from './Button';

const Form = ({ onSubmit, defaultValues, children }) => {
  const { handleSubmit, control } = useForm({
    defaultValues: defaultValues || {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child) && child.type === MuiTextField) {
          const { name, label, ...rest } = child.props;

          return (
            <div style={{ marginBottom: '20px' }}>
              <Controller
                control={control}
                name={name}
                defaultValue=""
                rules={{ required: `${label} is required` }}
                render={({ field, fieldState }) => (
                  <MuiTextField
                    {...field}
                    label={label}
                    error={fieldState.invalid}
                    helperText={fieldState.error?.message}
                    {...rest}
                  />
                )}
              />
            </div>
          );
        }
        return child;
      })}
      <ButtonMui
        type="submit"
        variant="contained"
        label="Submit"
        sx={{ mt: '20px' }}
      />
    </form>
  );
};

const MuiTextField = ({ ...props }) => {
  return <TextField {...props} />;
};

export { Form, MuiTextField };

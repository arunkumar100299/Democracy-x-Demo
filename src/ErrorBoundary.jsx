import React from 'react';
import { Button, Typography } from '@mui/material';
import { ErrorBoundary } from 'react-error-boundary';

const ErrorBoundaries = ({ children }) => {
  return (
    <>
      <ErrorBoundary FallbackComponent={fallBackUI}>{children}</ErrorBoundary>
    </>
  );
};

const fallBackUI = ({ error, resetErrorBoundary }) => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography sx={{ fontSize: '80px', mt: 5 }}>
          Internal Server Error
        </Typography>
        <Typography sx={{ fontSize: '50px', mt: 5 }}>
          {error.message}
        </Typography>
        <Button
          sx={{
            backgroundColor: 'black',
            whiteSpace: 'nowrap',
            color: 'white',
            '&:hover': { backgroundColor: '#4b4d4b' },
            mt: 5,
          }}
          onClick={resetErrorBoundary}
          variant="outlined"
        >
          Try Again !
        </Button>
      </div>
    </>
  );
};

export default ErrorBoundaries;

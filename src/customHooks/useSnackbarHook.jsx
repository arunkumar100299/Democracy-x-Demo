import { useSnackbar } from 'notistack';
import { Button } from '@mui/material';

export default function useSnackbarHook() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const action = (snackbarId) => (
    <Button
      onClick={() => {
        closeSnackbar(snackbarId);
      }}
    >
      Dismiss
    </Button>
  );

  return {
    showSuccessMsg: (message) => {
      enqueueSnackbar(message, {
        variant: 'success',
        autoHideDuration: 5000,
        action,
      });
    },

    showInfoMsg: (message) => {
      enqueueSnackbar(message, {
        variant: 'info',
        autoHideDuration: 5000,
        action,
      });
    },

    showErrorMsg: (message) => {
      enqueueSnackbar(message, {
        variant: 'error',
        autoHideDuration: 5000,
        action,
      });
    },
  };
}

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ConfirmDialog = ({ confirmDialog, setConfirmDialog }) => {
  const handleClose = () => {
    setConfirmDialog({ ...confirmDialog, isOpen: false });
  };

  const handleKeypress = (e) => {
    if (e.key === 'Enter') {
      confirmDialog.onConfirm();
    }
  };

  return (
    <Dialog open={confirmDialog.isOpen} onKeyPress={handleKeypress}>
      <Typography
        variant="subtitle1"
        sx={{
          alignItems: 'center',
          marginTop: '10px',
          marginLeft: '10px',
          fontSize: '30px',
          fontWeight: '900',
        }}
      >
        {'Confirmation'}
        <IconButton sx={{ float: 'right' }} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Typography>

      <DialogTitle
        sx={{
          alignItems: 'left',
          pl: '10px',
          fontSize: '16px',
          minWidth: '400px',
        }}
      >
        {confirmDialog.title}
      </DialogTitle>
      <DialogContent sx={{ alignItems: 'left', textAlign: 'left', pl: '10px' }}>
        <Typography variant="subtitle1" sx={{ pt: '20px', fontSize: '14px' }}>
          {confirmDialog.subtitle}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          variant="contained"
          sx={{ alignItems: 'right' }}
          onClick={confirmDialog.onConfirm}
        >
          Yes
        </Button>
        <Button
          variant="contained"
          sx={{ alignItems: 'right' }}
          onClick={handleClose}
        >
          No
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;

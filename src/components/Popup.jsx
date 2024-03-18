/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Popup = ({ title, children, openPopup, onClose, maxWidth }) => {
  return (
    <Dialog open={openPopup} fullWidth maxWidth={maxWidth}>
      <DialogContent sx={{ padding: '0px' }}>{children}</DialogContent>
    </Dialog>
  );
};

export default Popup;

import React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { AlertBox } from '../styles/post.styles';
const AlertPopup = (props) => {
  const [open, setOpen] = React.useState(true);
const {setShowAlert} = props;
  return (
    <AlertBox>
        <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity="error"
         onClick={()=> setShowAlert(false)}
          
        >
          this post has been shared!
        </Alert>
      </Collapse>
      
      </AlertBox>
  );
}

export default AlertPopup;
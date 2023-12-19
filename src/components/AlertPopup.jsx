// Dependencies
import React from "react";
import { hideAlert } from "../redux/showAlertSlice";
import { useDispatch, useSelector } from "react-redux";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";
// Style
import { AlertBox } from "../styles/post.styles";

const AlertPopup = () => {
  // State to manage the visibility of the alert
  const [open, setOpen] = React.useState(true);
  // Redux state and dispatch
  const dispatch = useDispatch();
  const alertSeverity = useSelector(
    (state) => state.alertOnScreen.alertSettings.severity
  );
  const alertMessage = useSelector(
    (state) => state.alertOnScreen.alertSettings.message
  );

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
                dispatch(hideAlert());
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
          severity={alertSeverity}
        >
          {alertMessage}
        </Alert>
      </Collapse>
    </AlertBox>
  );
};

export default AlertPopup;

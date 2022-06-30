import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import Alert from "@mui/material/Alert";
import { clearErrors } from "../../Redux/customers";
import { useDispatch } from "react-redux";

function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export default function Snack({
  openSnackError,
  setOpenSnackError,
  message,
  severity,
}) {
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpenSnackError(false);
    dispatch(clearErrors());
  };

  return (
    <div>
      <Snackbar
        open={openSnackError}
        onClose={handleClose}
        TransitionComponent={TransitionRight}
        key="right"
        autoHideDuration={6000}
      >
        <Alert onClose={handleClose} severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

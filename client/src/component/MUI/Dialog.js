import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import "./loginDialog.css";
import { Link } from "react-router-dom";
export default function ResponsiveDialog({ open, setOpen }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const maxWidth = useMediaQuery(theme.breakpoints.down("md"));

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" sx={{ textAlign: "center" }}>
          {"LOGIN / SIGNUP AS A CUSTOMER OR AS AN INFLUENCER"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            Let Google help apps determine location. This means sending
            anonymous location data to Google, even when no apps are running.
          </DialogContentText>
          <div className="dialog-content">
            <div className="dialog-img">
              <Link to="/customer/login" onClick={handleClose}>
                <img src="images/customer_vector.png" alt="" className="" />
                <h4>CUSTOMER</h4>
              </Link>
            </div>
            <div className="dialog-img">
              <Link to="/influencer/login" onClick={handleClose}>
                <img
                  src="images/influencer_vector.png"
                  alt=""
                  width="300px"
                  height="248px"
                />
                <h4>INFLUENCER</h4>
              </Link>
            </div>
          </div>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

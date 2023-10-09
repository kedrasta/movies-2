import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
  DialogContentText,
} from "@mui/material/";
import {
  showModalAuth,
  showModalReg,
} from "../../store/redusers/modal.form.slise";

export function FormReg() {
  const isModalReg = useSelector((state) => state.modal.showModalReg);

  const dispatchAuth = useDispatch();

  const handleChange = () => {
    dispatchAuth(showModalReg(false));
    dispatchAuth(showModalAuth(true));
  };

  return (
    <>
      <Dialog open={isModalReg}>
        <DialogTitle>GET TOKEN</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To access the movie site, get a token to your email
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChange}>ACCEPT</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

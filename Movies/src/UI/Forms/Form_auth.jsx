import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DialogTitle,
  DialogContent,
  DialogActions,
  Dialog,
  TextField,
  Button,
} from "@mui/material/";
import { getUserId } from "../../asyncActions/get.user.id";
import { authorization } from "../../store/redusers/data.user.slise";
import {
  showModalAuth,
  showModalReg,
} from "../../store/redusers/modal.form.slise";

const store = require("store");

export function FormAuth() {
  const dispatch = useDispatch();

  const isUserToken = store.get("token");

  const isModalAuth = useSelector((state) => state.modal.showModalAuth);

  const handleChange = (e) => {
    dispatch(showModalAuth(false));
  };

  useEffect(() => {
    if (isUserToken) {
      dispatch(showModalReg(false));
      dispatch(authorization(true));
    }
  }, [dispatch, isUserToken]);

  function setToken(token) {
    store.set("token", token);
    dispatch(getUserId());
  }

  return (
    <>
      <Dialog open={isModalAuth}>
        <DialogTitle>ENTER TOKEN</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter token"
            type="text"
            fullWidth
            variant="standard"
            onChange={(e) => setToken(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleChange}>ENTER</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

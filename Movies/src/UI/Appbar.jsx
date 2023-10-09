import { useDispatch, useSelector } from "react-redux";
import { Button, Typography, Toolbar, Box, AppBar } from "@mui/material";
import { showModalReg } from "../store/redusers/modal.form.slise";
import { authorization } from "../store/redusers/data.user.slise";

const store = require("store");

export function TopBar() {
  const isAuthorization = useSelector((state) => state.user.authorization);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(showModalReg(true));
  };

  function userLogout() {
    dispatch(authorization(false));
    store.clearAll();
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Movies
          </Typography>
          {!isAuthorization ? (
            <Button onClick={handleChange} color="inherit">
              Login
            </Button>
          ) : (
            <Button onClick={userLogout} color="inherit">
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

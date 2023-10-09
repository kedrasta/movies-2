import React from "react";
import { useSelector } from "react-redux";
import { TopBar } from "./UI/Appbar";
import { FormAuth } from "./UI/Forms/Form_auth";
import { FormReg } from "./UI/Forms/Form_reg";
import { Filters } from "./UI/Filters/index";
import { MediaCard } from "./UI/Card_media";
import { Box } from "@mui/system";

function App() {
  const userReg = useSelector((state) => state.user.authorization);

  return (
    <>
      <TopBar />
      <FormAuth />
      <FormReg />
      {userReg && (
        <Box sx={{ display: "flex" }}>
          <Filters />
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            <MediaCard />
          </Box>
        </Box>
      )}
    </>
  );
}

export default App;

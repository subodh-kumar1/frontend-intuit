import React from "react";
import RouteHandler from "./RouteHandler";
import { Box, Typography } from "@mui/material";

const App = () => {
  return (
    <React.Fragment>
      <Typography variant="h4">MYBOOKS ACCOUNTING</Typography>
      <Box height={20} />
      <RouteHandler />
    </React.Fragment>
  );
};

export default App;

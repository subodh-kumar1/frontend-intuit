import React from "react";
import { Container } from "@mui/material";
import ReactDOM from "react-dom";
import App from "./app/App";

ReactDOM.render(
  <React.StrictMode>
    <Container maxWidth="md">
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById("root")
);

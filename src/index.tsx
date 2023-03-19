import { Container } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./app/App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Container maxWidth="md">
        <App />
      </Container>
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

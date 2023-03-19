import { Button, Container, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { customerApi, expertApi } from "../../services";
const CreateUser = () => {
  const [userName, setUserName] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");

  function createCustomer() {
    customerApi
      .createCustomer({ name: userName, email: userEmail })
      .then((response) =>
        alert(`Customer created ${JSON.stringify(response?.data)}`)
      );
  }

  function createExpert() {
    expertApi
      .createExpert({ name: userName, email: userEmail })
      .then((response) =>
        alert(`Expert created ${JSON.stringify(response?.data)}`)
      );
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <TextField
              value={userName}
              label="Name"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              value={userEmail}
              label="User Email"
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button onClick={createCustomer}>Create Customer</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={createExpert}>Create Expert</Button>
          </Grid>
        </Grid>
      </Container>
      <Link to={"/login"}>LOGIN PAGE</Link>
    </React.Fragment>
  );
};
export default CreateUser;

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField/TextField";
import { Container } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "../../redux/actions/login";
import APP_CONSTANTS from "../../constants/appConstants";

const Login = () => {
  const [loginId, setLoginId] = useState<string>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userType = useSelector((state: any) => state?.login?.type);

  useEffect(() => {
    if (
      userType === APP_CONSTANTS.USER_TYPE.CUSTOMER ||
      userType === APP_CONSTANTS.USER_TYPE.EXPERT
    )
      navigate("/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userType]);

  function loginAsCustomer() {
    dispatch(loginAction.loginCustomer(Number(loginId)));
  }
  function loginAsExpert() {
    dispatch(loginAction.loginExpert(Number(loginId)));
  }

  return (
    <React.Fragment>
      <Container maxWidth="sm">
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <TextField
              value={loginId}
              label="User ID"
              onChange={(e) => {
                setLoginId(e.target.value);
              }}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={6}>
            <Button onClick={loginAsCustomer}>Sign In As Customer</Button>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={loginAsExpert}>Sign In As Expert</Button>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};
export default Login;

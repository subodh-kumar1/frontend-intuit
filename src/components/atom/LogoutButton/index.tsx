import { Button } from "@mui/material";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { loginAction } from "../../../redux/actions/login";

const LogoutButton = () => {
  //   const navigate = useNavigate();
  //   const dispatch = useDispatch();
  //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   const userId = useSelector((state: any) => state?.login?.userId);

  //   useEffect(() => {
  //     if (userId === 0) navigate("/login");
  //   }, [userId, navigate]);

  return (
    <Button
      onClick={() => {
        // dispatch(loginAction.loginCustomer(0));
        console.log("LOGOUT TO BE IMPLEMENTED");
      }}
    >
      LOGOUT (To be IMPLEMENTED)
    </Button>
  );
};
export default LogoutButton;

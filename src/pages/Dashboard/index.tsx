import { Box } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import LogoutButton from "../../components/atom/LogoutButton";
import DashboardCard from "../../components/molecule/DashboardCard";
import APP_CONSTANTS from "../../constants/appConstants";
const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userType = useSelector((state: any) => state?.login?.type);

  function dashboardRender() {
    switch (userType) {
      case APP_CONSTANTS.USER_TYPE.CUSTOMER:
        return <CustomerDashBoard />;
      case APP_CONSTANTS.USER_TYPE.EXPERT:
        return <ExpertDashBoard />;
      default:
        return <Navigate to="/login" />;
    }
  }
  return (
    <React.Fragment>
      <LogoutButton />
      {dashboardRender()}
    </React.Fragment>
  );
};
export default Dashboard;

const CustomerDashBoard = () => {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <DashboardCard
          content="RAISE A REQUEST"
          handleClick={() => {
            navigate("/create-task");
          }}
        />
        <DashboardCard
          content="SEE MY REQUEST"
          handleClick={() => {
            navigate("/view-customer-tasks");
          }}
        />
      </Box>
    </React.Fragment>
  );
};

const ExpertDashBoard = () => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <DashboardCard
          content="SEE ALL REQUEST"
          handleClick={() => {
            navigate("/view-all-tasks");
          }}
        />
        <DashboardCard
          content="SHOW MY REQUEST"
          handleClick={() => {
            navigate("/view-expert-tasks");
          }}
        />
        <DashboardCard
          content="SHOW IMPORTANT REQUEST"
          handleClick={() => {
            navigate("/view-expert-important-tasks");
          }}
        />
        <DashboardCard
          content="SHOW QUEUED REQUEST"
          handleClick={() => {
            navigate("/view-queued-tasks");
          }}
        />
      </Box>
    </React.Fragment>
  );
};

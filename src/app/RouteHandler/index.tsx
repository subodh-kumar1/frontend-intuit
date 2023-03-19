import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import APP_CONSTANTS from "../../constants/appConstants";
import CreateTask from "../../pages/CreateTask";
import CreateUser from "../../pages/CreateUser";
import Dashboard from "../../pages/Dashboard";
import Login from "../../pages/Login";
import ViewTasks from "../../pages/ViewTasks";

const RouteHandler = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/create-user" element={<CreateUser />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-task" element={<CreateTask />} />
        <Route
          path="/view-customer-tasks"
          element={
            <ViewTasks viewType={APP_CONSTANTS.TASKS_VIEW_TYPE.CUSTOMER_VIEW} />
          }
        />
        <Route
          path="/view-expert-tasks"
          element={
            <ViewTasks viewType={APP_CONSTANTS.TASKS_VIEW_TYPE.EXPERT_VIEW} />
          }
        />
        <Route
          path="/view-expert-important-tasks"
          element={
            <ViewTasks
              viewType={APP_CONSTANTS.TASKS_VIEW_TYPE.EXPERT_IMPORTANT_VIEW}
            />
          }
        />
        <Route
          path="/view-queued-tasks"
          element={
            <ViewTasks viewType={APP_CONSTANTS.TASKS_VIEW_TYPE.QUEUED_VIEV} />
          }
        />
        <Route
          path="/view-all-tasks"
          element={
            <ViewTasks viewType={APP_CONSTANTS.TASKS_VIEW_TYPE.ALL_VIEW} />
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

export default RouteHandler;

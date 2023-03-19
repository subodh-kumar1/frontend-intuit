import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { customerApi } from "../../services";
import ViewTaskDetails, {
  ITaskDetails,
} from "../../components/molecule/ViewTaskDetails";

const CreateTask = () => {
  const [taskType, setTaskType] = useState<string>();
  const [deadline, setDeadline] = useState<number>();
  const [estimatedTime, setEstimatedTime] = useState<number>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [taskResponse, setTaskResponse] = useState<ITaskDetails | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const customerId = useSelector((state: any) => state?.login?.userId);
  const navigate = useNavigate();

  const handleSave = () => {
    customerApi
      .createTask({ taskType, deadline, estimatedTime, customerId })
      .then((response) => {
        setTaskResponse(response?.data);
        setOpenDialog(true);
      })
      .catch((error) => {
        console.log("Error task", error?.message);
      });
  };
  return (
    <React.Fragment>
      <ViewTaskDetails
        showTask={openDialog}
        closeTask={() => {
          setOpenDialog(false);
        }}
        taskDetails={taskResponse}
      />

      <Box
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Box padding={1} margin={1}>
          <TextField
            value={taskType}
            label="Task Details"
            onChange={(e) => {
              setTaskType(e.target.value);
            }}
            fullWidth
            size="small"
          />
        </Box>
        <Box padding={1} margin={1}>
          <TextField
            value={deadline}
            label="Deadline (Days)"
            onChange={(e) => {
              setDeadline(Number(e.target.value));
            }}
            size="small"
            type="number"
          />
        </Box>
        <Box padding={1} margin={1}>
          <TextField
            value={estimatedTime}
            label="estimatedTime (Hours)"
            onChange={(e) => {
              setEstimatedTime(Number(e.target.value));
            }}
            size="small"
            type="number"
          />
        </Box>
        <Box>
          <Button onClick={handleSave} size="small">
            Save
          </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default CreateTask;

/*
{
    "id": 1,
    "estimatedTime": 1,
    "taskType": "helo",
    "deadline": "2023-03-18T23:30:38.1852273",
    "status": "PENDING",
    "customer": {
        "id": 1,
        "name": "kk",
        "email": "s@x.x"
    },
    "expert": null
}
 */

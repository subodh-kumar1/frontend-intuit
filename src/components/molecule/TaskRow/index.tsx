import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import React from "react";
import { useSelector } from "react-redux";
import APP_CONSTANTS from "../../../constants/appConstants";
import { expertApi } from "../../../services";
import { ITaskDetails } from "../ViewTaskDetails";

interface ITaskRowProps {
  task: ITaskDetails;
  taskClick: VoidFunction;
}
const TaskRow = (props: ITaskRowProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userType = useSelector((state: any) => state?.login?.type);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userId = useSelector((state: any) => state?.login?.userId);
  const { task, taskClick } = props;
  const { id } = task;

  function resolve() {
    expertApi
      .resolveTask({ id })
      .then((response) => {
        alert(`Resolved : ${JSON.stringify(response, undefined, 4)}`);
      })
      .catch(() => {
        alert("Issue while resolve");
      });
  }
  return (
    <Box border="1px solid black" padding={2}>
      <Typography onClick={taskClick} variant="h6" component={Link}>
        {task?.taskType}
      </Typography>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-evenly"
        width="100%"
      >
        <Box>
          STATUS:<Typography>{task?.status}</Typography>
        </Box>
        <Box>
          EST:<Typography>{task?.estimatedTime}HRS</Typography>
        </Box>
        <Box>
          EXPERT:
          <Typography>
            {task?.expert?.name} ({task?.expert?.id})
          </Typography>
        </Box>
        <Box>
          CUSTOMER:
          <Typography>
            {task?.customer?.name} ({task?.customer?.id})
          </Typography>
        </Box>
        {userType === APP_CONSTANTS.USER_TYPE.EXPERT &&
          userId == task?.expert?.id && (
            <Button onClick={resolve}>RESOLVE</Button>
          )}
      </Box>
    </Box>
  );
};

export default TaskRow;

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";

import { customerApi, expertApi } from "../../services";
import ViewTaskDetails, {
  ITaskDetails,
} from "../../components/molecule/ViewTaskDetails";
import TaskRow from "../../components/molecule/TaskRow";
import APP_CONSTANTS from "../../constants/appConstants";

interface IViewTasksProps {
  viewType: string;
}
const ViewTasks = (props: IViewTasksProps) => {
  const { viewType } = props;
  const [taskList, setTaskList] = useState<Array<ITaskDetails>>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [taskDetails, setTaskDetails] = useState<ITaskDetails | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const id = useSelector((state: any) => state?.login?.userId);
  const navigate = useNavigate();
  useEffect(() => {
    if (id > 0) {
      if (viewType === APP_CONSTANTS.TASKS_VIEW_TYPE.CUSTOMER_VIEW) {
        customerApi
          .viewTaskList({ id })
          .then((response) => {
            setTaskList(response?.data);
          })
          .catch(() => console.log("error in fetching task"));
      } else if (viewType === APP_CONSTANTS.TASKS_VIEW_TYPE.EXPERT_VIEW) {
        expertApi
          .viewTaskList({ id })
          .then((response) => {
            setTaskList(response?.data);
          })
          .catch(() => console.log("error in fetching task"));
      } else if (
        viewType === APP_CONSTANTS.TASKS_VIEW_TYPE.EXPERT_IMPORTANT_VIEW
      ) {
        expertApi
          .viewImportantTask()
          .then((response) => {
            setTaskList(response?.data);
          })
          .catch(() => console.log("error in fetching task"));
      } else if (viewType === APP_CONSTANTS.TASKS_VIEW_TYPE.QUEUED_VIEV) {
        expertApi
          .viewQueuedTask()
          .then((response) => {
            setTaskList(response?.data);
          })
          .catch(() => console.log("error in fetching task"));
      } else {
        expertApi
          .viewAllTask()
          .then((response) => {
            setTaskList(response?.data);
          })
          .catch(() => console.log("error in fetching task"));
      }
    }
  }, [id, viewType]);
  return (
    <React.Fragment>
      <Box
        onClick={() => {
          navigate("/");
        }}
      >
        <HomeIcon />
      </Box>
      <ViewTaskDetails
        showTask={openDialog}
        closeTask={() => {
          setOpenDialog(false);
        }}
        taskDetails={taskDetails}
      />
      <Box>
        {taskList?.map((task) => {
          return (
            <TaskRow
              key={task?.id}
              task={task}
              taskClick={() => {
                setTaskDetails(task);
                setOpenDialog(true);
              }}
            />
          );
        })}
      </Box>
    </React.Fragment>
  );
};
export default ViewTasks;

/*[
    {
        "id": 1,
        "estimatedTime": 1,
        "taskType": "1wwqw",
        "deadline": "2023-03-19T22:08:17.568845",
        "status": "IN_PROGRESS",
        "customer": {
            "id": 1,
            "name": "cus1",
            "email": "cus1@gm.c"
        },
        "expert": {
            "id": 1,
            "name": "ex1",
            "email": "ex1@gm.c",
            "remainingWorkHours": 8,
            "lastTaskEndTime": "2023-03-18T23:08:22.184584",
            "status": "BUSY"
        }
    }
]*/

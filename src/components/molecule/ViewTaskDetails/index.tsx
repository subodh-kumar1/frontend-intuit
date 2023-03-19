import { Dialog } from "@mui/material";
import React from "react";

interface ITaskCustomerDetails {
  id: number;
  name: string;
  email: string;
}
interface IExpertDetails {
  id: number;
  name: string;
}
export interface ITaskDetails {
  id: number;
  estimatedTime: number;
  taskType: string;
  status: string;
  customer: ITaskCustomerDetails;
  expert: IExpertDetails;
}
interface IViewTaskDetailsProps {
  taskDetails: ITaskDetails | null;
  showTask: boolean;
  closeTask: VoidFunction;
}
const ViewTaskDetails = (props: IViewTaskDetailsProps) => {
  const { taskDetails, showTask, closeTask } = props;
  return (
    <Dialog open={showTask} onClose={closeTask}>
      <pre>{JSON.stringify(taskDetails, undefined, 4)}</pre>
    </Dialog>
  );
};

export default ViewTaskDetails;

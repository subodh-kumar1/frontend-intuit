import React from "react";
import { Box, Typography } from "@mui/material";

interface IDashboardCardProps {
  handleClick: VoidFunction;
  content: string;
}
const DashboardCard = (props: IDashboardCardProps) => {
  const { handleClick, content } = props;
  return (
    <Box
      padding={6}
      width="auto"
      height={48}
      margin={2}
      border="1px solid black"
      onClick={handleClick}
    >
      <Typography>{content}</Typography>
    </Box>
  );
};

export default DashboardCard;

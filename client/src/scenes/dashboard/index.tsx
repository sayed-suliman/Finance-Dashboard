import { Box, useTheme } from "@mui/material";
import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type Props = {};

// eslint-disable-next-line no-empty-pattern
function Dashboard({}: Props) {
  const { palette } = useTheme();
  return <Box color={palette.grey[300]}>Dashboard</Box>;
}

export default Dashboard;

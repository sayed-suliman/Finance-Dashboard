import { Box, useMediaQuery } from "@mui/material";
import React from "react";
import Row1 from "./Row1";
import Row2 from "./Row2";
import Row3 from "./Row3";


// for large screens more then 1200px
const gridTemplateLargeScreens = `
"a b c"
"a b c"
"a b c"
"a b f"
"d e f"
"d e f"
"d h i"
"g h i"
"g h j"
"g h j"
`;
// for small screens less then 1200px
const gridTemplateSmallScreens = `
"a"
"a"
"a"
"a"
"b"
"b"
"b"
"b"
"c"
"c"
"c"
"d"
"d"
"d"
"e"
"e"
"e"
"f"
"f"
"f"
"g"
"g"
"g"
"h"
"h"
"h"
"h"
"i"
"i"
"j"
"j"
`;

function Dashboard() {
  const isAboveMediumScreens = useMediaQuery("(min-width:1200px)");
  return (
    <Box
      width="100%"
      height="100%"
      display="grid"
      gap="1.5rem"
      sx={
        isAboveMediumScreens
          ? {
              gridTemplateAreas: gridTemplateLargeScreens,
              gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
              gridTemplateRows: "repeat(10,minimax(60px, 1fr))",
            }
          : {
              gridTemplateAreas: gridTemplateSmallScreens,
              gridAutoColumns: "1fr",
              gridAutoRows: "80px",
            }
      }
    >
      <Row1 />
      <Row2 />
      <Row3 />
    </Box>
  );
}

export default Dashboard;

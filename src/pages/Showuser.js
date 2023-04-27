import React from "react";
import Sidenav from "../Sidenav";
import { Box } from "@mui/material";

export default function Showuser() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div>
            <h1>Show user</h1>
          </div>
        </Box>
      </Box>
    </>
  );
}

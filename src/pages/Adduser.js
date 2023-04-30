import React from "react";
import Sidenav from "../Sidenav";
import { Box, Button, Card, FormControl, FormGroup, TextField } from "@mui/material";
import { blue } from "@mui/material/colors";


export default function Adduser() {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        
            <h1>Register User</h1>
            <Card sx={{m:'auto',backgroundColor:'graygh',p:5,boxShadow:5}}>
            <FormGroup>
            <FormControl>
            <TextField fullWidth label="Enter Name" variant="outlined" sx={{mb:3}} required />
            <TextField fullWidth label="Enter Mobile Number" variant="outlined" sx={{mb:3}} required />
            <TextField fullWidth label="Enter Email" variant="outlined" sx={{mb:3}} required />
            <TextField fullWidth label="Enter Address" variant="outlined" sx={{mb:3}} required />
            <Button sx={{backgroundColor:'blue',width:'25%'}}>
              Register User
            </Button>
            </FormControl>
            </FormGroup>
            </Card>
         
        </Box>
      </Box>
    </>
  );
}

import { Box, Button, Card, FormControl, FormGroup, TextField } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function Login () {
    const [email,setEmail]=useState("");
    const [passward,setPassward]=useState("");

    const userName=localStorage.getItem('email')?localStorage.getItem('email'):'anil@gmail.com'
    const userPassward=localStorage.getItem('passward')?localStorage.getItem('passward'):'Anil@123'
    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(email === userName && passward === userPassward){
          
            toast.success("Login Success!")
            console.warn("success!",{
              position: toast.POSITION.TOP_CENTER
          });
            navigate('/homepage')
        }
        else{
          toast.error("Invalid Email or Passward!")
            navigate('/')
        }

    };
  return (
    <>
     <Box component="main" sx={{ flexGrow: 2, p: 3,display:'flex',justifyContent:'center' }}>
        <Card sx={{m:'auto',p:5,boxShadow:5}}>
        <h1>User Login</h1>
        <FormGroup>
        <FormControl>
        <TextField fullWidth label="Enter Email" value={email} variant="outlined" sx={{mb:3}} onChange={(e)=>setEmail(e.target.value)}/>
        <TextField fullWidth label="Enter Passward" value={passward} variant="outlined" sx={{mb:3}} onChange={(e)=>setPassward(e.target.value)}/>
        <Button sx={{backgroundColor:'blue',width:'50%'}} onClick={handleSubmit}>
          Add User
        </Button>
       
        </FormControl>
        </FormGroup>
        </Card>
     
    </Box>
    </>
  )
}

export default Login
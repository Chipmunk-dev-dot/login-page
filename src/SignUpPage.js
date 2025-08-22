import {
  Stack,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Card,
  CardContent,
  Link,
} from "@mui/material";
import React, { useState } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import bGImage from "../src/images/Mountains (1920x1080).jpg";


const SignUpPage = () => {

  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [confPassword,setConfPassword]=useState("");
  const [error, setError] = useState('');



  
  const handleClick=()=>{
    if (password !== confPassword) {
      setError("Passwords do not match.");
      return;
    }else{
    setError('');
    setName("");
    setEmail("");
    setPassword("");
    setConfPassword("");

    }
    
  }
   

  return (
    <Box
      container
      sx={{
        height: "100vh",
        bgcolor: "#87779cff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          bgcolor: "#cfccd3ff",
          height: "60%",
          width: "60%",
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Box sx={{ height: "100%", width: "50%", p: 4 }}>
          <Typography variant="h2">Sign Up</Typography>
          <Grid size={12} sx={{ mt: 5 }}>
            <TextField value={name} onChange={(e)=>setName(e.target.value)} name="Full Name" label={"Full Name"} required fullWidth />
          </Grid>
          <Grid size={12} sx={{ mt: 3 }}>
            <TextField value={email} onChange={(e)=>setEmail(e.target.value)}  name="Email" label={"Email Address"} required fullWidth />
          </Grid>
          <Grid size={12} sx={{ mt: 3 }}>
            <TextField value={password} onChange={(e)=>setPassword(e.target.value)}  name="Password" label={"Password"} required fullWidth />
          </Grid>
          <Grid size={12} sx={{ mt: 3 }}>
            <TextField value={confPassword} onChange={(e)=>setConfPassword(e.target.value)}  name="Password" label={"Confirm Password"} required fullWidth />
          </Grid>

           {error && (
        <Typography color="error" >
          {error}
        </Typography>
      )}
          <Grid size={12} sx={{ mt: 3 }}>
            <Button onClick={handleClick} variant="contained" sx={{ borderRadius: 5 }} fullWidth>
              SignUp
            </Button>
            <Typography sx={{ mt: 3,textAlign:'center' }}>
              Already have an account? <Link href="/login">Log in</Link>
            </Typography>
          </Grid>
        </Box>
        <Box
          sx={{
            backgroundImage: `url("${bGImage}")`,
            height: "100%",
            width: "50%",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
           <Typography sx={{ pt: 10 }} variant="h5">
             
            </Typography>
          <Grid
            sx={{
              height:"100%",
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column"
            }}
          >
           
            <Button variant="contained" sx={{  bgcolor: "black",  borderRadius:5 }}>
              <GoogleIcon />
              Sign Up with Google
            </Button>
            <Button variant="contained" sx={{ mt: 3 , bgcolor: "black",  borderRadius:5 }}>
              <FacebookIcon />
              Sign Up with Facebook
            </Button>
          </Grid>
        </Box>
      </Card>
    </Box>
  );
};

export default SignUpPage;

import React from "react";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Stack,
  TextField,
  Typography,
  Alert,
  Snackbar,
  Link,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate=useNavigate();

  const [open, setOpen] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => {
    if (username === "" || password === "" ) {
      setError("Required ");
    }  else {
     
          navigate("/Home")

      
    }

  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      <Grid
        size={7}
        sx={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          bgcolor: "  #87779cff",
        }}
      >
        <Box
          sx={{
            bgcolor: "#3e2c70b2",
            height: "70%",
            width: "80%",
            borderTopLeftRadius: "30px",
            borderBottomLeftRadius: "30px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" color="white">
            Welcome Back!
          </Typography>
          <Typography color="white">
            You can sign in to access with your existinng account.
          </Typography>
        </Box>
      </Grid>

      <Grid
        sx={{
          backgroundColor: "#87779cff",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
        size={5}
      >
        <Box
          sx={{
            bgcolor: "#e7e7e7ff",
            height: "70%",
            width: "70%",
            borderTopRightRadius: "30px",
            borderBottomRightRadius: "30px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid sx={{ pb: "25px" }}>
            <Typography variant="h3" fontWeight={"bold"} color="2F2F2F">
              Sign In
            </Typography>
          </Grid>

          <Grid sx={{ mb: 2 }} size={6}>
            <TextField
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              fullWidth
              name="Username"
              label={
                <Stack direction={"row"} spacing={1} sx={{ display: "flex" }}>
                  <PersonIcon />
                  <Typography>Username or email</Typography>
                </Stack>
              }
              required
            />
            <Typography color="error">{error}</Typography>
          </Grid>

          <Grid sx={{ mb: 2 }} size={6}>
            <TextField
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="Password"
              label={
                <Stack direction={"row"} spacing={1} sx={{ display: "flex" }}>
                  <LockIcon />
                  <Typography>Password</Typography>
                </Stack>
              }
              required
              fullWidth
            ></TextField>
            <Typography color="error">{error}</Typography>
          </Grid>
          <Stack
            direction={"row"}
            sx={{ display: "flex", alignItems: "center" }}
            spacing={2}
          >
            <FormGroup>
              <FormControlLabel
                checked={click}
                onChange={(e) => setClick(e.target.checked)}
                control={<Checkbox />}
                label="Remeber Me"
              />
            </FormGroup>
            <Button>Forgot password?</Button>
          </Stack>

          <Grid size={6} sx={{ pt: 2 }}>
            <Button
              onClick={handleClick}
              sx={{ bgcolor: "#3e2c70b2", borderRadius: 5 }}
              variant="contained"
              fullWidth
              
            >
              Sign In
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: "100%" }}
              >
                Submitted successfully
              </Alert>
            </Snackbar>
          </Grid>
          <Stack
            size="12"
            sx={{ mt: 2, display: "flex", alignItems: "center" }}
            direction="row"
            spacing={4}
          >
            <Typography>New here???</Typography>
            <Link href="/signup">Create an Account here</Link>
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default LoginPage;

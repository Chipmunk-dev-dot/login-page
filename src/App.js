import logo from "./logo.svg";
import "./App.css";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import { Route, Router, Routes } from "react-router-dom";
import IceCreamShop from "./IceCreamShop";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage/>}/>
      <Route path="/Home" element={<IceCreamShop/>}/>
    </Routes>
  );
}

export default App;

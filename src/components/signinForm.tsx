import React from "react";
import { TextField } from "@mui/material";

interface SignupFormProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}

const SignupForm: React.FC<SignupFormProps> = ({
  setUserName,
  setPassword,
  setEmail,
  setPhoneNumber,
}) => (
  <>
  <div style={{width:'20vw'}}>
    <TextField
      label="Username"
      variant="outlined"
      fullWidth
      onChange={(e) => setUserName(e.target.value)}
      style={{ marginBottom: "20px" }}
    />
    <TextField
      label="Password"
      type="password"
      variant="outlined"
      fullWidth
      onChange={(e) => setPassword(e.target.value)}
      style={{ marginBottom: "20px" }}
    />
    <TextField
      label="Email"
      type="email"
      variant="outlined"
      fullWidth
      onChange={(e) => setEmail(e.target.value)}
      style={{ marginBottom: "20px" }}
    />
    <TextField
      label="Phone Number"
      type="tel"
      variant="outlined"
      fullWidth
      onChange={(e) => setPhoneNumber(e.target.value)}
    />
    </div>
  </>
);

export default SignupForm;

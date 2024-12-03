import React from "react";
import { TextField } from "@mui/material";

interface ValidationFormProps {
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

const ValidationForm: React.FC<ValidationFormProps> = ({
  setUserName,
  setPassword,
}) => (
  <div>
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
    />
  </div>
);

export default ValidationForm;

import { TextField, Typography } from "@mui/material";
import { useState } from "react";

export default function SigninForm({ onFormChange }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = (setter) => (event) => {
    setter(event.target.value);
    // Pass the updated form values to the parent component
    onFormChange({ email, username, password, phoneNumber });
  };

  return (
    <div
      style={{
        display: "grid",
        border: "none",
        borderRadius: "30px",
        width: "300px",
        height: "400px",
        placeItems: "center",
        backgroundColor:"#ECE4B7"
      }}
    >
      <Typography variant="h5">Sign Up</Typography>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center", // centers the TextFields horizontally
        }}
      >
        <TextField
          id="EmailField"
          label="Email"
          variant="filled"
          value={email}
          onChange={handleChange(setEmail)}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="UsernameField"
          label="Username"
          variant="filled"
          value={username}
          onChange={handleChange(setUsername)}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="PasswordField"
          label="Password"
          variant="filled"
          value={password}
          onChange={handleChange(setPassword)}
          style={{ marginBottom: "20px" }}
        />
        <TextField
          id="PNfield"
          label="Phone Number"
          variant="filled"
          value={phoneNumber}
          onChange={handleChange(setPhoneNumber)}
          style={{ marginBottom: "20px" }}
        />
      </form>
    </div>
  );
}

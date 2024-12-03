import React, { useState } from "react";
import ValidationForm from "../components/loginForm.tsx";
import { Typography, Snackbar, Alert } from "@mui/material";
import SubmitButton from "../components/submitButton.tsx";

export default function LoginPage() {
  // State for form inputs
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  // State for error messages
  const [error, setError] = useState("");

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#EABE7C",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h2"
        style={{
          marginBottom: "100px",
        }}
      >
        Welcome back to PieCart
      </Typography>

      {/* ValidationForm for username and password */}
      <ValidationForm setUserName={setUserName} setPassword={setPassword} />

      {/* SubmitButton */}
      <SubmitButton
        route="/home"
        origin="home"
        userName={userName}
        password={password}
        onError={(errorMessage: string) => setError(errorMessage)}
      />

      {/* Error Snackbar */}
      <Snackbar
        open={!!error} // Show when error is not empty
        autoHideDuration={3000}
        onClose={() => setError("")} // Clear error on close
      >
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

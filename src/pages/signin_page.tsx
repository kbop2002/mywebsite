import React, { useState } from "react";
import SignupForm from "../components/signinForm.tsx";
import { Typography, Snackbar, Alert } from "@mui/material";
import SubmitButton from "../components/submitButton.tsx";

export default function SignupPage() {
  // State for form inputs
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // State for error messages
  const [error, setError] = useState("");

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#F5E7CF",
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
        Create Your PieCart Account
      </Typography>

      {/* SignupForm for username, password, email, and phone number */}
      <SignupForm
        setUserName={setUserName}
        setPassword={setPassword}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
      />

      {/* SubmitButton */}
      <SubmitButton
        route="/home"
        origin="signin"
        userName={userName}
        password={password}
        onError={(errorMessage: string) => setError(errorMessage)}
      />

      {/* Error Popup */}
      <Snackbar
        open={!!error} // Show when error is not empty
        autoHideDuration={3000} // Close after 3 seconds
        onClose={() => setError("")} // Clear error on close
      >
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>
    </div>
  );
}

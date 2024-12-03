
import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Paper,
} from "@mui/material";

export default function ProfilePage() {
  // State for user details
  const [address, setAddress] = useState(
    localStorage.getItem("address") || ""
  );
  const [cardNumber, setCardNumber] = useState(
    localStorage.getItem("cardNumber") || ""
  );
  const [email, setEmail] = useState(localStorage.getItem("email") || "");
  const [phoneNumber, setPhoneNumber] = useState(
    localStorage.getItem("phoneNumber") || ""
  );

  const handleSave = () => {
    // Save the updated details to localStorage
    localStorage.setItem("address", address);
    localStorage.setItem("cardNumber", cardNumber);
    localStorage.setItem("email", email);
    localStorage.setItem("phoneNumber", phoneNumber);
    alert("Profile updated successfully!");
  };

  return (
    <div
      style={{
        backgroundColor: "#E3F2FD",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "30px",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <Typography
          variant="h4"
          style={{
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Update Your Profile
        </Typography>

        <TextField
          label="Address"
          variant="outlined"
          fullWidth
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          label="Payment Info (Card Number)"
          variant="outlined"
          fullWidth
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <TextField
          label="Phone Number"
          variant="outlined"
          fullWidth
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          style={{ marginBottom: "20px" }}
        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSave}
          style={{
            marginTop: "20px",
          }}
        >
          Save Changes
        </Button>
      </Paper>
    </div>
  );
}

import { Typography } from "@mui/material";
import { useState } from "react";
import SubmitButton from "../components/submitButton";
import SigninForm from "../components/signinForm";

export default function SigninPage() {
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    password: "",
    phoneNumber: ""
  });

  const handleFormChange = (updatedValues) => {
    setFormValues(updatedValues);
  };

  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#EABE7C",
        height: "100vh",
        width: "100vw",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant="h2" style={{ marginBottom: "100px" }}>
        Welcome to PieCart
      </Typography>
      <SigninForm onFormChange={handleFormChange} />
      <SubmitButton
        route="/home"
        origin="signin"
        userName={formValues.username}
        password={formValues.password}
      />
    </div>
  );
}

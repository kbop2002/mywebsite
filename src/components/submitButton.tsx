import React from "react";
import { Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface SubmitButtonProps {
  route: string;
  origin: string;
  userName: string;
  password: string;
  onError: (message: string) => void;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({
  route,
  origin,
  userName,
  password,
  onError,
}) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Simulate user validation using localStorage
    const users = JSON.parse(localStorage.getItem("users") || "{}");

    if (!userName || !password) {
      onError("Username and password are required!");
      return;
    }

    if (origin === "home") {
      // Login logic
      if (users[userName] && users[userName].password === password) {
        navigate(route.startsWith("/") ? route : `/${route}`);
      } else {
        onError("Incorrect username or password!");
      }
    } else if (origin === "signin") {
      // Registration logic
      if (users[userName]) {
        onError("Username already taken!");
      } else {
        users[userName] = { password };
        localStorage.setItem("users", JSON.stringify(users));
        navigate(route.startsWith("/") ? route : `/${route}`);
      }
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleSubmit}
      style={{
        marginTop: "30px",
        borderRadius: "40px",
        padding: "20px",
        backgroundColor: "#CC3F0C",
        width: "300px",
        height: "50px",
      }}
    >
      <Typography variant="h5" style={{ color: "black" }}>
        SUBMIT
      </Typography>
    </Button>
  );
};

export default SubmitButton;


import { TextField } from "@mui/material";

export default function ValidationForm() {
  return (
    <>
      <div
        style={{
          display: "grid",
          border: "none",
          borderRadius: "30px",
          width: "300px",
          height: "350px",
          placeItems: "center",
          backgroundColor:"#ECE4B7"
        }}
      >
        <h1>Login</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // centers the TextFields horizontally
          }}
        >
          <TextField
            id="UserNameField"
            label="Username"
            variant="filled"
            style={{
              marginBottom: "20px", // spacing between text fields
            }}
          />

          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
        </form>
      </div>
    </>
  );
}

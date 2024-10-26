
import { TextField, Typography } from "@mui/material";

export default function SigninForm() {
  return (
    <>
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
            style={{
              marginBottom: "20px", // spacing between text fields
            }}
          />
            <TextField
            id="UsernameField"
            label="Username"
            variant="filled"
            style={{
              marginBottom: "20px", // spacing between text fields
            }}
          />
           <TextField
            id="PasswordField"
            label="Password"
            variant="filled"
            style={{
              marginBottom: "20px", // spacing between text fields
            }}
          />
           <TextField
            id="PNfield"
            label="Phone Number"
            variant="filled"
            style={{
              marginBottom: "20px", // spacing between text fields
            }}
          />
        </form>
      </div>
    </>
  );
}

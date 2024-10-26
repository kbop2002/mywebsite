import { Typography, Button } from "@mui/material";
import { useNavigate, Outlet} from "react-router-dom"; // Removed Router as it's not used

export default function Index() {
  const navigate = useNavigate(); // useNavigate should be used here

  return (
    <>
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
        <Typography variant="h1">Welcome to PieCart</Typography>
        <Typography variant="h3" style={{ marginBottom: "100px" }}>
          To get started sign up today or login to your account
        </Typography>
        <div
          style={{
            display: "grid",
            border: "none",
            borderRadius: "30px",
            width: "300px",
            height: "350px",
            placeItems: "center",
            backgroundColor: "#ECE4B7",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginTop: "60px",
            }}
          >
            <Typography>Already have an account?</Typography>
            <Button
              variant="contained"
              onClick={() => navigate('/login')} // Correct use of navigate
              style={{
                marginTop: "1px",
                borderRadius: "40px",
                padding: "20px",
                backgroundColor: "#CC3F0C",
                width: "250px",
                height: "50px",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  color: "black",
                }}
              >
                Login
              </Typography>
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              marginBottom: "60px",
            }}
          >
            <Typography>New to PieCart?</Typography>
            <Button
              variant="contained"
              onClick={() => navigate("/signin")} // Add this for signup as well
              style={{
                marginTop: "1px",
                borderRadius: "40px",
                padding: "20px",
                backgroundColor: "#CC3F0C",
                width: "250px",
                height: "50px",
              }}
            >
              <Typography
                variant="h5"
                style={{
                  color: "black",
                }}
              >
                Sign up
              </Typography>
            </Button>
          </div>
        </div>
        <Outlet/>
      </div>
    </>
  );
}

import { Button, Typography } from "@mui/material";
import { useNavigate, Outlet } from "react-router-dom";
import username from "../authentication";

export default function SubmitButton({ origin, route, userName, password,email, phoneNumber, address }) {
    const navigate = useNavigate();

    const handleSubmit = () => {
        for( const key in username){
            console.timeLog(key+ " : "+ userName[key])
        }
        if (origin === 'signin') {
            console.log('here 1')
            if (!username[userName]) {
                console.log('here 2')
                username[userName] = password;
                navigate(route.startsWith('/') ? route : `/${route}`);
            } else {
                console.log("Username already taken");
            }
        } else if (origin === 'home') {
            if (username[userName] === password) {
                console.log('here 3')

                navigate(route.startsWith('/') ? route : `/${route}`);
            } else {
                console.log("Incorrect username or password");
            }
        }
    };

    return (
        <>
            <Button variant="contained" onClick={handleSubmit}
                style={{
                    marginTop: "30px",
                    borderRadius: "40px",
                    padding: "20px",
                    backgroundColor: "#CC3F0C",
                    width: "300px",
                    height: "50px",
                }}
            >
                <Typography variant="h5" style={{ color: "black" }}>SUBMIT</Typography>
            </Button>
            <Outlet />
        </>
    );
}

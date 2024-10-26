import ValidationForm from "../components/loginForm"
import {Typography} from "@mui/material"
import SubmitButton from "../components/submitButton"
export default function LoginPage(){
    return(
        <>
        <div style={{
            display:"flex",
            backgroundColor: "#EABE7C",
            height:"100vh" ,
            width:"100vw" ,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <Typography variant="h2" style={{
                marginBottom:"100px"
            }}>Welcome back to PieCart</Typography>
            <ValidationForm/>
            <SubmitButton/>
        </div>
        </>
    )

}
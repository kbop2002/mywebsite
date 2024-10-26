import {Typography} from "@mui/material"
import SubmitButton from "../components/submitButton"
import SigninForm from "../components/signinForm"
export default function SigninPage(){
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
            }}>Welcome to PieCart</Typography>
            <SigninForm/>
            <SubmitButton/>
        </div>
        </>
    )

}
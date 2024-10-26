import { Button, Typography } from "@mui/material"

export default function SubmitButton(){
    return(
        <Button variant="contained" style={{
            marginTop:"30px",
            borderRadius: "40px",
            padding:"20px",
            backgroundColor:"#CC3F0C",
            width:"300px",
            height:"50px",
        }}>
            <Typography variant="h5" style={{
                color:"black"
            }}>SUBMIT</Typography>
        </Button>

    )
}
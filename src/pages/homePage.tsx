import React from "react";
import { Card, Typography, CardContent, CardActions, Button } from "@mui/material";
import ResponsiveAppBar from '../components/AppBar.tsx';
import deals from "../deals.config.js";
import { useNavigate, Outlet } from "react-router-dom";


export default function HomePage({ user }) {
    const navigate = useNavigate();

    return (
        <>
            <ResponsiveAppBar />

            {/* Welcome Card Section */}
            <div style={{ display: "flex", justifyContent: "center", textAlign:'center', height:'30vh'}}>
                <div style={{ alignSelf: 'center'}}>
                        <Typography variant="h5" component="div">
                            Welcome, {user.name}!
                        </Typography>
                        <Typography color="textSecondary">
                            Username: {user.username}
                        </Typography>
                        <Typography color="textSecondary">
                            UserID: {user.userID}
                        </Typography>
 
                        <Button onClick = {()=>{navigate('/')}}variant="contained" color="primary">
                            Log Out
                        </Button>
                </div>
            </div>

            {/* Deals Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                overflowX: 'auto',             // Enables horizontal scrolling
                width: '100vw',      // Shows only 5 items at a time if each is 300px wide
                gap: '1vw',
                marginTop: '20px',
                height: '25vh',
                scrollSnapType: 'x mandatory'  // Optional: adds scroll snapping for better UX
            }}>
                {deals.map((deal, index) => (
                    <Card
                        key={index}
                        style={{
                            display:'flex',
                            minWidth: "23vw",
                            height: '22vh',
                            padding: "10px",
                            backgroundColor: "#f5f5f5",
                            scrollSnapAlign: 'start', // Optional: Aligns each card at the start when scrolling
                            textAlign:'center',
                            justifyContent:'left'

                        }}
                    >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {deal.discount} % off {deal.item}
                            </Typography>
                            <Typography color="textSecondary">
                                Available for {deal.timeLeft_hours} more hours
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                Price: ${deal.price}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary" sx={{alignSelf:'left'}}>
                                Buy Now
                            </Button>
                        </CardActions>
                    </Card>
                ))}
            </div>

            {/* Bottom Boxes Section */}
            <div style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: 'center',
                gap: '20px',
                marginTop: '20px'
            }}>
                <Card
                    style={{
                        height: '30vh',
                        width: '33vw',
                        backgroundColor: "#f5f5f5",
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {/* Insert something abt View Past orders*/ }
                            </Typography>
                            <Typography color="textSecondary">
                                {/* Insert something abt View Past orders*/ }
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {/* Insert something abt View Past orders*/ }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button onClick = {()=>navigate('/pastO')}variant="contained" color="primary">
                                View Past Orders
                            </Button>
                        </CardActions>
                </Card>
                <Card
                    style={{
                        height: '30vh',
                        width: '33vw',
                        backgroundColor: "#f5f5f5",
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {/* Insert something abt Place new orders*/ }
                            </Typography>
                            <Typography color="textSecondary">
                                {/* Insert something abt place new orders*/ }
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {/* Insert something abt place new orders*/ }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button  onClick = {()=> {navigate('/order')}}variant="contained" color="primary">
                                Place New Order
                            </Button >
                        </CardActions>
                </Card>
                <Card
                    style={{
                        height: '30vh',
                        width: '33vw',
                        backgroundColor: "#f5f5f5",
                        display:'flex',
                        justifyContent:'center'
                    }}
                >
                    <CardContent>
                            <Typography variant="h6" component="div">
                                {/* Insert something abt View current orders*/ }
                            </Typography>
                            <Typography color="textSecondary">
                                {/* Insert something abt View current orders*/ }
                            </Typography>
                            <Typography variant="body2" color="textSecondary">
                                {/* Insert something abt View current orders*/ }
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button variant="contained" color="primary">
                                View Order Status
                            </Button>
                        </CardActions>
                </Card>

            </div>
            <Outlet/>
        </>
    );
}

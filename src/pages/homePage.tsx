import React from "react";
import { Card, Typography, CardContent, CardActions, Button } from "@mui/material";
import ResponsiveAppBar from '../components/AppBar.tsx';
import deals from "../deals.config.js";

export default function HomePage({ user }) {
    return (
        <>
            <ResponsiveAppBar />

            {/* Welcome Card Section */}
            <div style={{ display: "flex", justifyContent: "center", marginTop: "100px" }}>
                <Card
                    style={{
                        padding: "20px",
                        maxWidth: "400px",
                        backgroundColor: "#f5f5f5",
                    }}
                >
                    <CardContent>
                        <Typography variant="h5" component="div">
                            Welcome, {user.name}!
                        </Typography>
                        <Typography color="textSecondary">
                            Username: {user.username}
                        </Typography>
                        <Typography color="textSecondary">
                            UserID: {user.userID}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" color="primary">
                            Log Out
                        </Button>
                    </CardActions>
                </Card>
            </div>

            {/* Deals Section */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                flexWrap: 'wrap',
                marginTop: '20px',
                gap: '20px',
                overflow:'auto',
                height:'25vh'
            }}>
                {deals.map((deal, index) => (
                    <Card
                        key={index}
                        style={{
                            width: "300px",
                            height: '20vh',
                            padding: "10px",
                            backgroundColor: "#ffffff",
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
                            <Button variant="contained" color="primary">
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
                        height: '200px',
                        width: '200px',
                        backgroundColor: "#f5f5f5",
                    }}
                />
                <Card
                    style={{
                        height: '200px',
                        width: '200px',
                        backgroundColor: "#f5f5f5",
                    }}
                />
                <Card
                    style={{
                        height: '200px',
                        width: '200px',
                        backgroundColor: "black",
                    }}
                />
            </div>
        </>
    );
}

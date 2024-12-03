import React, { useEffect, useState } from "react";
import { Typography, Paper, List, ListItem, Divider } from "@mui/material";

export default function PastOrders() {
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    // Retrieve orders from localStorage
    const storedOrders = JSON.parse(localStorage.getItem("pastOrders") || "[]");

    // Check if `storedOrders` is an array; if not, convert it
    const parsedOrders = Array.isArray(storedOrders)
      ? storedOrders
      : [storedOrders];

    setOrders(parsedOrders);
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#FAF3E0",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <Typography
        variant="h3"
        style={{
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        Your Past Orders
      </Typography>

      {orders.length === 0 ? (
        <Typography variant="h5" style={{ textAlign: "center" }}>
          You have no past orders.
        </Typography>
      ) : (
        <Paper
          elevation={3}
          style={{
            margin: "0 auto",
            maxWidth: "600px",
            padding: "20px",
          }}
        >
          <List>
            {orders.map((order, index) => (
              <div key={index}>
                <ListItem>
                  <Typography variant="body1">
                    <strong>Order #{index + 1}:</strong> {order.size} pizza
                  </Typography>
                  <Typography variant="body2" style={{ marginLeft: "10px" }}>
                    Toppings:{" "}
                    {order.toppings.length > 0
                      ? order.toppings.join(", ")
                      : "None"}
                  </Typography>
                  <Typography variant="body2" style={{ marginLeft: "10px" }}>
                    Drink: {order.drink || "None"}
                  </Typography>
                  <Typography variant="body2" style={{ marginLeft: "10px" }}>
                    Total: ${order.total.toFixed(2)}
                  </Typography>
                </ListItem>
                {index < orders.length - 1 && <Divider />}
              </div>
            ))}
          </List>
        </Paper>
      )}
    </div>
  );
}

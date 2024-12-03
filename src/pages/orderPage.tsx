import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderPage: React.FC = () => {
  const navigate = useNavigate();
  localStorage.setItem(
    "paymentMethods",
    JSON.stringify(["Credit Card", "PayPal", "Apple Pay"])
  );
  

  // State for pizza size, toppings, and drink selection
  const [size, setSize] = useState<string>("medium");
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const [drink, setDrink] = useState<string>("");

  // Pricing
  const sizePrices = { small: 8, medium: 10, large: 12 };
  const toppingPrices = [
    { name: "Cheese", price: 2 },
    { name: "Pepperoni", price: 3 },
    { name: "Mushrooms", price: 2.5 },
    { name: "Olives", price: 1.5 },
  ];
  const drinkPrices = { soda: 2, water: 1 };

  // Handlers
  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSize(event.target.value);
  };

  const handleToppingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSelectedToppings((prevToppings) =>
      prevToppings.includes(value)
        ? prevToppings.filter((topping) => topping !== value)
        : [...prevToppings, value]
    );
  };

  const handleDrinkChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setDrink(event.target.value);
  };

  const calculateTotal = (): number => {
    const sizePrice = sizePrices[size];
    const toppingsPrice = selectedToppings.reduce(
      (total, topping) =>
        total + (toppingPrices.find((t) => t.name === topping)?.price || 0),
      0
    );
    const drinkPrice = drinkPrices[drink] || 0;

    return sizePrice + toppingsPrice + drinkPrice;
  };

  const handlePlaceOrder = () => {
    const orderDetails = {
      size,
      toppings: selectedToppings,
      drink,
      total: calculateTotal(),
    };
    localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
    localStorage.setItem("pastOrders", JSON.stringify(orderDetails));

    navigate("/orderConfirmation");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Order Your Pizza</h1>

      {/* Pizza size selection */}
      <div style={styles.section}>
        <label htmlFor="size" style={styles.label}>
          Choose a pizza size:
        </label>
        <select id="size" value={size} onChange={handleSizeChange} style={styles.select}>
          <option value="small">Small - $8</option>
          <option value="medium">Medium - $10</option>

        <option value="large">Large - $12</option>
      </select>
    </div>

    {/* Toppings selection */}
    <div style={styles.section}>
      <h3 style={styles.subHeader}>Select Toppings:</h3>
      {toppingPrices.map((topping) => (
        <label key={topping.name} style={styles.checkboxLabel}>
          <input
            type="checkbox"
            value={topping.name}
            onChange={handleToppingChange}
            style={styles.checkbox}
          />
          {topping.name} - ${topping.price}
        </label>
      ))}
    </div>

    {/* Drink selection */}
    <div style={styles.section}>
      <label htmlFor="drink" style={styles.label}>Choose a drink:</label>
      <select id="drink" value={drink} onChange={handleDrinkChange} style={styles.select}>
        <option value="">None</option>
        <option value="soda">Soda - $2</option>
        <option value="water">Water - $1</option>
      </select>
    </div>

    {/* Total price */}
    <div style={styles.totalSection}>
      <h3>Total Price: ${calculateTotal().toFixed(2)}</h3>
    </div>

    {/* Place Order Button */}
    <div style={styles.buttonSection}>
      <button onClick={handlePlaceOrder} style={styles.button}>Place Order</button>
    </div>
  </div>
);
};

// Styles object for inline styling
const styles = {
container: {
  fontFamily: "Arial, sans-serif",
  maxWidth: "600px",
  margin: "0 auto",
  padding: "20px",
  border: "1px solid #ccc",
  borderRadius: "10px",
  backgroundColor: "#f9f9f9",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
},
header: {
  textAlign: "center" as const,
  marginBottom: "20px",
  color: "#333",
},
section: {
  marginBottom: "15px",
},
subHeader: {
  marginBottom: "10px",
  color: "#555",
},
label: {
  display: "block",
  marginBottom: "5px",
  fontWeight: "bold" as const,
  color: "#333",
},
select: {
  width: "100%",
  padding: "8px",
  fontSize: "16px",
  border: "1px solid #ccc",
  borderRadius: "5px",
},
checkboxLabel: {
  display: "block",
  marginBottom: "10px",
  color: "#555",
},
checkbox: {
  marginRight: "10px",
},
totalSection: {
  textAlign: "center" as const,
  marginTop: "20px",
  fontSize: "18px",
  fontWeight: "bold" as const,
},
buttonSection: {
  textAlign: "center" as const,
  marginTop: "20px",
},
button: {
  padding: "10px 20px",
  fontSize: "16px",
  color: "#fff",
  backgroundColor: "#28a745",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
},
};

export default OrderPage;

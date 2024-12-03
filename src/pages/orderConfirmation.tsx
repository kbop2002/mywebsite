import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderConfirmation: React.FC = () => {
  const navigate = useNavigate();
  localStorage.setItem(
    "paymentMethods",
    JSON.stringify(["Credit Card", "PayPal", "Apple Pay"])
  );
  

  // Retrieve order details and payment methods from localStorage
  const orderDetails = JSON.parse(localStorage.getItem("orderDetails") || "{}");
  const storedPaymentMethods: string[] =
    JSON.parse(localStorage.getItem("paymentMethods") || "[]") || [];

  // State for selected payment method and confirmation popup
  const [paymentMethod, setPaymentMethod] = useState<string>(
    storedPaymentMethods[0] || ""
  );
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  // Handle payment method change
  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setPaymentMethod(event.target.value);
  };

  // Handle Confirm Order
  const handleConfirmOrder = () => {
    // Store the selected payment method in localStorage
    localStorage.setItem("selectedPaymentMethod", paymentMethod);

    // Show the confirmation popup
    setPopupVisible(true);
  };

  // Close the confirmation popup
  const closePopup = () => {
    setPopupVisible(false);
    // Navigate back to the home page or reset if needed
    navigate("/home");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Order Confirmation</h1>

      {/* Order Details */}
      <div style={styles.orderDetails}>
        <p>
          <strong>Pizza Size:</strong> {orderDetails.size || "Not selected"}
        </p>
        <p>
          <strong>Toppings:</strong>{" "}
          {orderDetails.toppings?.length > 0
            ? orderDetails.toppings.join(", ")
            : "None"}
        </p>
        <p>
          <strong>Drink:</strong> {orderDetails.drink || "None"}
        </p>
        <h3 style={styles.total}>
          <strong>Total:</strong> ${orderDetails.total?.toFixed(2) || "0.00"}
        </h3>
      </div>

      {/* Payment Method Selection */}
      <div style={styles.paymentSection}>
        <label htmlFor="paymentMethod" style={styles.label}>
          Select Payment Method:
        </label>
        <select
          id="paymentMethod"
          value={paymentMethod}
          onChange={handlePaymentMethodChange}
          style={styles.select}
        >
          {storedPaymentMethods.length > 0 ? (
            storedPaymentMethods.map((method, index) => (
              <option key={index} value={method}>
                {method}
              </option>
            ))
          ) : (
            <option value="">No payment methods available</option>
          )}
        </select>
      </div>

      {/* Buttons */}
      <div style={styles.buttonContainer}>
        <button style={styles.backButton} onClick={() => navigate("/home")}>
          Back to Home
        </button>
        <button
          style={styles.confirmButton}
          onClick={handleConfirmOrder}
          disabled={!paymentMethod}
        >
          Confirm Order
        </button>
      </div>

      {/* Confirmation Popup */}
      {isPopupVisible && (
        <div style={styles.popup}>
          <div style={styles.popupContent}>
            <h2>Order Confirmed!</h2>
            <p>Your order has been placed successfully.</p>
            <p>
              <strong>Payment Method:</strong> {paymentMethod}
            </p>
            <button style={styles.closeButton} onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Styles
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
    textAlign: "center" as const,
  },
  header: {
    color: "#333",
    marginBottom: "20px",
  },
  orderDetails: {
    textAlign: "left" as const,
    marginBottom: "20px",
    color: "#555",
    lineHeight: "1.6",
  },
  total: {
    marginTop: "20px",
    color: "#333",
    fontSize: "18px",
  },
  paymentSection: {
    marginBottom: "20px",
  },
  label: {
    display: "block",
    marginBottom: "10px",
    fontWeight: "bold" as const,
  },
  select: {
    width: "100%",
    padding: "8px",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
  },
  buttonContainer: {
    marginTop: "20px",
    display: "flex",
    justifyContent: "space-between",
  },
  backButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  confirmButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  popup: {
    position: "fixed" as const,
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  popupContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center" as const,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
  closeButton: {
    padding: "10px 20px",
    fontSize: "16px",
    color: "#fff",
    backgroundColor: "#007bff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "20px",
  },
};

export default OrderConfirmation;

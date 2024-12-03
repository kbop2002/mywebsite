import React from "react";

export default function AdminPortal() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h1>Clear Storage</h1>
      <button
        onClick={() => {
          localStorage.clear();
          alert("Local storage has been cleared!");
        }}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          color: "#fff",
          backgroundColor: "#FF5733",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Refresh
      </button>
    </div>
  );
}

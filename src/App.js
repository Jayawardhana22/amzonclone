import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        {/* The Header will appear on every page */}
        <Header />
        <Routes>
          {/* Route for checkout page */}
          <Route path="/checkout" element={<h1>Checkout</h1>} />

          {/* Route for login page */}
          <Route path="/login" element={<h1>Login Page</h1>} />

          {/* Default route (home page) */}
          <Route path="/" element={<h1>HOME PAGE!!!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

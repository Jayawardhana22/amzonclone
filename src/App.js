import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Route for checkout page */}
          <Route path="/checkout" element={<><Header/><h1>Checkout</h1></>} />

          {/* Route for login page */}
          <Route path="/login" element={<h1>Login Page</h1>} />

          {/* Route for home page with the Header */}
          <Route path="/" element={<><Header /><Home/><h1>HOME PAGE!!!</h1></>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

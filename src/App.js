import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route 
            path="/checkout" 
            element={
              <div>
                <h1>Checkout</h1>
              </div>
            } 
          />
          <Route 
            path="/login" 
            element={
              <div>
                <h1>Login Page</h1>
              </div>
            } 
          />
          {/* This is the default route */}
          <Route 
            path="/" 
            element={
              <div>
                <Header />
                <h1>HOME PAGE!!!</h1>
              </div>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

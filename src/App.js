import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";  
import Home from "./Home";   
import Checkout from "./Checkout";   


function App() {
  return (
    <Router>
      <div className="app">
        <Routes>  
          {/* Route for checkout page */}
          <Route path="/checkout" element={
            <>
              <Header />
           <Checkout/>
            </>
          } />

          {/* Route for login page */}
          <Route path="/login" element={<h1>Login Page</h1>} />

          {/* Route for home page */}
          <Route path="/" element={
            <>
              <Header />
              <Home />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

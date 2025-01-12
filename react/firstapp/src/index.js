import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./contact";
import About from "./About";
import Pricing from "./Pricing";
import Service from "./Service";
import Login from "./Login";
import Navbar from "./components/Navbar";
import Footeer from "./components/Footeer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/App" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
      </Routes>

      <Footeer/>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

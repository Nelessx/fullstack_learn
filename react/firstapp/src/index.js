import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./pages/contact";
import About from "./pages/About";
import Service from "./pages/Service";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footeer from "./components/Footeer";
import Testfooter from "./Testfooter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Testfooter" element={<Testfooter />} />
      </Routes>

      <Footeer />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./src/index.css";
import LoginPage from "./src/LoginPage.jsx";
import RegisterPage from "./src/RegisterPage.jsx";
import Beranda from "./src/Beranda";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/beranda" element={<Beranda />} />
    </Routes>
  </Router>
);

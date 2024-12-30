import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./utils/GlobalStyle.jsx";
import BeOnTop from "./utils/BeOnTop.jsx";
import Header from "./components/pageStructure/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import HoneysPage from "./pages/Honeys.jsx";
import Footer from "./components/pageStructure/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <BeOnTop />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/honeys/:id" element={<HoneysPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

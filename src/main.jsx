import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./helpers/GlobalStyle.jsx";
import BeOnTop from "./helpers/BeOnTop.jsx";
import Header from "./components/pageStructure/Header.jsx";
import Homepage from "./pages/Homepage.jsx";
import HoneysPage from "./pages/Honeys.jsx";
import Footer from "./components/pageStructure/Footer.jsx";
import TheModal from "./components/pageStructure/Modal.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <BeOnTop />
      <TheModal />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/honeys/:id" element={<HoneysPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./helpers/GlobalStyle.jsx";
import Homepage from "./pages/Homepage.jsx";
import Header from "./components/pageStructure/Header.jsx";
import Footer from "./components/pageStructure/Footer.jsx";
import HoneysPage from "./pages/Honeys.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/honeys/:id" element={<HoneysPage />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);

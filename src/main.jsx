import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./helpers/GlobalStyle.jsx";
import Homepage from "./pages/Homepage.jsx";
import Header from "./components/pageStructure/Header.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalStyle />
    <Header />
    <Homepage />
  </StrictMode>
);

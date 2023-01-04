import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditOffer from "@pages/EditOffer";
import OfferDetails from "./pages/OfferDetails";
import App from "./App";
import ConnexionPage from "./pages/ConnexionPage";
import CreateAccount from "./pages/CreateAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/offers/:id" element={<OfferDetails />} />
        <Route path="/connexion" element={<ConnexionPage />} />
        <Route path="/createaccount/:type" element={<CreateAccount />} />
        <Route path="/edit" element={<EditOffer />} />;
      </Routes>
    </Router>
  </React.StrictMode>
);

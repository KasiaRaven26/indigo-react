/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { WhoWeArePage } from "./pages/WhoWeAre";
import { WhatWeDo } from "./pages/WhatWeDo";
import { SignInPage } from "./pages/SignInPage";
import { RequestAccess } from "./pages/RequestAccess";
import { AuthProvider } from "./contexts/AuthContext";
import { RegisterPage } from "./pages/RegisterPage";
import { PropertiesPage } from "./pages/PropertiesPage";
import { ConsultingPage } from "./pages/ConsultingPage";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/who-we-are" element={<WhoWeArePage />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/login" element={<RequestAccess />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/consulting" element={<ConsultingPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;

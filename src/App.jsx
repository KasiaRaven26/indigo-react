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


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/request-access" element={<RequestAccess />} />
        {/* <Route path="/client">
          <Route index={true} element={<ClientHomePage />}></Route>
          <Route path="your-messages" element={<YourMessages />} />
          <Route path="cover-letter" element={<CoverLetter />} />
          <Route path="your-details" element={<YourDetails />} />
          <Route path="resume" element={<Resume />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

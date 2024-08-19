/** @format */

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
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

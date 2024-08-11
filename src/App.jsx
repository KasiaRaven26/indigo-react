/** @format */

import "./App.css";
import { Header } from "./components/ui/header";
import { Footer } from "./components/ui/footer";
import { Overlay } from "./components/ui/overlay";
function App() {
  return (
    <>
      <div className="hero">
        <div className="hero-contents">
          <Header></Header>
          <Overlay />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default App;

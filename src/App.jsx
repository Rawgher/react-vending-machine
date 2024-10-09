import { BrowserRouter, Route, Routes } from "react-router-dom";
import VendingMachine from "./components/VendingMachine";
import Snickers from "./components/Snickers";
import Pretzels from "./components/Pretzels";
import TrailMix from "./components/TrailMix";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<VendingMachine />} />
          <Route path="/snickers" element={<Snickers />} />
          <Route path="/pretzels" element={<Pretzels />} />
          <Route path="/trailmix" element={<TrailMix />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

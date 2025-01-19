import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Guide from "./pages/Guide";
import Honmen from "./pages/Honmen";
import Karimen from "./pages/Karimen";
import SetA from "./pages/SetA";
import SetB from "./pages/SetB";
import SetC from "./pages/SetC";
import SetD from "./pages/SetD";
import Illustrations from "./pages/Illustrations";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

function App() {
  return (
    <Router basename="/saitamadrivingtest">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/honmen" element={<Honmen />} />
        <Route path="/karimen" element={<Karimen />} />
        <Route path="/setA" element={<SetA />} />
        <Route path="/setB" element={<SetB />} />
        <Route path="/setC" element={<SetC />} />
        <Route path="/setD" element={<SetD />} />
        <Route path="/illustrations" element={<Illustrations />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;

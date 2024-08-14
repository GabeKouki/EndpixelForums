import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Rules from "./Pages/Rules";
import About from "./Components/Misc/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rules" element={<Rules />} />
        {/* <Route path="/wiki" element={<Wiki />} /> */}
        <Route path="/about" element={<About />} />
        {/* <Route path="/prisonsrules" element={} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./Components/Misc/About";
import Homepage from "./Pages/Homepage";
import Navbar from "./Components/Navbar";
import Rules from "./Pages/Rules";
import Team from "./Components/Misc/Team";
import Contributions from "./Pages/Contributions";
import Wiki from "./Pages/Wiki";
import WikiPrisons from "./Pages/WikiPrisons";
import FAQ from "./Components/Misc/FAQ";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/prisonsrules" element={} /> */}
        <Route path="/teams" element={<Team />} />
        <Route path="/Contributions" element={<Contributions />} />
        <Route path="/wiki/prisons" element={<WikiPrisons />} />
        <Route path="/FAQ" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

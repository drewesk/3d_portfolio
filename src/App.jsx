import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import {Home, About, Experience, Contact} from "./pages";
import Navbar from "./components/Navbar";

const App = () => {
  return (
      <main className="bg-slate-300/20">
        <Router>
            <Navbar/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/experience" element={<Experience/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        </Router>
      </main>
  );
};

export default App;

import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./layout/navbar/navbar";
import Sidebar from "./layout/sidebar/sidebar";
import StateContext from "./context/useContext";
import Homepage from "./pages/Homepage/homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import HumoCard from "./components/humoCard/HumoCard";
import HumoINside from "./components/humoInside/HumoInside";
import Munis from "./components/munis/Munis";
import Uzcard from "./components/uzcard/uzcard";
import ExampleFather from "./components/example/exampleFather";
import axios from "./apis/api";

function App() {
  const [navStretch, setnavStretch] = useState(false);
  const [navDominant, setnavDominant] = useState(false);
  return (
    <div className="App">
      <StateContext.Provider
        value={{ navStretch, setnavStretch, navDominant, setnavDominant }}
      >
        <BrowserRouter>
          <Sidebar />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/uzcard" element={<Uzcard />} />
            <Route path="/pdf" element={<ExampleFather />} />
            <Route path="/humo" element={<HumoCard />} />
            <Route path="/humo/:id" element={<HumoINside />} />
            <Route path="/munis" element={<Munis />} />
          </Routes>
        </BrowserRouter>
        <ScrollToTop className="scrollToTop" smooth />
      </StateContext.Provider>
    </div>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import "./globalStyles/styles.css";
import Card from "../src/components/Card";
import SearchedHistory from "./components/SearchedHistory";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/searched_profiles" element={<SearchedHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

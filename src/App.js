import "./styles.css";
import React from "react";
import Search from "./Search";
import axios from "axios";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Search />
    </div>
  );
}

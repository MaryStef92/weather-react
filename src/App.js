import React from "react";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
        <footer>
          This project was coded by Mariia Stefaniuk, and is{" "}
          <a
            href=" https://github.com/MaryStef92/weather-react"
            target="_blank"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;

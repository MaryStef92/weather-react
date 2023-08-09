import WeatherSearch from "./WeatherSearch";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <WeatherSearch />
      <p>
        This website was coded by Mariia Stefaniuk, and is
        <br />
        <a href=" https://github.com/MaryStef92/weather-react" target="_blank">
          open-sourced
        </a>
      </p>
    </div>
  );
}

export default App;

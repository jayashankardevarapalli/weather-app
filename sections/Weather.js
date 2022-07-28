import { React, useState } from "react";
import axios from "axios";

const Weather = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=510dcdf0d3d07d28be726e740748eb9e`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
      });
      setLocation("");
    }
  };
  return (
    <>
      <div className="container mx-auto">
        <h1 className="introheading text-center text-3xl">
          Hello World!!&nbsp;<span className="wave">👋</span>
        </h1>
        <p className="text-center my-2 text-1xl">
          Check climatic conditions of any city in this world!!
        </p>
        <div className="text-center my-5">
          <input
            type="text"
            value={location.replace(/^\s+|\s+$/gm, "")}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter the city name and press enter or send"
            className="text-center w-3/4 h-14 rounded-lg border-indigo-400 text-black"
          />
        </div>
      </div>
      {data.name != undefined && (
        <div className="container mx-auto">
          <div className="flex flex-wrap text-center justify-center">
            <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-indigo-400 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl">{data.name}</h2>
                <p className="leading-relaxed mt-1 text-1xl text-indigo-600 font-mono">
                  City Name
                </p>
              </div>
            </div>
            <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-indigo-400 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl">
                  {data.main ? <>{data.main.temp.toFixed()}°C</> : null}
                </h2>
                <p className="leading-relaxed mt-1 font-mono text-1xl text-indigo-600">
                  Temperature
                </p>
              </div>
            </div>
            <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
              <div className="border-2 border-indigo-400 px-4 py-6 rounded-lg">
                <h2 className="title-font font-medium text-3xl">
                  {data.weather ? <>{data.weather[0].main}</> : null}
                </h2>
                <p className="leading-relaxed mt-1 font-mono text-1xl text-indigo-600">
                  Atmosphere
                </p>
              </div>
            </div>
          </div>

          <div className="container px-24 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 text-center justify-center">
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  {data.main ? <>{data.main.feels_like.toFixed()}°C</> : null}
                </h2>
                <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                  Feels Like
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  {data.main ? <>{data.main.humidity}%</> : null}
                </h2>
                <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                  Humidity
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  {data.wind ? <>{data.main.temp_max.toFixed()}°C</> : null}
                </h2>
                <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                  Today Max Temperature
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  {data.wind ? <>{data.main.temp_min.toFixed()}°C</> : null}
                </h2>
                <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                  Today Min Temperature
                </p>
              </div>
              <div className="p-4 sm:w-1/4 w-1/2">
                <h2 className="title-font font-medium sm:text-4xl text-3xl">
                  {data.wind ? <>{data.wind.speed.toFixed()} MPH</> : null}
                </h2>
                <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                  Wind Speed
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Weather;

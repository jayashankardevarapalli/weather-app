import React from "react";

const Weather = () => {
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
            placeholder="Enter the city name"
            className="text-center w-3/4 h-14 rounded-lg border-indigo-400 text-black"
          />
        </div>
        <div className="flex flex-wrap text-center justify-center">
          <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-400 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl">Visakhapatnam</h2>
              <p className="leading-relaxed mt-1 text-1xl text-indigo-600 font-mono">
                City Name
              </p>
            </div>
          </div>
          <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-400 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl">22&deg;C</h2>
              <p className="leading-relaxed mt-1 font-mono text-1xl text-indigo-600">
                Temperature
              </p>
            </div>
          </div>
          <div className="p-7 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-indigo-400 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl">Cloudy</h2>
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
                22&deg;C
              </h2>
              <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                Feels Like
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">
                49%
              </h2>
              <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                Humidity
              </p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl">
                35KMPH
              </h2>
              <p className="leading-relaxed font-mono text-1xl text-indigo-600">
                Wind Speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;

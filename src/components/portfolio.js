import React from "react";
import Weather from "../assets/Portfolio/1.png";
// import SocialMedia from "../assets/Portfolio/2.png";
// import Food from "../assets/Portfolio/3.png";

function portfolio() {
  return (
    <>
      <div
        name="portfolio"
        className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <h1 className="flex justify-center items-center max-w-2xl text-4xl font-extrabold mb-5 tracking-tight leading-none   dark:text-white">
            Portfolio
          </h1>
          <p>Check out some of my work right here</p>
        </div>

        <div>
          <div>
            <img src={Weather} alt="" />
          </div>
          <div>
            <button>Demo</button>
            <button>Code</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default portfolio;

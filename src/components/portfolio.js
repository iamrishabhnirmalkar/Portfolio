import React from "react";
import Weather from "../assets/Portfolio/1.png";
import mobile from "../assets/Portfolio/2.png";
import food from "../assets/Portfolio/3.png";

function portfolio() {
  const portfolio = [
    {
      id: 1,
      src: Weather,
    },
    {
      id: 2,
      src: mobile,
    },
    {
      id: 3,
      src: food,
    },
    {
      id: 4,
      src: food,
    },
    {
      id: 5,
      src: food,
    },
    {
      id: 6,
      src: food,
    },
  ];
  return (
    <>
      <div className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-8xl text-primary-600 dark:text-primary-500 dark:text-white">
              Portfolio
            </h1>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Check Out some of my work
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolio.map(({ id, src }) => {
              return (
                <div key={id} className="space-y-4">
                  <img src={src} alt="" />
                  <div className="flex justify-center items-center ">
                    <button className="w-1/2 mr-2 bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                      Check
                    </button>
                    <button className="w-1/2 mr-2 bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded">
                      Code
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default portfolio;

import React from "react";
import mainImage from "../assets/hero.png";
import { FaArrowRightToBracket } from "react-icons/fa6";

function home() {
  return (
    <>
      <div
        name="home"
        className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
              Hello, I'm Rishabh Nirmalkar
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              a Full Stack Web Developer and Content Creater.
            </p>
            <div>
              <button className="  bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded inline-flex items-center">
                Resume
                <span className="p-2 ">
                  <FaArrowRightToBracket />
                </span>
              </button>
            </div>
          </div>
          <div className=" lg:mt-0 lg:col-span-5 lg:flex">
            <img src={mainImage} alt="main" />
          </div>
        </div>
      </div>
    </>
  );
}

export default home;

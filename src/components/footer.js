import React from "react";
import Logo from "../assets/logo.svg";

function footer() {
  return (
    <>
      <div className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023 All Rights Reserved. <br className="my-2" /> Designed And
            maintained by Rishabh Nirmalkar
          </span>
          <div className="flex justify-center items-center my-4">
            <a href="/" className="flex items-center">
              <img src={Logo} alt="" className="h-8 mr-3" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                RishCode
              </span>
            </a>
            <ul>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;

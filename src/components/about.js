import React from "react";

function about() {
  return (
    <>
      <div
        name="about"
        className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-8xl text-primary-600 dark:text-primary-500 dark:text-white">
              About
            </h1>
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              This is Rishabh Nirmalkar and i am web devloper and a digital
              marketer.
            </p>
            <br />
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel sed
              cumque quisquam labore, iure cum quia minus aliquam laboriosam
              tempora, eius, sit laudantium doloribus dolores est excepturi
              minima ipsam magni.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;

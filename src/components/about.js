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
              Hello, I'm Rishabh Nirmalkar, an experienced Social Media Manager,
              and Web Developer with expertise in Canva, Illustrator, Photoshop
              for graphic design, and WordPress for web development.
            </p>
            <br />
            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              I am a Student with experience in Mongo DB, Express JS, Node JS,
              React JS, and WordPress development. I have learned all of my
              skills through self-study and online courses. In the process of
              learning, I have developed a number of projects, which are
              showcased in my portfolio. I am also familiar with social media
              marketing, such as Facebook ads. I am a well-rounded individual
              who is always eager to learn new things.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default about;

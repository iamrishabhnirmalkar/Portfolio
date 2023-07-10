import React from "react";

function contact() {
  return (
    <>
      <div
        name="contact"
        className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700"
      >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-2xl  text-center">
          <h1 className="mb-4 text-4xl tracking-tight font-extrabold lg:text-8xl text-primary-600 dark:text-primary-500 dark:text-white">
            Contact
          </h1>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Here You can contact me for and queery
          </p>
          <form
            className="space-y-8"
            name="Contact"
            method="post"
            data-netlify="true"
            onSubmit="submit"
            action="/susse"
            data-netlify-honeypot="bot-field"
          >
            <div>
              <label
                htmlFor="Name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Rishcode"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="mail"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="xyz@email.com"
                required
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none"
                placeholder="Your Message"
              ></textarea>
            </div>
            <button className="w-1/2 mr-2 bg-purple-500 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded-lg">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default contact;

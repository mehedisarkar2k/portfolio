import React from "react";
import Classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={`${Classes.Contact} bg-dark-blue w-full mt-20 pt-20`}>
      <div className="my-container">
        <div className="title text-center">
          <h2 className=" text-white">Contact</h2>
        </div>

        <div>
          <p className="text-primary-light text-center mt-2 text-xl tracking-wide">
            Have a question or want to work together?
          </p>
          <form>
            <div className="relative mb-4 ">
              <label
                htmlFor="name"
                className="leading-7  text-primary-light text-xl"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4 ">
              <label
                htmlFor="name"
                className="leading-7 text-primary-light text-xl"
              >
                Email
              </label>
              <input
                type="email"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-primary-light text-xl"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div className="flex items-center justify-center">
              <button className="btn bg-primary-light px-8 text-xl text-white tracking-wider hover:bg-primary-dark rounded-lg">
                Send Me
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

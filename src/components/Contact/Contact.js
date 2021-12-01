import React from "react";
import Classes from "./Contact.module.css";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
init("user_4iTNkPRIOlI18bEZPuMdM");

const Contact = () => {
  // const [fieldItems, setFieldItems] = React.useState({});
  const [name, setName]=React.useState('')
  const [email, setEmail]=React.useState('')
  const [message, setMessage]=React.useState('')
 
  const handleContact = (e) => {
    e.preventDefault();
    const fieldItems = {
      name: name,
      email: email,
      message: message
    }
  //  console.log(fieldItems);
  emailjs
    .send(
      "service_r2vkaos", //service id
      "template_9a9b0xe", //template id
      fieldItems,// field object
      "user_4iTNkPRIOlI18bEZPuMdM" //user id
    )
    .then(
      function (response) {
        Swal.fire("Good job!", "Thanks for your message!", "success");
      },
      function (error) {
        Swal.fire("Sorry!", "Something went wrong!Try again", "error");
      }
    );
    e.target.reset();
}

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
          <form onSubmit={handleContact}>
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
                onChange={(e) => setName(e.target.value)}
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
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="btn bg-primary-light px-8 text-xl text-white tracking-wider hover:bg-primary-dark rounded-lg"
              >
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

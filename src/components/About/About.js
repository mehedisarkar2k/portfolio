import React from "react";
import Progress from "../Progress/Progress";
import Underline from "../Underline/Underline";

const About = () => {
  return (
    <div className="w-full">
      <div className="my-container">
        <div className="text-center">
          <h1>About</h1>
          <Underline />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center">
          <div className="flex flex-col space-y-2 px-5 justify-center items-center">
            <div className="overflow-hidden w-72 h-72 mb-3 rounded-full transition">
              <img
                className="object-cover w-full h-full rounded-full transform hover:scale-110 transition"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
                alt=""
              />
            </div>

            <div>
              <h3 className="text-center">Who I am?</h3>
              <Underline />
              <p className="text-gray">
                I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have
                serious passion for UI effects, animations and creating
                intuitive, dynamic user experiences.
              </p>
            </div>
          </div>
          <div className="w-full px-10">
            <Progress title="React" percentage="15" />
            <Progress title="css" percentage="2" />
            <Progress title="JS" percentage="60" />
            <Progress title="css" percentage="100" />
            <Progress title="PHP" percentage="25" />
            <Progress title="C" percentage="90" />
            <Progress title="C++" percentage="80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

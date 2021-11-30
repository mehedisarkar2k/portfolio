import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={Classes.Banner}>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="my-container text-center">
          <h1 className="text-white">
            Hello, I'm{" "}
            <span className="text-secondary">Mehedi Hasan Sarkar</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mt-2 text-white capitalize">
            I'm Full Stack Web Developer
          </p>

          <button className="btn mt-4">
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

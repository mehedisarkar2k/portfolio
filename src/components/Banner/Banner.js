import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Classes from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={Classes.Banner}>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="my-container text-center">
          <h1 className="text-white">
            Hello, I'm <span className="text-secondary">Mehedi Sarkar</span>
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mt-2 text-white capitalize">
            I'm Full Stack Web Developer
          </p>

          <div className="flex items-center justify-center">
            <button
              className={`${Classes.Btn} btn mt-4 flex items-center justify-center space-x-2 text-white border border-white tracking-widest hover:bg-primary-dark hover:border-primary-dark transition-all duration-500`}
            >
              <span>View my work</span>
              <AiOutlineArrowRight
                className={`${Classes.BtnArrow} transform scale-x-150`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

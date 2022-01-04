import React, { useState } from "react";
import style from "./project.module.css";
import ProjectModel from "./ProjectModel";

const SingleProjects = ({ project }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const { img, name, tech } = project;
  return (
    <div className={`${style.singleProjectContainer} `}>
      <div className={style.imgContainer}>
        <img className="w-full h-full " src={img} alt="" />
      </div>
      <div
        className={`${style.overLayDiv} text-center justify-center items-center`}
      >
        <div>
          <h3 className="text-white">{name}</h3>
          <h5 className="text-secondary">{tech}</h5>
          <button
            type="button"
            onClick={openModal}
            className="text-white btn border-secondary border-2 my-5 py-2 hover:bg-secondary hover:text-white transition delay-75"
          >
            Open dialog
            <ProjectModel
              isOpen={isOpen}
              closeModal={closeModal}
              project={project}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProjects;

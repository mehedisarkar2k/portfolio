import React, { useEffect, useState } from "react";
import Underline from "../Underline/Underline";
import SingleProjects from "./SingleProjects";

const Project = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  return (
    <div style={{ background: "#D3D3D3", width: "100%" }}>
      <div className="my-container">
        <h1 className="text-center">PROJECTS</h1>
        <Underline />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <SingleProjects project={project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

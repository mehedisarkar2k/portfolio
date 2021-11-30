import React from 'react';
import project1 from '../../assets/projects/project-1.jpg';
import project2 from '../../assets/projects/project-2.jpg';
import project3 from '../../assets/projects/project-3.jpg';
import project4 from '../../assets/projects/project-4.jpg';
import project5 from '../../assets/projects/project-5.jpg';
import project6 from '../../assets/projects/project-6.jpg';
import project7 from '../../assets/projects/project-7.jpg';
import project8 from '../../assets/projects/project-8.jpg';
import project9 from '../../assets/projects/project-9.jpg';
import Underline from '../Underline/Underline';
import SingleProjects from './SingleProjects';
const Project = () => {
    return (
        <div className="my-container">
            <h1 className="text-center">PROJECTS</h1>
            <Underline/>
            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3">
                <SingleProjects img={project1}/>
                <SingleProjects img={project2}/>
                <SingleProjects img={project3}/>
                <SingleProjects img={project4}/>
                <SingleProjects img={project5}/>
                <SingleProjects img={project6}/>
                <SingleProjects img={project7}/>
                <SingleProjects img={project8}/>
                <SingleProjects img={project9}/>
            </div>
        </div>
    );
};

export default Project;
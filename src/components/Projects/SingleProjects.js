import React from 'react';
import style from './project.module.css';
const SingleProjects = ({img , name , tech}) => {
    return (
        <div className={`${style.singleProjectContainer}`}>
            <div className={style.imgContainer}>
                <img className="w-full h-full" src={img} alt="" />
            </div>
        <div className={`${style.overLaydiv}`}>
                
            </div>
        </div>
    );
};

export default SingleProjects;
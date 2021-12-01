import React from 'react';

const SingleBlog = ({blog}) => {
    const {title ,  text , img,date} = blog
    return (
        <div>
            <div className="h-52 w-full ">
            <img src={img} className="w-full h-full" alt="" />
            </div>
            <h4 className="my-3 text-gray">{title}</h4>
            <p className="text-sm text-gray">{date}</p>
            <div className=" my-3  bg-primary w-16" style={{padding:'1px'}}>

            </div>
            <p className="text-sm text-gray ">{text}</p>
        </div>
    );
};

export default SingleBlog;
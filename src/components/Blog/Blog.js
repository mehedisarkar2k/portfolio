import React, { useEffect, useState } from 'react';
import Underline from '../Underline/Underline';
import SingleBlog from './SingleBlog';

const Blog = () => {
    const [blogs , setBlogs] = useState([])
    useEffect(() => {
        fetch('./blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    } , [])
    return (
        <div className="my-container">
            <h1 className="text-center">BLOG</h1>
           <Underline/>
           <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 my-16">
               {
               blogs.map(blog => <SingleBlog blog={blog}/> )
           }
           </div>
        </div>
    );
};

export default Blog;
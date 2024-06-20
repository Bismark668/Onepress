import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get('`${process.env.REACT_APP_API_URL`'); 
          console.log(response.data);
          if (Array.isArray(response.data.data)) {
            setBlogs(response.data.data);
          } else {
            console.error('Unexpected response format:', response.data);
          }
        } catch (error) {
          console.error('Error fetching the blogs', error);
        }
      };
  
      fetchBlogs();
    }, []);

  return (
    <div className='w-full bg-[#E0E6EB] min-h-[100vh] py-[20px]'>
        <div className="mx-auto max-w-[1240px]">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black">

                {Array.isArray(blogs) && blogs.length > 0 ? (
                    blogs.map((blog) => (
                        <Link to={`/blogscontent/${blog.id}`}>
                            <div className="bg-white rounded-lg overflow-hidden drop-shadow-md">
                                <img className='h-60 w-full object-cover'  src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`}   alt="thumbmail" />
                                <div className="p-8">
                                    <h3 className="my-1 font-bold text-2xl">
                                        {blog.attributes.blogTittle}
                                    </h3>
                                    <p className="text-gray-600 tesxt-xl">
                                    {blog.attributes.blogDesc}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className='text-center font-bold '>Loading  blogs .......</p>
                )}             
            </div>
        </div>  
    </div>
  )
}

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Profile from '../assets/profile.jpg'
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';





export const Blogcontent = () => {
  
    const { id } = useParams();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
      const fetchBlogs = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}`);
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
  

    
    let blog={}
    if(blog){
      let array = blogs.filter(blog => blog.id ==id)
      blog = array[0]
    }else{
      blog ={}
    }

    if (!blog || !blog.attributes) {
      return <div>Error: Blog data is not available.</div>;
    }

    const { blogTittle, blogContent  } = blog.attributes;

  
  return (
    <div className='w-full pt-[120px] pb-10 bg-slate-300 '>
        <div className="fixed z-10 mx-4 px-2 py-1 hidden md:flex ">
          <Link to={'/blogs'}>
          <button className='border-2 px-4 py-3 bg-white cursor-pointer'><IoReturnUpBackOutline />
          </button>
          </Link>
        </div>
        <div className="max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 p-4 sm:pt-1 md:mt-0 ss:pt-10 text-black ">
                <div className="col-span-2 px-1 gap-8 min-h-[100vh]">
                    <img className='h-150 w-full object-cover rounded-md'  src={`http://localhost:1337${blog.attributes.coverImg.data.attributes.url}`} alt="coverimg" />
                     <h2 className='font-bold text-2xl my-1 pt-5 '> {blog.attributes.blogTittle}</h2>
                  <div className='pt-5'><ReactMarkdown className='line-brake' >{blog.attributes.blogContent}</ReactMarkdown></div>
                </div> 

                 <div className="bg-white hidden sm:grid w-full round-lg drop-shadow-md py-2 max-h-[300px] overflow-hidden bg-gray-300">
                    <h1 className='font-bold font-sans  text-center uppercase italic pb-3 '>Writer</h1>
                    <div>
                        <img className='w-40 h-40 rounded-full mx-auto object-cover' src={Profile}  />
                        <h2 className='font-bold  text-center text-gray-600 pt-1'>Bismark Arthur</h2>
                        <p className='font-medium  text-center text-gray-500 pt-1'>Softaware Developer/Digital Marketer</p>
                    </div>                    
                </div>                              
            </div>
        </div>
    </div>
  )
}

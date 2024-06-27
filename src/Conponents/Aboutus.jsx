import React from 'react';
import Featured from '../assets/aboutimg.jpg'

const Aboutus = () => {
  return (
    <div className="flex flex-col md:flex-row min-h-[100vh] w-full items-center p-3">
      <div className="w-full h-full">
            <img 
            src={Featured} 
            alt="Featured" 
            className="rounded-lg shadow-lg object-cover h-full w-full"
            />
      </div>
      <div className="w-full  md:w-1/2 md:ml-8 p-2">
            <h1 className="text-3xl font-bold mb-4 pt-2 text-center">About Us</h1>
            <p className="text-lg mb-4">
            Welcome to our blog site, your ultimate source for insightful articles, thought-provoking content, and the latest trends in various domains. Our mission is to inform, inspire, and ignite curiosity in our readers. We believe in the power of words to change perspectives, challenge norms, and create a community of like-minded individuals who are passionate about continuous learning and growth.
            </p>
            <p className="text-lg">
            Our aim is to provide a platform where writers and readers can connect, share ideas, and foster a culture of open-mindedness and intellectual exploration. We are committed to delivering high-quality content that is not only engaging but also enriches the mind and soul. Join us on this journey as we delve into diverse topics, from technology and science to arts and humanities, and everything in between.
            </p>
      </div>
    </div>
  );
};

export default Aboutus;

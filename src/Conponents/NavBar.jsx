import React from 'react'
import logo from '../assets/onepresslogo.png'
import { MdSearch } from "react-icons/md";
import menu from '../assets/menuicon.png'
import close from '../assets/closeicon.png'
import { useState } from 'react';

export const NavBar = () => {
    const [openMenu , setOpenmenu]=useState(false)
  return (
    <>
        <div className='  w-full h-[85px] z-10 bg-white fixed drop-shadow'>
            <div className="  items-center w-full h-full flex justify-between md:max-w[1240px]">
                <div className="flex item-start  h-[85px] pt-5  ">
                    <a href="/"><img src={logo} alt="logo" className=' w-[200px] object-cover h-full xs:ml-10 '/></a>
                </div>

                <div className="flex items-center">
                    <ul className='hidden md:flex'>
                        <a href="/"><li><h3>Home</h3></li></a>
                        <a href="/about"><li><h3>About</h3></li></a>
                        <a href="/blogs"><li><h3>Blogs</h3></li></a>
                    </ul>
                </div>

                <div className="hidden md:flex  items-center border-2 px-6 py-2 gap-2  ">
                    <input  className='hidden md:flex outline-none bg-transparent rounded-xl   p-1   ' type="text" placeholder='search blogs'  />
                    <MdSearch />
                </div>

                <div className="md:hidden flex" onClick={() =>setOpenmenu(!openMenu)}>
                 <img src={!openMenu?menu:close} alt="menu/close" className='object-contain mr-5 w-[30px] h-[30px]' />
                </div>

                
            </div>

            <ul className={openMenu? "absolute bg-white w-full pl-4 md:hidden":"hidden"}>
                <div className="flex items-center p-2 bg-neutral-300 gap-3 mr-4 justify-center rounded-xl">
                    <MdSearch />
                    <input  className='flex w-full  outline-none p-1 bg-transparent   ' type="text" placeholder='search blogs'  />
                    
                </div>

                <a href="/"><li><h3>Home</h3></li></a>
                <a href="/about"><li><h3>About</h3></li></a>
                <a href="/blogs"><li><h3>Blogs</h3></li></a>    
            </ul>
        </div>
    </>
    
  )
}

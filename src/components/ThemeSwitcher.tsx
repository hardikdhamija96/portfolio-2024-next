'use client'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTheme } from 'next-themes';
import { useState } from 'react';

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    const [showThemes, setShowThemes] =useState()
    // const obj = useTheme();
    // console.log({obj});

    const themeArray = ["gray","blue","dark","light"];

    function changeTheme(){
      let curr_ind = themeArray.indexOf(theme || "dark");
      setTheme(themeArray[(curr_ind+1)%4]);
    }
    
  return (
    <div className='flex flex-row w-full justify-center items-center py-10 gap-6 relative' >
        
        <Icon  className="text-headingColor text-[3.6rem] cursor-pointer animate-[spin_18s_linear_infinite]" icon="jam:brightness" onClick={changeTheme}></Icon>
        
        <div className='flex flex-row items-center sm:gap-2 gap-4 py-1 px-3 rounded-lg'>
            <div onClick={()=>setTheme("gray")} className={`size-6 bg-gray-500 rounded-full cursor-pointer ${theme === "gray" ? 'ring-1 ring-white':''}`} ></div>
            <div onClick={()=>setTheme("blue")}  className={`size-6 bg-blue-700 rounded-full cursor-pointer ${theme === "blue" ? 'ring-1 ring-white':''}`}></div>
            <div onClick={()=>setTheme("dark")} className={`size-6 bg-gray-950 rounded-full cursor-pointer ${theme === "dark" ? 'ring-1 ring-white':''}`}></div>
            <div onClick={()=>setTheme("light")} className={`size-6 bg-gray-100 rounded-full cursor-pointer ${theme === "light" ? 'ring-1 ring-black':''}`}></div>
        </div>
    </div>
  )
}

export default ThemeSwitcher
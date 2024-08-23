import React, { useState } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'
import { useTheme } from 'next-themes';

const ThemeSwitcher = () => {
    const {theme, setTheme} = useTheme();
    
  return (
    <div className='flex flex-row w-full justify-center items-center py-10 gap-6' >
        <Icon className="text-headingColor text-[3.2rem] cursor-pointer" icon="jam:brightness" />
        <div className='flex flex-row items-center gap-2 py-1 px-3 rounded-lg'>
            <div onClick={()=>setTheme("gray")} className={`size-6 bg-gray-500 rounded-full cursor-pointer ${theme === "gray" ? 'ring-1 ring-white':''}`} ></div>
            <div onClick={()=>setTheme("blue")}  className={`size-6 bg-blue-700 rounded-full cursor-pointer ${theme === "blue" ? 'ring-1 ring-gray-800':''}`}></div>
            <div onClick={()=>setTheme("white")} className={`size-6 bg-gray-950 rounded-full cursor-pointer ${theme === "dark" ? 'ring-1 ring-white':''}`}></div>
            <div onClick={()=>setTheme("default")} className={`size-6 bg-gray-100 rounded-full cursor-pointer ${theme === "light" ? 'ring-1 ring-black':''}`}></div>
        </div>
    </div>
  )
}

export default ThemeSwitcher
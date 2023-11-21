import React from 'react'
import { BsSun} from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

export const Navbar = ({setIsDark, isDark}) => {
  const darktheme = isDark ? 'bg-slate-800 text-white': 'bg-white text-slate-950' ;
  
  return (
    <div className={` ${darktheme} duration-700 transition-all px-12 py-6 flex justify-between shadow-xl shadow-gray-40`}>
      <h1 className=' text-xl font-bold '>Where in the world?</h1>
      <button className=' flex items-center justify-between font-medium'
      onClick={(e)=>{
        e.preventDefault();
        setIsDark(preval=> !preval)
      }}>
        { isDark? <BsSun/> : <BsMoon/>}
        <span className=' ml-2'>{isDark?'light mode': 'dark mode'}</span>
      </button>
    </div>
  )
}



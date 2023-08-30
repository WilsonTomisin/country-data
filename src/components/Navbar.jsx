import React from 'react'
import { BsSun} from 'react-icons/bs'
import { BsMoon } from 'react-icons/bs'

export const Navbar = ({setIsDark, isDark}) => {
  const darktheme = isDark ? 'bg-slate-700': 'bg-white' ;
  return (
    <div className={` ${darktheme} px-12 py-6 flex justify-between shadow-xl shadow-gray-40`}>
      <h1 className=' text-xl font-bold '>Where in the world?</h1>
      <button className=' flex items-center justify-between'
      onClick={(e)=>{
        e.preventDefault();
        setIsDark(preval=> !preval)
      }}>
        <BsMoon/>
        <span>Dark mode</span>
      </button>
    </div>
  )
}



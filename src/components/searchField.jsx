import React from 'react';
import {BiSearch} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { ByContinents } from './ByContinents'
import { Feed } from './Feed'
import '../styles/search.css'

export const SearchField = ({isDark, setContinent, data}) => {
    const darktheme = isDark ? 'bg-slate-800 text-white': 'bg-white text-slate-950';
    const darktheme2 = isDark ? 'bg-slate-700': 'bg-slate-100';

    const [searchTerm, setsearchTerm] = React.useState("")
    
    const navigate = useNavigate();
    const handleClick=()=>{
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }


  
  return (
    <div className=' p-12 flex items-center flex-col md:flex-row justify-between'>
      <div className=' flex items-center'>
        <BiSearch className={` relative left-9 -top-2  md:top-0 text-2xl ${darktheme}`}/>
        <input type="search" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} placeholder='search for a country...' className={` ${darktheme} search-field py-4 pl-14 pr-40 rounded-lg shadow-slate-600 shadow-md mb-5 md:mb-0`} />
        <span onClick={handleClick}
        className={` ${darktheme2} px-2 py-1 relative left-3/4 -top-10 md:-left-12 md:top-0 find-btn cursor-pointer`}>
            find
        </span>
      </div>
      <div>
        <select onChange={(e)=>setContinent(e.currentTarget.value)} className={` ${darktheme} p-4 shadow-slate-600 shadow-md rounded-lg font-semibold`}>
            <option value="" selected disabled>Filter by region</option>
            <option value="Africa">
              Africa
            </option>
            <option value="Asia">
              Asia
            </option>
            <option value="Caribbean">
              Caribbean
            </option>
            <option value="Central America">
              Central America
            </option>
            <option value="Europe">
              Europe
            </option>
            <option value="Northern America">
              Northern America
            </option>
            <option value="Oceania">
              Oceania
            </option>
            <option value="South America">
              South America
            </option>
            
          </select>
        
      </div>
    
    </div>
  )
}



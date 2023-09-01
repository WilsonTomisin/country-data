import React from 'react'
import {BiSearch} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import '../styles/search.css'

export const SearchField = ({isDark}) => {
    const darktheme = isDark ? 'bg-slate-800 text-white': 'bg-white text-slate-950';
    const darktheme2 = isDark ? 'bg-slate-700': 'bg-slate-100';

    const [searchTerm, setsearchTerm] = React.useState("")
    const [ continent, setContinent] = React.useState('')
    const navigate = useNavigate();
    const handleClick=()=>{
        if (searchTerm) {
            navigate(`/search/${searchTerm}`)
        }
    }
    console.log(continent)
  return (
    <div className=' p-12 flex items-center justify-between'>
      <div className=''>
        <BiSearch className={` relative left-2 top-10 text-2xl ${darktheme}`}/>
        <input type="search" value={searchTerm} onChange={(e)=>setsearchTerm(e.target.value)} placeholder='search for a country...' className={` ${darktheme} search-field py-4 pl-14 pr-40 rounded-lg shadow-slate-600 shadow-md`} />
        <span onClick={handleClick}
        className={` ${darktheme2} py-2 px-1 relative right-10 find-btn cursor-pointer`}>
            find
        </span>
      </div>
      <div>
        <select onClick={(e)=>setContinent(e.currentTarget.value)} className={` ${darktheme} p-4 shadow-slate-600 shadow-md text-white rounded-lg font-semibold`}>
            <option value="" selected disabled>Filter by region</option>
            <option value="africa">Africa</option>
            <option value="australia">Australia</option>
            <option value="europe">Europe</option>
            <option value="south-america">South America</option>
            <option value="north-america">North America</option>
            <option value="asia">Asia</option>
            
        </select>
      </div>
    </div>
  )
}



import React from 'react';
import datasets from '../constants/data.json';
import { Link } from 'react-router-dom';
import { SearchField } from './searchField'
import { useParams } from 'react-router-dom';


export const ByContinents = ({isDark}) => {
    
    const { continent } = useParams()
    const [data, setdata] = React.useState(datasets.filter(item => item.region.toLowerCase() == continent.toLowerCase()))
    

    const darktheme = isDark ? ' bg-slate-800 text-white' : 'bg-white text-slate-950'
  return (

    <>
        <SearchField isDark={isDark}/>
        <div className=' p-12 grid grid-cols-4 gap-8'>
            {data.map((item,index)=>{
                return(
                    
                    <div key={index} className={` ${darktheme} duration-700 transition-colors h-auto w-auto rounded-lg  shadow-slate-500 hover:shadow-xl `}>
                        <Link to={`/country/${item.name}`}>
                            <img src={item.flags.png} alt={item.name + 'flag'} className=' h-1/2 w-full rounded-t-lg' />
                            <div className=' px-8 py-5 '>
                                <h1 className=' text-2xl font-bold pb-5'>{item.name}</h1>
                                <div className=' font-semibold'>Population: 
                                    <span className=' text-slate-500 font-normal'> {item.population.toLocaleString()} </span>
                                </div>
                                <div className=' font-semibold'>Region: 
                                    <span className=' text-slate-500 font-normal'> {item.region} </span> 
                                </div>
                                <div className=' font-semibold'>Capital: 
                                    <span className=' text-slate-500 font-normal'> {item.capital} </span>  
                                </div>
                                
                            </div>
                        </Link>

                    </div>
                )
            })}
        </div>
    </>
    
  )
}

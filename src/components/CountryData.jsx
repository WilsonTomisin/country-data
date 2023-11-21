import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import datasets from '../constants/data.json';
import { BsArrowLeft} from 'react-icons/bs'

export const CountryData = ({isDark}) => {
    const {name} = useParams();
    const navigate = useNavigate()
    const [countryData, setCountryData] = React.useState( datasets.filter( item => item.name == name))
    const [ { population, nativeName,capital, region,subregion,currencies, languages, borders, topLevelDomain, flags }] = countryData
    React.useEffect(()=> console.log(countryData),[])

    const darktheme = isDark ? ' bg-slate-900 text-white' : 'bg-slate-100 text-slate-950'
    const darktheme2 = isDark ? ' bg-slate-800 text-white' : 'bg-white text-slate-950'
    return (
    <div className={`${darktheme} duration-700 transition-colors`}>
        <button onClick={()=> navigate('/')}
        className={` ${darktheme2} ml-12 mt-12 rounded-lg shadow-md shadow-slate-400 px-6 py-2 font-semibold flex justify-between items-center`}>
            <span className=' font-extrabold text-xl'> <BsArrowLeft/> </span>
            Back
        </button>
      <div className=' flex flex-col md:flex-row items-start md:items-center justify-between p-6 md:p-12'>
        <div className='  mt-12 w-full md:w-1/2 h-auto pr-10'>
            <img src={flags.png} alt={name+' flag'} className=' w-full'/>
        </div>
        <div className=' mt-12 w-1/2 h-auto'>
            <h1 className='  text-3xl mb-5 font-bold '>{name}</h1>
            <div className=' grid grid-cols-1 md:grid-rows-5 md:grid-flow-col gap-4 '>
                <p className=' font-semibold'>
                    Native name: <span className=' text-slate-600 font-medium'> {nativeName}</span>
                </p>
                <p className=' font-semibold'>
                    Population: <span className=' text-slate-600 font-medium'> {population.toLocaleString()} </span>
                </p>
                <p className=' font-semibold'>
                    Region: <span className=' text-slate-600 font-medium'> {region}</span>
                </p>
                <p className=' font-semibold'>
                    Sub-region: <span className=' text-slate-600 font-medium'> {subregion} </span>
                </p>
                <p className=' font-semibold'>
                    Capital: <span className=' text-slate-600 font-medium'>{capital}</span>
                </p>
                <p className=' font-semibold'>
                    Top level Domain: <span className=' text-slate-600 font-medium'>{topLevelDomain}</span>
                </p>
                <p className=' font-semibold'>
                    Currencies: <span className=' text-slate-600 font-medium'>{currencies[0].name}</span>
                </p>
                <p className=' font-semibold'>
                    Languages: <span className=' text-slate-600 font-medium'>
                        {languages.map((item,index)=>(<span key={index}>{item.name} ,</span>))}
                    </span>
                </p>
            </div>
            <div className=' mt-11'>
                <span className=' font-semibold'>Border countries:</span>
                <div className=' grid grid-cols-1 md:grid-flow-col gap-2'>
                    { borders ? borders.map((item,index)=>(
                        
                        <span key={index} className=' mr-2 px-6 shadow-lg py-2 rounded-lg font-semibold '>
                            {item}
                        </span>
                    
                )) : <span> no bordering country</span>}
                </div>
                
            </div>
        </div>
      </div>
    </div>
  )
}



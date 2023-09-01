import React from 'react';
import { useParams } from 'react-router-dom';
import datasets from '../constants/data.json';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeft} from 'react-icons/bs';

export const SearchedCountry = () => {
    const {searchedterm} = useParams();
    const [searchedCountry, setsearchedCountry] = React.useState(datasets.filter(item=> item.name.toLowerCase() === searchedterm.toLowerCase()))
    const navigate = useNavigate();
    const [ { name,population, nativeName,capital, region,subregion,currencies, languages, borders, topLevelDomain, flags }] = searchedCountry
    // React.useEffect(()=> console.log(countryData),[])
    return (
    <>
        <button onClick={()=> navigate('/')}
        className='ml-12 mt-12 bg-white rounded-lg shadow-md shadow-slate-400 px-6 py-2 font-semibold flex justify-between'>
            <span className=' font-extrabold text-xl'> <BsArrowLeft/> </span>
            Back
        </button>
      <div className=' flex items-center justify-between p-12'>
        <div className='  mt-12 w-1/2 h-auto pr-10'>
            <img src={flags.png} alt={name+' flag'} className=' w-full '/>
        </div>
        <div className=' mt-12 w-1/2 h-auto'>
            <h1 className='  text-3xl mb-5 font-bold text-slate-950'>{name}</h1>
            <div className=' grid grid-rows-5 grid-flow-col gap-4'>
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
                        {languages.map(item=>(<>{item.name} ,</>))}
                    </span>
                </p>
            </div>
            <div className=' mt-11'>
                <span className=' font-semibold'>Border countries:</span>
                <div className=' grid grid-rows-3 grid-flow-col gap-2'>
                    { borders ? borders.map((item,index)=>(
                        
                        <span key={index} className=' bg-white mr-2 px-6 shadow-lg shadow-slate-300 py-2 rounded-lg font-semibold '>
                            {item}
                        </span>
                    
                )) : <span> no border country</span>}
                </div>
                
            </div>
        </div>
      </div>
    </>
    
    
  )
}



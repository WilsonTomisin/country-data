import React from 'react'
import { useParams } from 'react-router-dom'
import datasets from '../constants/data.json';

export const CountryData = () => {
    const {name} = useParams();
    const [countryData, setCountryData] = React.useState( datasets.filter( item => item.name == name))

    const [ { population, nativeName,capital, region,subregion,currencies }] = countryData
    React.useEffect(()=> console.log(countryData),[])
    return (
    <>
      <div className=' flex items-center justify-between'>
        <div>
            <img src={countryData} alt="" srcset="" />
        </div>
        <div>
            details
        </div>
      </div>
    </>
  )
}



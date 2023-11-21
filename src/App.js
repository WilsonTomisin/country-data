import React from 'react'
import { Navbar } from './components/Navbar'
import { ByContinents } from './components/ByContinents';
import { Feed } from './components/Feed';
import { Routes,Route } from 'react-router-dom';
import { CountryData } from './components/CountryData';
import { SearchedCountry } from './components/SearchedCountry';


const App = () => {
  const [isDark, setIsDark] = React.useState(false);
  const darktheme = isDark? 'bg-slate-900': 'bg-slate-100';
  return (
    <div className={` ${darktheme} h-auto w-auto duration-700 transition-colors`}>
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
      
      <Routes>
        <Route path='/'  element={<Feed isDark={isDark}/>} />
        <Route path='/country/:name'  element={<CountryData isDark={isDark}/>} />
        <Route path='/search/:searchedterm'  element={<SearchedCountry isDark={isDark}/>} />
        
      </Routes>
    </div>
  )
}

export default App

import React from 'react'
import { Navbar } from './components/Navbar'

import { Feed } from './components/Feed';
import { Routes,Route } from 'react-router-dom';
import { CountryData } from './components/CountryData';


const App = () => {
  const [isDark, setIsDark] = React.useState(false);
  const darktheme = isDark? 'bg-slate-900': 'bg-slate-100';
  return (
    <div className={` ${darktheme} h-auto w-full duration-700 transition-colors bg-sla`}>
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
      
      <Routes>
        <Route path='/'  element={<Feed isDark={isDark}/>} />
        <Route path='/country/:name'  element={<CountryData/>} />
      </Routes>
    </div>
  )
}

export default App

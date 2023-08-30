import React from 'react'
import { Navbar } from './components/Navbar'

const App = () => {
  const [isDark, setIsDark] = React.useState(false);

  const darktheme = isDark? 'bg-slate-950': 'bg-slate-200';
  return (
    <div className={` ${darktheme} h-screen w-full duration-700 transition-colors`}>
      <Navbar setIsDark={setIsDark} isDark={isDark}/>
      
    </div>
  )
}

export default App

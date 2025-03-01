import { useEffect, useState } from 'react'

export const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(true);
    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
        }else{
            document.documentElement.classList.remove('dark');
        }
    },[darkMode])
  return (
    <button
        onClick={() => setDarkMode(!darkMode)}
        className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
    >
        {darkMode ? '🌞' : '🌙'}
    </button>
  )
}

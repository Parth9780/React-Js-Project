import React, { useContext } from 'react'
import { FaMoon } from 'react-icons/fa'
import { ThemeContext } from '../context/ThemeContextProvider'
import { AiFillSun } from "react-icons/ai";

const Navbar = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
    return (
        <>
        <div className='bg-gray-100 text-gray-900 border-b border-gray-300 p-4 flex justify-between items-center dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
            <h1>Dashboard</h1>
            <button className='text-2xl text-dark' onClick={toggleTheme}>
                {theme === "light" ? <FaMoon /> : <AiFillSun /> }
            </button>
        </div>
        </>
    )
}



export default Navbar
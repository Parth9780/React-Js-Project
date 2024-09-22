import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Dash from './Dash'
import ThemeContextProvider from '../context/ThemeContextProvider'
const Dashbord = () => {
    return (
        <>
            <ThemeContextProvider>
                <div className="flex">
                    <Sidebar />
                    <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
                        <Navbar />
                        <div>
                            <Dash />
                        </div>
                    </div>
                </div>
            </ThemeContextProvider>
        </>
    )
}

export default Dashbord
import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../Dashbord/Sidebar'
import Navbar from '../Dashbord/Navbar'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Swal from 'sweetalert2'
import axios from 'axios'


const AddCategory = () => {
    // take a reference using hooks useRef
    const categoryname = useRef("");
    const added_date = useRef("");

    // create a formHandeler
    const AddCategoryHandeler = (e) => {
        e.preventDefault();
        var insert = {
            categoryname: categoryname.current.value,
            added_date: added_date.current.value
        }

        // take a api or call a api for insert data
        axios.post(`http://localhost:8000/category`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Woe",
                text: "Thanks for added your category",
                icon: "success"
            });
        });
        e.target.reset();
    }
    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />
                <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white'>
                    <Navbar />
                    <div className='w-full'>
                        <div className='w-7/12 shadow-2xl p-24 mt-20 mx-auto'>
                            <h1 className='text-4xl text-center pb-3'>Add Category here</h1>
                            <div className='py-10'>
                                <form onSubmit={AddCategoryHandeler}>
                                    <div className='w-full items-center dark:text-gray-900'>
                                        <input type="text" ref={categoryname} placeholder='Enter Category Name *' className='w-full rounded-md text-lg p-3' />
                                    </div>
                                    <div className='w-full items-center dark:text-gray-900 mt-7'>
                                        <input type="date" ref={added_date} placeholder='Enter Date *' className='w-full rounded-md text-lg p-3' />
                                    </div>
                                    <div className='mt-10 text-end'>
                                        <button className='border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white'>Add Category</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeContextProvider>
    )
}

export default AddCategory
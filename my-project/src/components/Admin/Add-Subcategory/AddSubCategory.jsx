import React, { useRef, useState, useEffect } from 'react'
import Sidebar from '../Dashbord/Sidebar'
import Navbar from '../Dashbord/Navbar'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Swal from 'sweetalert2'
import axios from 'axios'

export const AddSubCategory = () => {
    //using useEffect fetch a category inside of subcategory in dropdown http://localhost:8000/addcategory
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/category`).then((response) => {
            setData(response.data);
        })
    }, []);

    const categoryname = useRef("");
    const subcategoryname = useRef("");
    const added_date = useRef("");

    // create a formHandeler
    const AddSubCategoryHandeler = (e) => {
        e.preventDefault();
        var insert = {
            categoryname: categoryname.current.value,
            subcategoryname: subcategoryname.current.value,
            added_date: added_date.current.value
        }

        // take a api or call a api for insert data
        axios.post(`http://localhost:8000/subCategory`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Woe",
                text: "Thanks for added your Subcategory",
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
                                <form onSubmit={AddSubCategoryHandeler}>
                                    <div className='w-full items-center dark:text-gray-900'>
                                        <select ref={categoryname} placeholder='Enter CategoryName *' className='w-full p-3 rounded-md text-lg bg-gray-100'>
                                            <option value="">-select category-</option>
                                            {data && data.map((item) => {
                                                return (
                                                    <>
                                                        <option value={item.categoryname}>{item.categoryname} </option>
                                                    </>
                                                )
                                            })}
                                        </select>

                                    </div>
                                    <div className='w-full items-center dark:text-gray-900 mt-7'>
                                        <input type="text" ref={subcategoryname} placeholder='Enter SubCategory Name *' className='w-full rounded-md text-lg p-3' />
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


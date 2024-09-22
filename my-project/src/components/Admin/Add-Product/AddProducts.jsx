import React, { useState, useEffect, useRef } from 'react'
import Sidebar from '../Dashbord/Sidebar'
import Navbar from '../Dashbord/Navbar'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Swal from 'sweetalert2'
import axios from 'axios'

export const AddProducts = () => {
    const [category, setCategory] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/category`).then((response) => {
            setCategory(response.data);
        })
    }, []);

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8000/subCategory`).then((response) => {
            setData(response.data);
        })
    }, []);

    // take a reference using hooks useRef
    const categoryname = useRef("");
    const subcategoryname = useRef("");
    const productname = useRef("");
    const image = useRef("");
    const oldprice = useRef("");
    const offerprice = useRef("");
    const qty = useRef("");
    const descriptions = useRef("");
    const added_date = useRef("");
    // create a formHandeler
    const AddProductsHandeler = (e) => {
        e.preventDefault();
        var insert = {
            categoryname: categoryname.current.value,
            subcategoryname: subcategoryname.current.value,
            productname: productname.current.value,
            image: image.current.value,
            oldprice: oldprice.current.value,
            offerprice: offerprice.current.value,
            qty: qty.current.value,
            added_date: added_date.current.value,
            descriptions: descriptions.current.value
        }
        // take a api or call a api for insert data
        axios.post(`http://localhost:8000/product`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Wow",
                text: "Thanks for added your Products",
                icon: "success"
            });
        });
        e.target.reset();
    }
    return (
        <ThemeContextProvider>
            <div className="flex">
                <Sidebar />
                <div className='grow ml-16 md:ml-64 h-full lg:h-full bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white'>
                    <Navbar />
                    <div className='w-full'>
                        <div className='px-48 py-10'>
                            <h1 className='text-4xl text-center pb-3'>Add Products here</h1>
                            <div className='py-10'>
                                <form onSubmit={AddProductsHandeler}>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-10'>
                                        <div className='w-full items-center dark:text-gray-900'>
                                            <select ref={categoryname} placeholder='Enter CategoryName *' className='w-full p-3 rounded-md text-lg bg-gray-100'>
                                                <option value="">-select category-</option>
                                                {category && category.map((data) => {
                                                    return (
                                                        <>
                                                            <option value={data.categoryname}>{data.categoryname} </option>
                                                        </>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                        <div className='w-full items-center dark:text-gray-900'>
                                            <select ref={subcategoryname} placeholder='Enter CategoryName *' className='w-full p-3 rounded-md text-lg bg-gray-100'>
                                                <option value="">-select subcategory-</option>
                                                {data && data.map((item) => {
                                                    return (
                                                        <>
                                                            <option value={item.subcategoryname}>{item.subcategoryname} </option>
                                                        </>
                                                    )
                                                })}
                                            </select>
                                        </div>
                                    </div>
                                    <div className='w-full items-center dark:text-gray-900 mt-7'>
                                        <input type="text" ref={productname} placeholder='Enter Product Name *' className='w-full rounded-md text-lg p-3' />
                                    </div>
                                    <div className='w-full items-center dark:text-gray-900 mt-7'>
                                        <input type="text" ref={image} placeholder='Image URL *' className='w-full rounded-md text-lg p-3' />
                                    </div>
                                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
                                        <div className='w-full items-center dark:text-gray-900 mt-7'>
                                            <input type="text" ref={oldprice} placeholder='Old Price *' className='w-full rounded-md text-lg p-3' />
                                        </div>
                                        <div className='w-full items-center dark:text-gray-900 mt-7'>
                                            <input type="text" ref={offerprice} placeholder='Offer Price *' className='w-full rounded-md text-lg p-3' />
                                        </div>
                                        <div className='w-full items-center dark:text-gray-900 mt-7'>
                                            <input type="text" ref={qty} placeholder='Qty *' className='w-full rounded-md text-lg p-3' />
                                        </div>
                                        <div className='w-full items-center dark:text-gray-900 mt-7'>
                                            <input type="date" ref={added_date} placeholder='Enter Date *' className='w-full rounded-md text-lg p-3' />
                                        </div>
                                    </div>
                                    <div className='w-full items-center dark:text-gray-900 mt-7'>
                                        <textarea type="text" ref={descriptions} placeholder='Descriptions *' className='w-full rounded-md text-lg p-3' ></textarea>
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

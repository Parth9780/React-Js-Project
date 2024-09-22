import React, { useEffect, useState } from 'react'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Sidebar from '../Dashbord/Sidebar'
import Navbar from '../Dashbord/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const ManageSubCategory = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/subCategory`).then((responce) => {
            setData(responce.data);
        })
    }, [data]);

    var tableStyle = {
        "border": "1px solid gray",
        "padding-top":"7px",
        
    };
    return (
        <>
            <ThemeContextProvider>
                <div className="flex">
                    <Sidebar />
                    <div className='grow ml-16 md:ml-64 h-full lg:h-screen bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-white'>
                        <Navbar />
                        <div className='table w-full'>
                            <div className='w-full'>
                                <table className='text-xl mx-auto'>
                                    <tbody>
                                        <tr className='gap-y-16'>
                                            <th className='px-3' style={tableStyle}>Id:</th>
                                            <th className='px-3' style={tableStyle}>Category</th>
                                            <th className='px-3' style={tableStyle}> SubCategory Name</th>
                                            <th className='px-3' style={tableStyle}>Add-Date</th>
                                            <th className='px-3' style={tableStyle}>Action</th>
                                        </tr>
                                        {data && data.map((row) => {
                                            return (
                                                <>
                                                    <tr className='text-center'>
                                                        <td className='px-3 lg:px-20 lg:py-5' style={tableStyle}>{row.id}</td>
                                                        <td className='px-3 lg:px-20 lg:py-5' style={tableStyle}>{row.categoryname}</td>
                                                        <td className='px-3 lg:px-20 lg:py-5' style={tableStyle}>{row.subcategoryname}</td>
                                                        <td className='px-3 lg:px-20 lg:py-5' style={tableStyle}>{row.added_date}</td>
                                                        <td className='px-3 lg:px-20 lg:py-5' style={tableStyle}><button onClick={()=>{navigate(`/admin/dashboard/delete-subcategory/${row.id}`)}}><i class="bi bi-trash"></i></button></td>
                                                    </tr>
                                                </>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeContextProvider>
        </>
    )
}

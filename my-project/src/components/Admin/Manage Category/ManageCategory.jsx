import React, { useEffect, useState } from 'react'
import ThemeContextProvider from '../context/ThemeContextProvider'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Dashbord/Sidebar'
import Navbar from '../Dashbord/Navbar'
import axios from 'axios'

export const ManageCategory = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/category`).then((responce) => {
            setData(responce.data);
        })
    }, [data]);

    var tableStyle = {
        "border": "1px solid gray",
        "padding-top": "7px",

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
                                <table className='text-xl'>
                                    <tbody>
                                        <tr className='gap-y-16'>
                                            <th className='px-5' style={tableStyle}>Id:</th>
                                            <th className='px-5' style={tableStyle}>Category</th>
                                            <th className='px-5' style={tableStyle}>Add-Date</th>
                                            <th className='px-5' style={tableStyle}>Action</th>
                                        </tr>
                                        {data && data.map((row) => {
                                            return (
                                                <>
                                                    <tr className='text-center'>
                                                        <td className='px-5 lg:px-32 lg:py-5' style={tableStyle}>{row.id}</td>
                                                        <td className='px-5 lg:px-32 lg:py-5' style={tableStyle}>{row.categoryname}</td>
                                                        <td className='px-5 lg:px-32 lg:py-5' style={tableStyle}>{row.added_date}</td>
                                                        <td className='px-5 lg:px-32 lg:py-5' style={tableStyle}><button onClick={()=>navigate(`/admin/dashboard/delete-category/${row.id}`)}><i class="bi bi-trash"></i></button></td>
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

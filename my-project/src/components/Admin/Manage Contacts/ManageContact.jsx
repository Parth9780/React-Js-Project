import React, { useEffect, useState } from 'react'
import ThemeContextProvider from '../context/ThemeContextProvider'
import Sidebar from '../Dashbord/Sidebar'
import Navbar from '../Dashbord/Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const ManageContact = () => {
    const [data, setData] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/contacts`).then((responce) => {
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
                                <table className='text-xl mx-auto'>
                                    <tbody>
                                        <tr className='gap-y-16'>
                                            <th className='px-3' style={tableStyle}>Id:</th>
                                            <th className='px-3' style={tableStyle}>Name: </th>
                                            <th className='px-3' style={tableStyle}>Mobile:</th>
                                            <th className='px-3' style={tableStyle}>Email:</th>
                                            <th className='px-3' style={tableStyle}>Message:</th>
                                        </tr>
                                        {data && data.map((row) => {
                                            return (
                                                <>
                                                    <tr className='text-center'>
                                                        <td className='px-3 lg:px-10 lg:py-7' style={tableStyle}>{row.id}</td>
                                                        <td className='px-3 lg:px-10 lg:py-7' style={tableStyle}>{row.Name}</td>
                                                        <td className='px-3 lg:px-10 lg:py-7' style={tableStyle}>{row.Number}</td>
                                                        <td className='px-3 lg:px-10 lg:py-7' style={tableStyle}>{row.Email}</td>
                                                        <td className='px-3 lg:px-10 lg:py-7' style={tableStyle}>{row.Message}</td>
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

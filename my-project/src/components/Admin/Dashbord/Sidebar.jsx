import React from 'react'
import { FaAd, FaAlignLeft, FaBox, FaBoxes, FaPhoneSquareAlt, FaTachometerAlt, FaUserAlt } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'
import { MdSubdirectoryArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
const Sidebar = () => {
    return (
        <>
            <div className='bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-r border-gray-300 dark:border-gray-600 dark:bg-gray-900 dark:text-white'>
                <h1 className='text-2xl font-bold hidden md:block mt-4 text-center italic'>Headphone</h1>
                <ul className='flex flex-col mt-5 text-xl'>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaTachometerAlt />
                        <Link to='/admin' className='hidden md:inline'>
                            Dashboard
                        </Link>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaUserAlt />
                        <Link to='#' className='hidden md:inline'>
                            Customer Details
                        </Link>
                    </li>
                    <div className='mt-4'>
                        <li className='flex items-center py-1 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                            <FaAd />
                            <Link to='/admin/dashboard/add-category' className='hidden md:inline'>
                                Add Category
                            </Link>
                        </li>
                        <li className='flex items-center py-3 ps-5 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                            <MdSubdirectoryArrowRight />
                            <Link to='/admin/dashboard/managecategory' className='hidden md:inline'>
                                Manage-Category
                            </Link>
                        </li>
                    </div>
                    <div className='mt-4'>
                        <li className='flex items-center py-1 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                            <FaBoxes />
                            <Link to='/admin/dashboard/add-subcategory' className='hidden md:inline'>
                                Add SubCategory
                            </Link>
                        </li>
                        <li className='flex items-center py-1 ps-5 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                            <MdSubdirectoryArrowRight />
                            <Link to='/admin/dashboard/manage-subcategory' className='hidden md:inline'>
                                Manage SubCategory
                            </Link>
                        </li>
                    </div>
                    <div className='my-4'>
                        <li className='flex items-center py-3 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                            <FaBox />
                            <Link to='/admin/dashboard/add-product' className='hidden md:inline'>
                                Add Products
                            </Link>
                        </li>
                        <li className='flex items-center py-1 ps-5 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                            <MdSubdirectoryArrowRight />
                            <Link to='/admin/dashboard/manage-product' className='hidden md:inline'>
                                Manage Products
                            </Link>
                        </li>
                    </div>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaCartShopping />
                        <Link to='/admin/dashboard/manage-order' className='hidden md:inline'>
                            Manage Order
                        </Link>
                    </li>
                    <li className='flex items-center py-3 px-2 space-x-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white'>
                        <FaPhoneSquareAlt />
                        <Link to='/admin/dashboard/manage-contacts' className='hidden md:inline'>
                            Manage Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
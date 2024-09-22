import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { div, image } from 'framer-motion/client';
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import Footer from '../Footer/Footer';

const ShopNow = () => {
    const Navigate=useNavigate();
    const [data, setData] = useState([]);
    useEffect(() => {
        axios(`http://localhost:8000/product`).then((response) => {
            setData(response.data);
        })
    }, []);
    return (
        <>
            <Navbar />
            <section>
                <div className='bg-gray-100'>
                    <div className='text-left p-5'>
                        <h1 className='text-3xl font-semibold font-poppins'>Beast Sale Products</h1>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ms-0 items-center gap-7 p-5'>
                        {data && data.map((item) => {
                            return (
                                <div className='space-y-2 bg-white border-2 rounded-md'>
                                    <p className='p-3 items-center'>
                                        <img src={item.image} alt="" className='w-75 h-72 mx-auto' />
                                    </p>
                                    <p className='text-lg text-center font-semibold line-clamp-1 justify-start p-2 w-10/12 mx-auto'>
                                        {item.productname}
                                    </p>
                                    <p className='text-xl text-center'>
                                        <del>Rs.{item.oldprice}-/</del> <span className="text-rose-500">Rs.{item.offerprice} -/</span>
                                    </p>
                                    <p className='text-center py-3'>
                                        <button className='border-2 border-green-700 text-green-700 py-2 hover:bg-green-700 hover:text-white px-4 text-md rounded-lg' onClick={()=>{Navigate(`/product-details/${item.id}`)}}>More Details</button>
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ShopNow
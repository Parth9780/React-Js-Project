import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Swal from 'sweetalert2';
import Footer from '../Footer/Footer';

export default function Cart() {

    // display cart
    const [data, setData] = useState([]);
    const Navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/cart`).then((response) => {
            setData(response.data);

        })
    })
    return (

        <>
            <Navbar />
            {/* display the carts data */}
            <div className='card'>
                <div className='card-header text-2xl font-semibold font-poppins border-b-2 gap-5 p-3'>View Cart ()</div>
                <div className='card-body text-lg p-10'>
                    <table className=''>
                        <tr className=''>
                            <th>photo</th>
                            <th>Productname</th>
                            <th>Offerprice</th>
                            <th>Qty</th>
                            <th>Subototal</th>
                            <th>Action</th>
                        </tr>
                        {data && data.map((items) => {
                            return (
                                <>
                                    <tr className='gap-10'>
                                        <td><img src={items.image} alt='products' style={{ width: "100px", height: "100px" }} /></td>
                                        <td className='px-10'>{items.productname}</td>
                                        <td>{items.offerprice1}</td>
                                        <td><input type="number" value='1' min="1" max="10" /></td>
                                        <td>{items.offerprice2}</td>
                                        <td><button type='button' className='text-rose-600 p-1 text-xl rounded-lg' onClick={()=>{Navigate(`/delete-cart/${items.id}`)}}><i class="bi bi-trash"></i></button></td>
                                    </tr>
                                </>
                            )
                        })}
                        <tr className=''>
                            <td className='py-5' colSpan="6"><h2 align='right' className='bg-gray-800 p-3 text-white'>Subtotals of Products is Rs.{ }</h2></td>
                        </tr>
                        <tr>
                            <td colSpan="6">
                                <Link to="/checkout"><button type='button' className='p-3 border bg-gradient-to-tr from-blue-600 to-purple-500 text-gray-100 rounded-xl float-end'>Contine for CheckOut</button></Link>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Footer />

        </>
    )
}
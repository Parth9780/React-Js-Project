import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import Swal from 'sweetalert2'


export default function ProductsDetails() {
    // display all products added from admin
    const [data, setData] = useState();
    const Navigate = useNavigate();
    const { id } = useParams();

    // stored all data in variables
    const images = useRef("");
    const image = useRef("");
    const productname = useRef("");
    const oldprice = useRef("");
    const qty = useRef("");
    const offerprice1 = useRef("");
    const offerprice2 = useRef("");
    const descriptions = useRef("");

    // add in cart 
    const AddFormHandeler = (e) => {
        e.preventDefault();
        var insert = {
            image: image.current.value,
            productname: productname.current.value,
            oldprice: oldprice.current.value,
            offerprice1: offerprice1.current.value,
            offerprice2: offerprice2.current.value,
            qty: qty.current.value,
            descriptions: descriptions.current.value
        }
        // stored using axios.post
        axios.post(`http://localhost:8000/cart`, insert).then(() => {
            // pass a message
            Swal.fire({
                title: "Wow",
                text: "Thanks your products added in cart",
                icon: "success"
            });
        })
    }

    // using useEffects fetch data
    useEffect(() => {
        // fetch api data
        axios.get(`http://localhost:8000/product/${id}`).then((response) => {
            images.current.src = response.data.image;
            image.current.value = response.data.image;
            descriptions.current.value = response.data.descriptions;
            productname.current.value = response.data.productname;
            oldprice.current.value = response.data.oldprice;
            offerprice1.current.value = response.data.offerprice;
            offerprice2.current.value = response.data.offerprice;
            qty.current.value = response.data.qty;
        })
    }, []);
    return (
        <>
            <Navbar />
            <section className='p-5 mt-3 flex'>
                <div className="w-4/12 bg-white p-3 ms-0 item">
                    <p className="text-white">
                        <img src={images} ref={images} style={{ width: "100%" }} />
                    </p>
                </div>
                <div className='w-7/12 p-3 mx-auto item text-gray-900'>
                    <form onSubmit={AddFormHandeler}>
                        <input type='hidden' ref={image} />
                        <p className="text-start text-2xl">
                            <input type='text' className='w-full' ref={productname} readOnly />
                        </p>
                        <p className="text-start text-xl pt-5">
                            <del>Rs.<input type='text' ref={oldprice} readOnly style={{ border: "none", width: "70px" }} />-/</del> <span className="text-primary">Rs.<input type='text' ref={offerprice1} readOnly style={{ border: "none", width: "70px" }} />-/</span>
                        </p>
                        <p className="text-start text-xl"><input type='number' min="1" max="10" defaultValue={1} ref={qty} className='w-50 py-3' /></p>

                        <p className="text-start text-xl text-green-600 pb-3">Subtotals of Products : <input type='text' ref={offerprice2} readOnly style={{ border: "none", width: "100px" }} /></p>

                        <p className="text-start text-xl text-dark">
                            <p className='font-semibold text-2xl border-b-2'>Products Details</p>
                            {/* <hr /> */}
                            <br />
                            <textarea  style={{ border: "none", width: "100%", height: "auto" }} ref={descriptions} readOnly></textarea>
                        </p>
                        <p className="text-start text-xs mt-7">
                            <Link to='/shopnow'><button type='button' className='p-3 bg-green-500 text-white text-base rounded-lg text-start'>ContinueShopping</button></Link>

                            <button type='submit' className='p-3 bg-rose-500 text-white text-base rounded-lg text-start ms-4'>AddToCart</button>
                        </p>
                    </form>
                </div>
                <div className="clearfix" />
            </section>
            <Footer />
        </>
    )
}
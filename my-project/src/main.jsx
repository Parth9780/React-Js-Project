import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Client Slide Components
import Layout from './Layout.jsx'
import ShopNow from './components/ShopNow/ShopNow.jsx'
import Cart from './components/Cart/Cart.jsx'
import DeleteCart from './components/Cart/DeleteCart.jsx'
import Blog from './components/Blogs/Blog.jsx'
import About from './components/About Us/About.jsx'
import ContactUs from './components/Contact Us/ContactUs.jsx'
import Checkout from './components/Checkout/Checkout.jsx'

// Admin Components
import Dashbord from './components/Admin/Dashbord/Dashbord.jsx'
import AddCategory from './components/Admin/Add-Category/AddCategory.jsx'
import { AddSubCategory } from './components/Admin/Add-Subcategory/AddSubCategory.jsx'
import { AddProducts } from './components/Admin/Add-Product/AddProducts.jsx'
import { ManageCategory } from './components/Admin/Manage Category/ManageCategory.jsx'
import ProductsDetails from './components/Products Details/ProductsDetails.jsx'
import { ManageSubCategory } from './components/Admin/Manage SubCategory/ManageSubCategory.jsx'
import DeleteCategory from './components/Admin/Manage Category/DeleteCategory.jsx'
import DeleteSubCategory from './components/Admin/Manage SubCategory/DeleteSubCategory.jsx'
import { ManageProduct } from './components/Admin/Manage Product/ManageProduct.jsx'
import DeleteProduct from './components/Admin/Manage Product/DeleteProduct.jsx'
import { ManageOrder } from './components/Admin/Manage Order/ManageOrder.jsx'
import { ManageContact } from './components/Admin/Manage Contacts/ManageContact.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" index element={<Layout />} />
        <Route path="/shopnow" element={<ShopNow />} />
        <Route path='/product-details/:id' element={<ProductsDetails />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/delete-cart/:id' element={<DeleteCart />} />
        <Route path='/blogs' element={<Blog />} />
        <Route path='/about' element={<About />} />
        <Route path='/contacts' element={<ContactUs />} />
        <Route path='/checkout' element={<Checkout />} />

        {/* Admin Routing */}
        <Route path="/admin" element={<Dashbord />} />
        <Route path='/admin/dashboard/add-category' element={<AddCategory />} />
        <Route path='/admin/dashboard/add-subcategory' element={<AddSubCategory />} />
        <Route path='/admin/dashboard/add-product' element={<AddProducts />} />
        <Route path='/admin/dashboard/managecategory' element={<ManageCategory />} />
        <Route path='/admin/dashboard/manage-subcategory' element={<ManageSubCategory />} />
        <Route path='/admin/dashboard/delete-category/:id' element={<DeleteCategory />} />
        <Route path='/admin/dashboard/delete-subcategory/:id' element={<DeleteSubCategory />} />
        <Route path='/admin/dashboard/manage-product' element={<ManageProduct />} />
        <Route path='/admin/dashboard/delete-product/:id' element={<DeleteProduct />} />
        <Route path='/admin/dashboard/manage-order' element={<ManageOrder />} />
        <Route path='/admin/dashboard/manage-contacts' element={<ManageContact />} />

      </Routes>
    </Router>
  </React.StrictMode>,

)
import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios'

export const App = () => {
  //using useEffect fetch a category inside of subcategory in dropdown http://localhost:8000/addcategory
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/category`).then((response) => {
      setData(response.data);
    })
  }, []);

  const [data1, setData1] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/addsubcategory`).then((response) => {
      setData1(response.data);
    })
  }, []);

  return (
    <>
      <div className='w-52 mx-auto bg-gray-200 mt-20'>
        <select placeholder='Enter CategoryName *' className='form-control w-full p-3 rounded-md text-lg bg-gray-100'>
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
      <div className='w-52 mx-auto bg-gray-200 mt-20'>
        <select placeholder='Enter SubCategoryName *' className='form-control w-full p-3 rounded-md text-lg bg-gray-100'>
          <option value="">-select subcategory-</option>
          {data1 && data1.map((item) => {
            return (
              <>
                <option value={item.subcategoryname}>{item.subcategoryname} </option>
              </>
            )
          })}

        </select>
      </div>
    </>
  )
}
import React, { useEffect, useState } from 'react'
import resort from './Resort-Home.png'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const Resortmngenqry = () => {
    let id=localStorage.getItem("id")
    const[data, setData] = useState([''])
    useEffect(() => {
      let fetchdata = async () => {
        let response = await axios.get(
          `http://localhost:4000/resort/vwrequestagency/${id}`
        );
        console.log(response.data);
        setData(response.data);
      };
      fetchdata();
    },[]);

  return (
    <div className='resorthome h-screen w-[100%]  '>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10 ">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 " >
        <thead class="text-xs bg-gray-800 text-white uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
                <th scope="col" class="px-6 py-3">
                   Enquiriy Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Check-in
                </th>
                <th scope="col" class="px-6 py-3">
                    Check-out
                </th>
                <th scope="col" class="px-6 py-3">
                   Room Type
                </th>
                <th scope="col" class="px-6 py-3">
                    Guest Count
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                  Action
                </th>
               
            </tr>
        </thead>
        <tbody>
            {data.map((item,index)=>(
                <>
            <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {item.agn?.companyName}
                </th>
                <td class="px-6 py-4">
                {new Date(item.req?.fromDate).toLocaleDateString()}
                </td>
                <td class="px-6 py-4">
                {new Date(item.req?.toDate).toLocaleDateString()}
                </td>
                <td class="px-6 py-4">
                {item.bookings?.accomodatn}
                </td>
                <td class="px-6 py-4">
                   {item.bookings?.adult}A,{item.bookings?.child}C
                </td>
                <td class="px-6 py-4">
                  {item.req?.resortstatus}
                </td>
               
                <td class="px-3 py-4 flex flex-wrap flex-col gap-2 text-center">
                    {/* <a href="#" class="font-bold text-sm text-black bg-green-600 hover:underline hover:bg-gray p-1">Accept</a> */}
                 <Link to={`/resort/resortenterprice/${item?.req?._id}`} > <button class="font-bold text-sm text-black bg-red-600 hover:underline hover:bg-orange-600 p-1" >View</button></Link>  
                </td>
                
                {/* <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 bg-gray-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
                 */}
            </tr>
            {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Google Pixel Phone
                </th>
                <td class="px-6 py-4">
                    Gray
                </td>
                <td class="px-6 py-4">
                    Phone
                </td>
                <td class="px-6 py-4">
                    $799
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            {/* <tr>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple Watch 5
                </th>
                <td class="px-6 py-4">
                    Red
                </td>
                <td class="px-6 py-4">
                    Wearables
                </td>
                <td class="px-6 py-4">
                    $999
                </td>
                <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                </td>
            </tr> */}
            </>
        ))}
        </tbody>
    </table>
</div>
</div>
  )
}

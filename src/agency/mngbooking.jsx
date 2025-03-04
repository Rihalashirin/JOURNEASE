import React from 'react'

export const Mngbooking = () => {
  return (
    <div className='pencil'>
    <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
          <span className='text-white'>Customer</span><span className='text-orange-600'> Enquiries</span>
        </div>
        

<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
  <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
              <th scope="col" class="px-6 py-3">
                  Name
              </th>
              <th scope="col" class="px-6 py-3">
                  Package
              </th>
              <th scope="col" class="px-6 py-3">
                 Days
              </th>
              {/* <th scope="col" class="px-6 py-3">
                  Price
              </th> */}
              <th scope="col" class="px-6 py-3">
                  Action
              </th>
          </tr>
      </thead>
      <tbody>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  Akshay Kumar
              </th>
              <td class="px-6 py-4">
                 Delhi Delight
              </td>
              <td class="px-6 py-4">
                 4D
              </td>
              {/* <td class="px-6 py-4">
                  $2999
              </td> */}
              {/* <td class="px-6 py-4">
                  <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
              </td> */}
              <td class="px-6 py-4 flex flex-wrap gap-3">
                  <button className='bg-orange-600 text-white rounded-lg p-2'>Assign Guide</button>
                  <button className='bg-orange-600 text-white rounded-lg p-2'>Assign Healthassistant</button>
              </td>
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
          </tr>
          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
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
                  <button className='bg-orange-600 text-white rounded-lg p-2'>View details</button>
              </td>
          </tr> */}
         
      </tbody>
  </table>
</div>

       
  </div>
  )
}

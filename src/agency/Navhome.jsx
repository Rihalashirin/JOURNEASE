import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import homeicon from './images/Group 93.png'

export const Navhome = () => {
  return (
    <div className="">

    <div className=' text-orange-600 justify-between items-center  align-middle w-[100%] bg-white flex flex-wrap '>
        <div className='fonts text-[20px] text-orange-500   items-center py-3 ps-3' >
            JournEase
        </div>
        <div className='flex gap-5 items-center'>
        <Link to='/agency'><div><img className='w-[40px]' src={ homeicon} alt="" srcset="" /></div></Link>
       <Link to='/agency/cstmrenqry'><div className='font text-orange-600 '>ENQUIRIES</div></Link> 
       <Link to='/agency/vwpkg'> <div className='font text-orange-600 '>PACKAGES</div></Link>
        <Link to='/agency/vwreviewagency'><div className='font text-orange-600 '>REVIEWS</div></Link>
       {/* <Link to='/agency/vwphoto'> <div className='font text-orange-600 '>PHOTOS</div></Link> */}
        <Link to='/agency/addadventure'><div className='font text-orange-600 '>ADVENTURES</div></Link> 
      
       
  
       
       <Link to='/agency/addpkg'> <div className='font text-orange-600 '>ADD PACKAGES</div></Link>
        <div className='flex flex-wrap gap-2'>
      <Link to='/agency/updateproagency'>  <img  src="/images/logoagency.jpg" alt="" className='w-16 '/></Link>
        </div>  </div>      
    </div>
    
    <Outlet/>
      
    </div>
  )
}

import React from 'react'
import resorthome from './Resort-Home.png'
import bookicon from './bookingicon.png'
import enqryicon from './enqryicon.png'
import reviewicon from './reviewsicon.png'
import profileicon from './profileicon.png'

export const Resorthome = () => {
  return (
    <div>
    <div className='resorthome h-screen w-[100%] '>
         <div className='flex gap-3 items-center justify-center pt-40 flex-wrap'>
         <img src={bookicon} alt="" className='w-28 h-28' srcset="" />
         <img src={enqryicon} alt="" className='w-28 h-28' srcset="" />
         <img src={reviewicon} alt="" className='w-28 h-28' srcset="" />
         <img src={profileicon} alt="" className='w-28 h-28' srcset="" />
         </div>
         </div>
    </div>
  )
}

import React, { useEffect } from 'react'
import plantrip from './PlanTripIcon.png'
import notificatn from './NotificationIcon.png'
import mngprofile from './manageprofile.png'
import reviews from './reviewsicon.png'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'
export const Userhome = () => {
  const navigate=useNavigate()
  let logout=()=>{
    localStorage.removeItem('id')
    localStorage.removeItem('email')
    navigate('/login')
}
useEffect(()=>{
  let auth=async ()=>{

    let id=localStorage.getItem('id')
    let email=localStorage.getItem('email')
    let response=await axios.post('http://localhost:4000/user/api/auth/authenticate',{_id:id,email:email})
    console.log(response);
    if(response==null){
      navigate('/login')
    }
    else if(response?.data?.userType !=='user'){
      navigate('/login')
    }

  }
  auth()
},[])
  return (
    <div className='userhome' >
      <div className=' font text-[30px] font-bold pl-5 pt-6'>
            <span className='text-white'>Welcome,</span><span className='text-orange-600'> User</span>
            <div onClick={logout} className='font bg-white w-36 text-[20px] pr-5 text-end text-orange-600'>LOG OUT</div>
          </div>
         <div className='flex flex-wrap gap-20 justify-center items-center  h-96  font text-white '>
       <Link to='/user/planpkg'> <div><img src={plantrip} alt="" className='w-20' />Plan a Trip</div></Link>
        <Link to='/user/notificatn'> <div> <img src={notificatn} alt="" className='w-20'/>Notifications</div> </Link>
            {/* <Link to='/user/addreview' ><div> <img src={reviews} alt="" className='w-20' />Add Reviews</div></Link>  */}
          <Link to='/user/updateprofile' > <div><img src={mngprofile} alt="" className='w-20' />Edit Profile</div></Link>
  
      </div>
    </div>
  )
}

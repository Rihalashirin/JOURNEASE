import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const Guidemngwage = () => {
  const[data,setData]=useState('')
  let {id}=useParams()
  useEffect(()=>{
    let fetchdata=async ()=>{
        let response=await axios.get(`http://localhost:4000/guide/vwdetailbooking/${id}`)
        console.log(response.data,'log for ----')
        setData(response.data)
    }
    fetchdata()
},[])
let handleChange=(event)=>{
  setData({...data,[event.target.name]:event.target.value})
}
let handleSubmit=async (status,wage)=>{
  // event.preventDefault()
  setData(data)
  console.log(data)
 let response=await axios.put(`http://localhost:4000/guide/managebooking/${id}`,{guidestatus:status,wage:data.wage})
 console.log(response); 
  
}
// let enterwage = async () => {
//   try {
//     const response1 = await axios.put(`http://localhost:4000/guide/enterwage/${id}`, { wage: data.wage });
//     console.log(response1);
//     // Optionally, you can reset the wage field after submission
//     setData(prevData => ({ ...prevData, wage: '' }));
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
  return (
    <div className='guidehome'>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-10">
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2'>
            <div className='font '>
                <div className='text-[20px]'>
                Basic info </div> <br />
               Name  :{data.usr?.name}  <br/>
               Email :{data.usr?.email}  <br/>
               Mobile:{data.usr?.contactNumber} <br/><br/>
               <div className='font '>
                <div className='text-[20px]'>
                Travel info </div><br/>
                <div className='flex flex-wrap gap-16'>
                  <div>
                Adults:{data.bookings?.adult} <br/>
                Children:{data.bookings?.child}<br/>
                Transport option:{data.bookings?.selectedTransport}<br/>
                picking place:{data.bookings?.pickingplace}
                </div>
                <div>
                  Date:{new Date(data.bookings?.date).toLocaleString()}
                </div>
                
                </div><br />
                <div className='text-[20px]'>
                Package info </div><br/>
                </div>
             <div> {data.package1?.packageName}</div>
             <div> {data.package1?.noOfDays}DAYS</div><br/>
             <div>{data.package1?.category}</div>
             <div className='flex flex-wrap gap-10'>
              <div>Guide :{data.bookings?.guide} </div>
              <div>Health Assistant :{data.bookings?.health} </div>
             </div>
               <div className='text-[20px]'>
                Accomodation Chosen </div><br/>
                <div className='flex flexwrap gap-5 '>
                <img src={`http://localhost:4000/uploads/${data?.resort?.coverImage}`} alt="" srcset="" />
                <div className='pt-10'>{data?.resort?.propertyName}
                 <br />{data?.bookings?.accomodatn}</div>
                {/* <div className='flex flex-col gap-6 mt-3 '>
                
                </div> */}
              
               
                </div>
                <div className='text-[20px]'>
                Adventure Chosen </div><br/>
                <div className='flex flexwrap gap-5 justify-start '>
                <img src={`http://localhost:4000/uploads/${data?.adv?.image}`} className='w-24' alt="" srcset="" />
                <div className='font text-[20px] pt-5 '>{data.adv?.adventureName}
                 <br />{data?.adv?.price}/Head</div>
                 <div className='mt-5'> booking status:{data.bookings?.status}</div>
                 wage:{data.bookings?.wage}
                 <div >
              <label for="name" class="block mb-2 text-sm font-medium  dark:text-white">Wage :</label>
              <input onChange={handleChange}  name='wage' type="number" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
              {/* <button onClick={()=>enterwage(data.wage)} className='bg-orange-600 mt-2 rounded-lg px-2 py-2'>submit</button> */}
            </div>
                 <div className='flex flex-wrap gap-14 '>
                <button onClick={()=>{handleSubmit('Accepted',data?.bookings?._id)}}  className='bg-green-600 w-32 h-9 rounded-lg font-bold'>ACCEPT</button>
                <button onClick={()=>{handleSubmit('Rejected',data?.bookings?._id)}}  className='bg-orange-600 w-32 h-9 rounded-lg font-bold'>REJECT</button>
                </div>
                </div>
                
                
           

            </div>

        </div>
</div>
</div>
    
  )
}

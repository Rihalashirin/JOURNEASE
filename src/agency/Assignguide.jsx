import React, { useEffect, useState } from 'react'
// import guide1 from './images/guide1.png'
// import guide2 from './images/guide2.png'
// import guide3 from './images/guide3.png'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'


export const Assignguide = () => {
  let id1=localStorage.getItem('id')
   const [data,setData]=useState([''])
   const[data1,setData1]=useState(false)
   const [data2,setData2]=useState('') 
   const [data3,setData3]=useState('') 
 const[detail,setdetail]=useState('')
   let {aid}=useParams()
  //  let id=localStorage.getItem('id')
   const [resortData,setResortdata]=useState([''])
   useEffect(()=>{
    let fetchdata=async()=>{
      let response=await axios.get('http://localhost:4000/agency/findguide')
      
      console.log(response.data)
      if(response.data){
        setData(response.data)
      }
    }
    fetchdata()
   },[])
   let handleChange=(event)=>{
      setData3(event.target.value)
  }
   let handleSubmit=async(event)=>{
    // event.preventDefault()
    setData2(data2)
    console.log(data2)
    let response=await axios.post(`http://localhost:4000/agency/enquireguide/${aid}`,{...data2,bookingid:aid,guideid:detail._id,wage:data3})
    console.log(response)

  }
  // let enterwage = async () => {
  //   try {
  //    
  //     console.log(response1);
  //     // Optionally, you can reset the wage field after submission
  //     setData(prevData => ({ ...prevData, wage: '' }));
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }
  const handledetail = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/agency/detailguide/${id}`
      );
      console.log(response.data)
      setdetail(response.data)
      if(response.data){

        setData1(!data1)
      }
      // settoggle(true);
    } catch (error) {
      console.error("Error fetching resort details:", error);
    }
   
  };
   
    
   
     
  
  // let handleSubmit=async (event)=>{
  //     event.preventDefault()
  //    let response=await axios.post('http://localhost:4000/user',data)
  //    console.log(response);
      
  // }

  return (
    <div className='pencil h-[39rem]'>
      {data1 == false &&
      <>
        <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
          
                <span className='text-white'>Assign a </span><span className='text-orange-600'> Guide</span>
            </div>
            <form  class="flex items-center max-w-sm mx-auto">   
    <label for="simple-search" class="sr-only">Search</label>
    <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg> */}
        </div>
        <input  type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="available guides" required />
    </div>
    <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-orange-600 rounded-lg border border-blue-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button>
</form>
<div className='flex flex-wrap gap-9'>
{data.map((item)=>(
    
    
  
<div className='flex flex-wrap sm:gap-5  '>
<div className='bg-orange-300 w-[100px] ml-5 mt-5 rounded-lg'>
  <div className=' pt-4 text-center text-white p-2 '> 
 {/* <Link to={`/agency/detailguide/${item._id}`}>  */}
 <img  onClick={() => handledetail(item._id)} src={`http://localhost:4000/uploads/${item.image}`} className=' w-24' alt="" srcset="" />
    <div className='font font-bold'>{item.name} <br /></div>
    <div>
   
    Experience:(in years):{item.experienceYears}</div>
    
  </div>
  </div>
  </div>
 ))}
  
  </div>
  </>
}
{ data1 &&




<>
<div onClick={()=>{
    setData1(!data1)
}} className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>{detail.name}</span>
        </div>
        <div className='bg-white/50 w-[90%] p-3 ms-5 pt-2 shadow-xl rounded-3xl h-80'>
          <div className='flex flex-wrap gap-5'>
           
           <div><img src={`http://localhost:4000/uploads/${detail.image}`} className='w-24' alt="" srcset="" /></div> 
            <div>
            <div className='font font-bold text-black'>Name:{detail.name} </div>
            <div className='font font-bold text-black'>Age:{detail.age}</div>
            <div className='font font-bold'>Gender:{detail.gender}</div>
            <div className='font font-bold '>Address:{detail.address}</div>
            <div className='font font-bold  '> Experience(in years):{detail.experienceYears}</div> 
            <div className='font  font-bold  '>location of expertise:{detail.locationExpertise}</div></div>
            
            <div >
              <label for="name" class="block mb-2 text-sm font-medium  dark:text-white">Wage :</label>
              <input onChange={handleChange}  name='wage' type="number" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
          
            </div>
            </div>
            
           
            <button type='submit' onClick={()=>handleSubmit()} className='bg-orange-600 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded ml-80 mt-8'>ENQUIRE</button>

        </div>


</>

}
    </div>
  )
}

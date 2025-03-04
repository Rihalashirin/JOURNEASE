import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {toast} from "react-toastify"

export const Rgstrn = () => {
  const [data,setData]=useState('')
  let handlefile=(event)=>{
    console.log(event.target.files);
    setData({...data,[event.target.name]:event.target.files[0]})
  }
    
    
     
        let handleChange=(event)=>{
            setData({...data,[event.target.name]:event.target.value})
        }
        let handleSubmit=async (event)=>{
          event.preventDefault()
          if (data.cpassword!=data.password)  {
            toast.error("password doesnt match")
          }
          else {

         
          let formData = new FormData();

          formData.append('companyName',data.companyName);
          formData.append('licenseNumber',data.licenseNumber);
          formData.append('pin',data.pin);
          formData.append('contactNumber',data.contactNumber);
          formData.append("contactNumberalternative",data.contactNumberalternative)
          formData.append('licenseProof',data.licenseProof);
          formData.append('companyLogo',data.companyLogo);
          formData.append('email',data.email);
          formData.append('password',data.password);
          formData.append('aboutUs',data.aboutUs);
          formData.append('whyUs',data.whyUs);
          formData.append('description',data.description);
          formData.append("place",data.place);
          formData.append("district",data.district)
          formData.append("ownerName",data.ownerName)
          formData.append("cpassword",data.cpassword)
          formData.append('userType','agency');
          

            event.preventDefault()
           let response=await axios.post('http://localhost:4000/user/registration',formData,{
            headers: {
              'Content-Type': 'multipart/form-data'
            }
           }).then((res)=>{
            setData(data);
            toast.success('successfully registered')
            console.log(data);
           }).catch((err)=>{
            toast.error(err.response.data.message || err.message || 'password doesnt match')
           })
            
        }
      }
    return (
        <div className='bg-[#1a2954d6] h-full'>
            <div className='h-[64px] font text-[30px] font-bold m-0 text-left pl-10 '>
            <span className='text-white'>Register as a </span><span className='text-orange-600'> Travel Planner</span>
          </div>
          <form onSubmit={handleSubmit} class="w-[100%] ">

        <div className='flex w-[100%] justify-center sm:gap-10'>

          <div className='w-[25%] '>

            <div >
              <label for="name" class="block mb-2 text-sm font-medium text-white dark:text-white"> Company Name :</label>
              <input onChange={handleChange} value={data.companyname} name="companyName" type="text" id="name" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div>
              <label for="licensenumber" class="block mb-2 text-sm font-medium text-white dark:text-white">License Number:</label>
              <input onChange={handleChange} value={data.licensenumber} name="licenseNumber" type="text"  id="licensenumber" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="place" class="block mb-2 text-sm font-medium text-white dark:text-white">Place :</label>
              <input onChange={handleChange} value={data.place} name="place"  type="text" id="place" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="district" class="block mb-2 text-sm font-medium text-white dark:text-white">District :</label>
              <input onChange={handleChange} value={data.district} name="district" type="text" id="district" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            
            <div >
              <label for="description" class="block mb-2 text-sm font-medium text-white dark:text-white">Description :</label>
              <input onChange={handleChange} value={data.description} name="description" type="text" id="description" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>

            <div>
              <label for="Pin number" class="block mb-2 text-sm font-medium text-white dark:text-white">Pin Number:</label>
              <input onChange={handleChange} name='pin' value={data.pinnumber} type="text" id="pin number" pattern='[0-9]*'  title='please enter a valid pinnumber' maxLength={6} minLength={6}  class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number :</label>
              <input onChange={handleChange} value={data.contact} name="contactNumber" type="tel" id="contact"   pattern='\d{10}'  title='please enter a valid phone number'  class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  required />
            </div>
            <div >
              <label for="contact" class="block mb-2 text-sm font-medium text-white dark:text-white">Contact Number(alternative) :</label>
              <input onChange={handleChange} value={data.contactNumberalternative}  pattern='\d{10}'  title='please enter a valid phone number'  name="contactNumberalternative" type="tel" id="contact" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          </div>
          <div className='w-[25%]'>

          <div >
              <label for="licenseproof" class="block mb-2 text-sm font-medium text-white dark:text-white">Licence Proof :</label>
              <input onChange={handlefile} value={data.proof} name="licenseProof" type="file" id="licenseproof" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="" required />
            </div>
            <div >
              <label for="logo" class="block mb-2 text-sm font-medium text-white dark:text-white">Company Logo :</label>
              <input onChange={handlefile} value={data.companylogo} name="companyLogo" type="file" id="logo" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="owner" class="block mb-2 text-sm font-medium text-white dark:text-white"> Owner Name:</label>
              <input onChange={handleChange} value={data.ownerName} name="ownerName" pattern='^[a-zA-Z]*$' type="text" id="owner" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="aboutUs" class="block mb-2 text-sm font-medium text-white dark:text-white">About us :</label>
              <input onChange={handleChange} value={data.aboutUs} name="aboutUs" type="text" id="aboutUs" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="whyUs" class="block mb-2 text-sm font-medium text-white dark:text-white">Why us :</label>
              <input onChange={handleChange} value={data.whyUs} name="whyUs" type="text" id="whyUs" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            
            <div>
              <label for="email" class="block mb-2 text-sm font-medium text-white dark:text-white">Email:</label>
              <input onChange={handleChange} value={data.email} name="email" type="email" id="email" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white">Password:</label>
              <input onChange={handleChange}  name="password" pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\b)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$' title='password must contain atleast one lowercase letter,one uppercase letter,one digit,one special character ,and be 8 to 30 characters long' type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
            <div >
              <label for="password" class="block mb-2 text-sm font-medium text-white dark:text-white"> Confirm Password:</label>
              <input onChange={handleChange}  name="cpassword"  pattern='^(?=.*[a-z])(?=.*[A-Z])(?=.*\b)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$' title='password must contain atleast one lowercase letter,one uppercase letter,one digit,one special character ,and be 8 to 30 characters long'  type="password" id="password" class="shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
            </div>
          </div>
          
        </div>




        <div class="flex flex-wrap mb-5 mt-8">
    
  {/* <button type="submit" class="text-white m-auto m-a bg-red-800 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</button> */}
  <button type="submit" class="text-white m-auto m-a bg-orange-600 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SUBMIT</button>
  </div>
      </form>
          </div>
           

    )
}

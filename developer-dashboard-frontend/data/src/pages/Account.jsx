import React, { useEffect,useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux"
import { add } from './redux/UserSlice';
const Account = () => {
const [state,setState] = useState(1)
const [obj, Setobj] = useState({
  Name:"Demo",
  City:"Demo",
  Email:"Demo",
  Number:123,
})
const dispatch = useDispatch()
  useEffect(()=>{
    const sendReq = async()=>{
      
      try{
        console.log('running account')
        const response= await axios.get(`${import.meta.env.API_URL_FRONT}/account`);
        const data = response.data.message
        console.log(data)
        Setobj({Name:data.Name,City:data.City,Email:data.Email,Number:data.Number})
        dispatch(add({name:data.Name,city:data.City,email:data.Email,number:data.Number,image:data.Image}))
      }catch(error){
        console.log(error)
      }
    }
    sendReq()
  },[state])

  const dataUpdate= (e)=>{
    switch(e.target.name){
      case "name":{
        Setobj({...obj,Name:e.target.value})
      }break;
      case "email":{
        Setobj({...obj,Email:e.target.value})
      }break;
      case "number":{
        Setobj({...obj,Number:e.target.value})
      }break;
      case "city":{
        Setobj({...obj,City:e.target.value})
      }break;
    }
  }

  const [preview, Setpreview] = useState()
  const [pic,SetPic] = useState()
  const handlefilechange = (e)=>{
    const img = e.target.files[0]
    SetPic(img)
    Setpreview(URL.createObjectURL(img))
  }

  const upload = ()=>{
    const pictureSend = async()=>{
      const Data = new FormData()
      Data.append('image',pic)
      Data.append('name',obj.Name)
      Data.append('number',obj.Number)
      Data.append('email',obj.Email)
      Data.append('city',obj.City)
      try{
        console.log('upload run')
        const response = await axios.post(`${import.meta.env.VITE_API_URL_FRONT}/account`,Data,{
          headers:{"Content-Type":"multipart/form-data"},
        })
        console.log(response.data)

      }catch(error){
        console.log(error)
      }
    }
    pictureSend()
    setState(state+1)
  }
  const RedU = useSelector((state)=> state.UserSlice.user)
  console.log(JSON.stringify(RedU))
  
  return (
    <div>
      <div className='py-16 px-6 w-full'>
        <div className='flex justify-between gap-6 w-full flex-col'>
          <div className='flex justify-between w-full'>
            <h4 className='text-3xl ' style={{ color: "#212636", fontWeight: "500" }}>
              Account
            </h4>

          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className=' col-span-2 lg:col-span-1'>
            <div style={{ border: "1px solid #ebebeb" }} className='rounded-xl shadow-sm'>
              <div className='p-4' style={{ borderBottom: '1px solid #ebebeb' }}>
                <div className='w-full flex flex-col items-center justify-center gap-3'>
                  <img src={RedU.image} alt="" style={{ width: "80px", height: "80px", }} className='rounded-full' />
                  <h5 style={{ fontSize: "24px", color: "#212636" }}>{RedU.name}</h5>
                  <p className='text-md' style={{ color: "#667085" }}>{obj.City}</p>
                  <p className='text-md' style={{ color: "#667085" }}>GTM - 7 </p>
                </div>
              </div>
              <div className='py-4 px-4'>
                <button className='w-full hover:cursor-pointer' style={{ color: "#635bff", fontSize: "14px", fontWeight: "500" }}>
                  <input type="file" accept='image/*' onChange={handlefilechange} className='absolute z-10 opacity-0 hover:cursor-pointer' name='image' /><span className='relative hover:cursor-pointer'>Upload Picture</span></button>
              </div>
            </div>
            </div>
            <div
              className="flex flex-col col-span-2 lg:col-span-1 rounded-xl shadow-sm"
              style={{ border: "1px solid #f0f0f0" }}
            >
              <div
                className="w-full pt-8 pb-4 px-6"
                style={{ borderBottom: "1px solid #e6e8ed" }}
              >
                <h2 className="text-lg font-semibold" style={{ color: "#212636" }}>
                  Profile
                </h2>
                <span
                  className="text-sm"
                  style={{ color: "#667085", fontWeight: "400" }}
                >
                  The information can be edited
                </span>
              </div>
              <div className="w-full flex py-9 px-6">
                <div className="w-full grid grid-cols-4 gap-6">
                  <input type="text" placeholder="Name" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} value={RedU.name} name='name' onChange={dataUpdate}/>
                  <input type="email" placeholder="Email addrress" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} value={RedU.email} name='email' onChange={dataUpdate}/>
                  <input type="number" placeholder="Number" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} value={Number(RedU.number)} name='number' onChange={dataUpdate}/>
                  <input type="text" placeholder="City" className="col-span-4 sm:col-span-3 lg:col-span-2 outline-none rounded" style={{ padding: "16.5px 14px", color: "rgba(33,38,54,1)", border: "1px solid #e0e0e0" }} value={RedU.city} name='city' onChange={dataUpdate}/>
                </div>
              </div>
              <div className="flex justify-end p-2 w-full" style={{ borderTop: "1px solid #e6e8ed" }}>
                <button style={{ fontSize: "14px", fontWeight: "400", color: "white" }} className="py-2 px-5 bg-blue-700 hover:bg-blue-900 rounded" onClick={upload}>Save Details</button>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Account

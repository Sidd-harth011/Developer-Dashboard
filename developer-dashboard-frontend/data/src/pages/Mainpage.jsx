import React from 'react'
import SmallNav from './components/SmallNav'
import { Outlet } from 'react-router'
import { useSelector } from 'react-redux'

const Mainpage = () => {
  const value = useSelector((state)=> state.menu.value)
  return (
    <>
      <div>
        {true ? <SmallNav/> : ""} 
        <Outlet/>
      </div>
    </>
  )
}

export default Mainpage
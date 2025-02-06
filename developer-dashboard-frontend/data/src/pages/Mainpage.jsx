import React from 'react'
import SmallNav from './components/SmallNav'
import { Outlet } from 'react-router'

const Mainpage = () => {
  return (
    <>
      <div>
        <SmallNav/>
        <Outlet/>
      </div>
    </>
  )
}

export default Mainpage
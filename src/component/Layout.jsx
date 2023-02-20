import React from 'react'
import Navbar from './Navbar'
import SideBar from './SideBar'

function Layout(props) {
  return (
    <>
      <div className=''>
        <Navbar />
      </div>
      <div className='flex'>
        <SideBar />
        <div className='pt-[65px] w-full bg-[#F3F6F9] h-screen overflow-scroll'>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout
import React from 'react'
import NotificationBell from '../images/NotificationBell'
import WolibaImg from '../images/WolibaImg'
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div className='absolute w-screen text-[18px] font-medium font-rubik px-[25px] h-[65px] flex justify-between items-center bg-white z-[9999999999]'>
      <div className='cursor-pointer' onClick={() => { navigate('/blog') }}><WolibaImg /></div>
      <div className='flex gap-[15px] items-center'>
        <div className='mr-[10px]'>
          <NotificationBell />
        </div>
        <div className='font-light'>Hi, <span className='font-medium'>Adam</span></div>
        <div>
          <img className='w-[42px] h-[42px]' src={require('../images/adam.png')} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
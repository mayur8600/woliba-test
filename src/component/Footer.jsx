import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[65px] flex justify-between bg-[#FFFFFF] items-center text-[18px] text-[#979797] font-normal leading-[15.5px] px-[30px]'>
            <div className='flex gap-x-[25px]'>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Help Center</p>
                <p className='cursor-pointer'>Privacy Policy</p>
                <p className='cursor-pointer'>Terms of use</p>
            </div>
            <div>
                <p className='text-[#000000]'><span className='text-[#979797]'>&#9400;2023 </span>Training Amigo LLC.  All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
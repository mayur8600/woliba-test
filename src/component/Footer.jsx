import React from 'react'

function Footer() {
    return (
        <div className='w-full h-[65px] flex justify-between bg-[#FFFFFF] items-center text-[18px] text-[#979797] font-normal leading-[15.5px] px-[30px]'>
            <div className='flex gap-x-[25px]'>
                <p>About</p>
                <p>Help Center</p>
                <p>Privacy Policy</p>
                <p>Terms of use</p>
            </div>
            <div>
                <p className='text-[#000000]'><span className='text-[#979797]'>&#9400;2023 </span>Training Amigo LLC.  All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
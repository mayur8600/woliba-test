import React from 'react'
import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();
  return (
    <>
    <div className='w-screen h-screen flex justify-center'><img src={require('../images/errorImage.jpg')} alt='err'/>
    </div>
    <div className='flex justify-center w-full border mt-[-60px]'>
    <button onClick={() => navigate('/blog')} className='flex justify-center items-center bg-[#FD7175] text-[18px] text-[#FFFFFF] px-5 py-2 rounded-[6px]'>Go to Blog</button>
    </div>
    </>
  )
}

export default Error
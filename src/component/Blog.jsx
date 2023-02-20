import React from 'react'
import BlogLayout from './BlogLayout'
import Footer from './Footer'

function Blog() {

    return (
        <div className='w-full flex flex-col justify-between h-full items-center'>
            <div className='text-[18px] font-medium'><div className='pt-[25px] pb-[15px]'>Recommended Blogs</div>
                <div className='flex gap-x-[25px] flex-wrap'>
                    <BlogLayout content={'Avoiding Distractions While Working'} location={1} />
                    <BlogLayout content={'Healthy Habits'} location={2} />
                    <BlogLayout content={'How To Improve Your Work– Life Balance'} location={3} />
                </div>
            </div>
            <div className='w-full'>
            <Footer/>
            </div>
        </div>
    )
}

export default Blog
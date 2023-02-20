import React from 'react'
import QuizImage from '../images/QuizImage'
import Radio30 from '../images/Radio30'
import RadioHeart from '../images/RadioHeart'
import Views from '../images/Views'
import { capitalize } from '../utils/helper'
import Footer from './Footer'

function BlogDetails() {
    const flexStyle = 'flex gap-x-[10px] items-center leading-[20px]'
    return (
        <>
            <div className='w-[836px] m-auto'>
                <p className='text-[#002F47] text-[24px] leading-[24px] font-medium my-[25px]'>Simple Ways to Maintain Postivie Mental Health</p>
                <div className='bg-[#FFFFFF] w-full h-[584px]'>
                    <img className='w-full h-[524px]' src={require('../images/timeManagement.png')} alt='demo' />
                    <div className='w-full h-[60px] flex justify-between items-center px-[15px]'>
                        <div className='flex gap-x-[15px] text-[14px]'>
                            <div className={flexStyle}>
                                <RadioHeart />
                                <p className=''>25</p>
                            </div>
                            <div className={flexStyle}>
                                <Views />
                                <p>25</p>
                            </div>
                        </div>
                        <div className='flex gap-x-[15px] text-[#9C9C9C]'>
                            <div className={flexStyle}>
                                <Radio30 />
                                <p>Article</p>
                            </div>
                            <div className={flexStyle}>
                                <Radio30 />
                                <p>Quiz</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[800px] text-justify leading-[20px] font-normal text-[16px] text-[#002F47]'>
                    <div className='flex flex-col justify-between w-[793px] h-[120px] mt-[25px] mb-[61px]'>
                        <p>While regular exercise and soundnutrition are two of the best ways to maintain positive mental health, there are plenty of smaller things you can do to help work out that ol’ brain muscle. By taking a few minutes each day to reflect on your goals, your relationships, and your friendships, you’ll find that it gets easier to navigate life’s challenges.</p>
                        <p className='font-medium text-[#FD7175]'>Here are some of our favorite places to start:</p>
                    </div>
                    <p className='underline'>{capitalize('Keep a Gratitude Journal')}</p>
                    <div className='flex flex-col justify-between w-full h-[180px] mt-[15px] mb-[25px]'>
                        <p>Our brains are wired to cling to negative experiences more than positive ones. Unfortunately, that can create a vicious cycle in which negative thoughts beget more negative thoughts. Instead, try to focus on the positive parts of your day by keeping a gratitude journal. Carve some time each evening to keep track of at least three things you were grateful for that day. Then write down three or more things you were proud of yourself for.</p>
                        <p>If you’re ever feeling blue, you can whip out your journal to see all the people and activities that made you happy, and everything that made you proud. You might be shocked by how much of a mood booster this can be.</p>
                    </div>
                </div>
                <button className='w-[350px] h-[50px] bg-[#FD7175] flex items-center justify-center gap-x-[10px] rounded-[6px] text-[18px] text-[#FFFFFF] font-medium mb-[100px] buttonShaddow hover:bg-[#e36469]'><QuizImage /><p>Take Quiz</p></button>
            </div>
            <Footer />
        </>
    )
}

export default BlogDetails
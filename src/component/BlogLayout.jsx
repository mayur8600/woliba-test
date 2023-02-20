import React from 'react';
import Radio from '../images/Radio';
import { useNavigate } from "react-router-dom";

function BlogLayout(props) {
    const navigate = useNavigate();
    const radioAlignment = 'flex flex-col justify-between items-center'
    return (
        <div className='w-[399px] h-[324px] box-shadow'>
            <div className='container'>
                <img className='w-full h-[250px] image' src={require(props.location === 1 ? '../images/distraction.png' : props.location === 2 ? '../images/habbit.png' : '../images/balance.png')} alt='demo' />
                <div className="overlay"></div>
                <button onClick={() => navigate('/blogDetails')} className='bg-[#FD7175] text-[#FFFFFF] text-[18px] rounded-[6px] button hover:bg-[#e36469]'>Read Article</button>
            </div>
            <div className='flex justify-between w-full items-center h-[74px]'>
                <div className='flex w-full px-[15px] h-[48px] justify-between'>
                    <div className='w-[70%] flex items-center'>{props.content}</div>
                    <div className='flex gap-x-[15px] text-[12px] font-normal text-[#9C9C9C]'>
                        <div className={radioAlignment}>
                            <div>
                                <Radio />
                            </div>
                            <div>Article</div>
                        </div>
                        <div className={radioAlignment}>
                            <div>
                                <Radio />
                            </div>
                            <div>Quiz</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogLayout
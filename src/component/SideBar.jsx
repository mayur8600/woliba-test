import React, { useState, useEffect } from 'react'
import Blog from '../images/Blog'
import BlogFilled from '../images/BlogFilled'
import Cup from '../images/Cup'
import CupFilled from '../images/CupFilled'
import Home from '../images/Home'
import HomeFilled from '../images/HomeFilled'
import Solution from '../images/Solution'
import SolutionFilled from '../images/SolutionFilled'
import { useNavigate, useLocation } from "react-router-dom";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function SideBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isHovering, setIshovering] = useState(false)
  const [element, setElement] = useState('')
  const [path, setPath] = useState('')
  
  const handleMouseOver = (elements) => {
    switch (elements) {
      case 'home':
        setIshovering(true);
        setElement('home')
        break;

      case 'cup':
        setIshovering(true);
        setElement('cup')
        break;

      case 'sol':
        setIshovering(true);
        setElement('sol')
        break;

      case 'blog':
        setIshovering(true);
        setElement('blog')
        break;

      default:
        break;
    }
  }

  const handleMouseOut = () => {
    setIshovering(false);
    setElement('');
  }

  useEffect(() => {
    switch (location.pathname) {
      case '/': setPath('home')
        break;
      case '/home': setPath('home')
        break;
      case '/product': setPath('product')
        break;
      case '/solution': setPath('solution')
        break;
      case '/blog': setPath('blog')
        break;
      case '/blogDetails': setPath('blog')
        break;
      default:
        break;
    }
  }, [location.pathname])
  
  const box = `h-[40px] flex items-center justify-center hover:bg-[#E5EAED]`;
  const item = 'w-[40px] mx-auto cursor-pointer'
  const tooltipStyle = 'w-[120px] h-[40px] text-center bg-[#002F47] text-[#FFFFFF] font-medium text-[16px] z-[99999999] rounded-[3px] opacity-100'
  return (
    <div className='w-[80px] flex flex-col gap-y-[30px] pt-[65px] h-screen'>
      <div onClick={() => navigate('/')} className='w-[40px] mx-auto mt-[56px] cursor-pointer'>
          <div data-tooltip-id="home" data-tooltip-offset={12} data-tooltip-delay-show={0} className={`${box} ${path === 'home' && 'bg-[#E5EAED]'}`} onMouseOver={() => handleMouseOver('home')} onMouseOut={handleMouseOut}>
            {path === 'home' || (element === '/' && isHovering) ? <HomeFilled /> : <Home />}
          </div>
          <Tooltip className={tooltipStyle}  id="home" content="Home" place='right' />
      </div>
      <div onClick={() => navigate('/product')} className={item}>
          <div data-tooltip-id="product" data-tooltip-offset={12} data-tooltip-delay-show={0} className={`${box} ${path === 'product' && 'bg-[#E5EAED]'}`} onMouseOver={() => handleMouseOver('cup')} onMouseOut={handleMouseOut}>
            {path === 'product' || (element === 'cup' && isHovering) ? <CupFilled /> : <Cup />}
          </div>
          <Tooltip className={tooltipStyle}  id="product" content="Product" place='right' />
      </div>
      <div onClick={() => navigate('/solution')} className={item}>
          <div data-tooltip-id="solution" data-tooltip-offset={12} data-tooltip-delay-show={0} className={`${box} ${path === 'solution' && 'bg-[#E5EAED]'}`} onMouseOver={() => handleMouseOver('sol')} onMouseOut={handleMouseOut}>
            {path === 'solution' || (element === 'sol' && isHovering) ? <SolutionFilled /> : <Solution />}
          </div>
          <Tooltip className={tooltipStyle}  id="solution" content="Solution" place='right' />
      </div>
      <div onClick={() => navigate('/blog')} className={item}>
          <div data-tooltip-id="blog" data-tooltip-offset={12} data-tooltip-delay-show={0} className={`${box} ${path === 'blog' && 'bg-[#E5EAED]'}`} onMouseOver={() => handleMouseOver('blog')} onMouseOut={handleMouseOut}>
            {path === 'blog' || (element === 'blog' && isHovering) ? <BlogFilled /> : <Blog />}
          </div>
          <Tooltip className={tooltipStyle}  id="blog" content="Blog" place='right' />
      </div>
    </div>
  )
}

export default SideBar
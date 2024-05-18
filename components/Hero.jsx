/* eslint-disable @next/next/no-img-element */
import React from 'react'


const Hero = () => {
  return (
    <div className=' hero lg:h-[49rem] h-[40rem] relative'>
      <div className='text-white   top-[8rem] lg:right-[200px] lg:w-[35%]  absolute'>
        <div className=' flex '>
        <hr className='lg:block hidden bg-red mt-3 h-[3px] border-none w-[80px]' />
        <p className=' font-bold lg:text-[18px] text-[14px] ms-3'> we engineer the dreams</p>
        </div>
        <div className=' ps-3 '>
            <h1 className='font-bold text-[26px] lg:text-[40px]'>we focus on quality rather than quantity</h1>
            <p className='mt-10  w-[70%] lg:text-[18px] text-[#e2e8f0] '>When passion meet profession, an amazing result <br className=' hidden lg:block' /> generated</p>
            <button className=' mt-10 bg-red text-[16px] font-semibold uppercase px-10 py-4' >Read more</button>
        </div>
       
        
        </div>
        {/* <div className='  relative'>
       <img src="./assets/teamPic4.jpg" className=' lg:w-[100%] lg:h-auto h-[20rem]' alt="asd" />
       <div className='text-white top-[10px]  lg:top-[8rem] left-3 lg:right-[200px] lg:w-[35%]  absolute'>
        <div className=' flex '>
        <hr className='lg:block hidden bg-red mt-3 h-[3px] border-none w-[80px]' />
        <p className=' font-bold lg:text-[18px] text-[14px] ms-3'> we engineer the dreams</p>
        </div>
        <div className=' ps-3 '>
            <h1 className='font-bold text-[26px] lg:text-[40px]'>we focus on quality rather than quantity</h1>
            <p className='mt-10  w-[70%] lg:text-[18px] text-[#e2e8f0] '>When passion meet profession, an amazing result <br className=' hidden lg:block' /> generated</p>
            <button className=' mt-10 bg-red text-[16px] font-semibold uppercase px-10 py-4' >Read more</button>
        </div>
       
        
        </div>
        </div> */}
       
    </div>
  )
}

export default Hero
import React from 'react'

//Icons importée



const List = () => {
  return(
    <>
    <h1 className=' py-[20px] text-white text-[25px] content-center text-center justify-center'>Les categories les plus pertinente</h1>
<div className='grid gap-[10rem] grid-cols-3 items-center py-10 max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 '>
    
        <div className='px-[20px] py-[15px] rounded-[10px] bg-white hover:bg-[#eeedf7]  border-[1px]'>
           <div className='flex items-center '>
            <span className='font-semibold text-textColor text -[18px] '>Horreur</span>    
          </div>    
        </div>
        <div className='px-[20px] py-[15px] rounded-[10px] bg-white hover:bg-[#eeedf7]  border-[1px]'>
           <div className='flex items-center '>
            <span className='font-semibold text-textColor text -[18px]'>Action</span>    
          </div>
        </div>
        <div className='px-[20px] py-[15px] rounded-[10px] bg-white hover:bg-[#eeedf7]  border-[1px]'>
          <div className='flex items-center '>
            <span className='font-semibold text-textColor text -[18px]'>Hstoire</span>    
          </div>
        </div>
        <div className='px-[20px] py-[15px] rounded-[10px] bg-white hover:bg-[#eeedf7]  border-[1px]'>
          <div className='flex items-center '>
            <span className='font-semibold text-textColor text -[18px]'>Aventure</span>    
          </div>
        </div>
        <div className='px-[20px] py-[15px] rounded-[10px] bg-white hover:bg-[#eeedf7]  border-[1px]'>
          <div className='flex items-center '>
            <span className='font-semibold text-textColor text -[18px]'>Comédie</span>    
          </div>
        </div>
        <div className='px-[20px] py-[15px] rounded-[10px] bg-white hover:bg-[#eeedf7]  border-[1px]'>
          <div className='flex items-center '>
          <span className='font-semibold text-textColor text -[18px]'>Science Fiction</span>    
          </div>
        </div>
</div>    
</>
  )
}

export default List

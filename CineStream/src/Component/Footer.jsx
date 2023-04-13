import React from 'react'

//Icons importée
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'


const Footer = () => {
  return(
    <div className='footer p-[5rem] mb-4 bg-black rounded-[10px] gap-8 grid  items-center border[1px] justify-center max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>

      <div>
        <div className='logoDiv'>
          <h1 className='logo text-[25px] text-[#cc0101ea] pb-[1.5rem]'>
            <strong>Cine</strong>Stream
          </h1>
        </div>
      </div>
      
     
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb[1.5rem] text-[#cc0101ea]'>
          Ressources
        </span>
        <div className='grid gap-3'>
          <li className='text-[#cc0101ea] opacity-[.7] hover:opacity-[1]'>Comptes</li>
        </div>
      </div>
      <div className='grid'>
        <span className='divTitle text-[18px] font-semibold pb[1.5rem] text-[#cc0101ea]'>
          Info Contact
        </span>
        <div className='grid gap-3'>
          <small className='text-[14px] text-[#cc0101ea]'>
            CineStream@outlook.com
          </small>
          <div className='icons flex gap-4 py-[1rem]'>
            <AiFillInstagram className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#cc0101ea]'/>
            <AiFillFacebook className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#cc0101ea]'/>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px] w-[35px] rounded-full icon text-[#cc0101ea]'/>


          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer

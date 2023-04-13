import daisyui from 'daisyui';
import F2 from '../Assets/fullstackdev.jpg'
import PF from "../Assets/PF.jpg"
import PFB from "../Assets/PFbraking.jpg"
const Hero = () =>
<div className=' max-w-[1240px] mx-auto grid md:grid-cols-1 gap-8'>
<div className='flex min-h-screen align-center items-center justify-center bg-black-900'>
  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
    <div className='px-[20px] py-[15px] group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div h-96 w-72>
        <img class='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'src={PF}  />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
        <h1 className='font-Poppins text-3xl font-bold text-white'>Film</h1>
        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 tansition-opacity duration-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laborum? </p>
        <button className='font-Poppins rounded-full shadow shadow-black/60 bg-neutral-900 py-2 p-3.5 text -sm capitalize text-white'>serdtyguh</button>
      </div>
    </div>
    <div className='px-[20px] py-[15px] group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div h-96 w-72>
        <img class='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'src={PFB}  />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
        <h1 className='font-Poppins text-3xl font-bold text-white'>Film</h1>
        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 tansition-opacity duration-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laborum? </p>
        <button className='font-Poppins rounded-full shadow shadow-black/60 bg-neutral-900 py-2 p-3.5 text -sm capitalize text-white'>serdtyguh</button>
      </div>
    </div>
    <div className='px-[20px] py-[15px] group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div h-96 w-72>
        <img class='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'src={PF}  />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
        <h1 className='font-Poppins text-3xl font-bold text-white'>Film</h1>
        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 tansition-opacity duration-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laborum? </p>
        <button className='font-Poppins rounded-full shadow shadow-black/60 bg-neutral-900 py-2 p-3.5 text -sm capitalize text-white'>serdtyguh</button>
      </div>
    </div>
    <div className='px-[20px] py-[15px] group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div h-96 w-72>
        <img class='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'src={PFB}  />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
        <h1 className='font-Poppins text-3xl font-bold text-white'>Film</h1>
        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 tansition-opacity duration-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laborum? </p>
        <button className='font-Poppins rounded-full shadow shadow-black/60 bg-neutral-900 py-2 p-3.5 text -sm capitalize text-white'>serdtyguh</button>
      </div>
    </div>
    <div className='px-[20px] py-[15px] group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div h-96 w-72>
        <img class='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'src={PF}  />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
        <h1 className='font-Poppins text-3xl font-bold text-white'>Film</h1>
        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 tansition-opacity duration-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laborum? </p>
        <button className='font-Poppins rounded-full shadow shadow-black/60 bg-neutral-900 py-2 p-3.5 text -sm capitalize text-white'>serdtyguh</button>
      </div>
    </div>
    <div className='px-[20px] py-[15px] group relative items-center justify-center overflow-hidden cursor-pointer hover:shadow-xl hover:shadow-black/30 transition-shadow'>
      <div h-96 w-72>
        <img class='h-full w-full object-cover group-hover:rotate-3 group-hover:scale-125 transition-transform duration-500'src={PFB}  />
      </div>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-0 transition-all'>
        <h1 className='font-Poppins text-3xl font-bold text-white'>Film</h1>
        <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 tansition-opacity duration-30'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, laborum? </p>
        <button className='font-Poppins rounded-full shadow shadow-black/60 bg-neutral-900 py-2 p-3.5 text -sm capitalize text-white'>serdtyguh</button>
      </div>
    </div>
  </div>
</div>
</div>


export default Hero
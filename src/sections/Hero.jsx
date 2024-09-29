import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col items-center justify-center gap-16 max-container w-full h-[80vh]  p-8'>

      <div className='flex flex-col justify-center'>
        <h1 className='text-center text-white'>Hi, I'm Aneeque Junaid, a Front-End Developer</h1>
        <p className='text-center mt-8 text-white'>Building dynamic web applications with modern technologies</p>
      </div>

      <div className=''>
        <button className=' lg:p-8 bg-[#0066FF] outline-none rounded-full text-white lg:text-2xl p-4 text-xl'>
          Explore My Work
        </button>
      </div>

    </section>
  )
}

export default Hero
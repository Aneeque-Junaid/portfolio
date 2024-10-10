import React from 'react'
import github from "../../assets/icons/github.svg"
import linkedin from "../../assets/icons/linkedin.svg"

const Hero = () => (
    <section className='flex lg:flex-row flex-col items-center lg:justify-center my-16 lg:my-0 gap-16 w-full h-[80vh]'>

      <div className='mx-4'>
        <img src="https://placehold.co/400x400" alt="placeholder_img"  className="rounded-full object-contain"/>
      </div>

      <div className='text-center'>
        <p className='text-2xl text-gray-500 font-semibold font-palanquin'>Hello, I'm</p>
        <h1 className='text-[35px] font-bold sm:text-4xl my-2 sm:my-4 font-montserrat'>Aneeque Junaid</h1>
        <p className='text-2xl font-bold text-gray-500 sm:text-3xl font-palanquin'>Front-End Developer</p>

        <div className='mt-8 flex justify-center gap-4'>
          <button className='font-palanquin px-6 py-4 border-[1px] font-semibold rounded-full text-sm border-black hover:text-white hover:bg-[#333]'>Download CV</button>
          <button className='font-palanquin px-6 py-4 border-[1px] font-semibold rounded-full text-sm border-black bg-[#333] text-white hover:bg-black '>Contact Me</button>
        </div>

        <div className='flex justify-center gap-4 mt-6 '>
          <a href="https://github.com/Aneeque-Junaid" target='_blank'><img src={linkedin} height={40} width={40} alt="linkedinIcon" /></a>
          <a href="https://www.linkedin.com/in/aneeque-junaid/" target='_blank' ><img src={github} height={40} width={40} alt="githubIcon" /></a>
        </div>

      </div>

    </section>
)

export default Hero
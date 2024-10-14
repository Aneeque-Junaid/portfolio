import React from 'react'
import github from "../../assets/logos/github.svg"
import linkedin from "../../assets/logos/linkedin.svg"
import HeroImage from "../../assets/images/HeroImage.webp"

const Hero = () => (
    <section className='flex lg:flex-row flex-col-reverse items-center justify-center gap-8 w-full h-screen'>

      <div className='text-center lg:text-left'>
        <p className='text-2xl text-gray-500 font-semibold font-palanquin'>Hello, I'm</p>
        <h1 className='text-[35px] font-bold sm:text-4xl font-montserrat text-blue-400'>Aneeque Junaid</h1>
        <p className='text-2xl font-bold text-gray-500 sm:text-3xl font-palanquin'>Front-End Developer</p>
        <p className='text-2xl font-bold text-blue-400 sm:text-3xl font-palanquin'>I code beautiful and responsive website</p>

        <div className='mt-6 flex justify-center gap-4'>
          <button className='font-palanquin px-4 sm:px-6 py-4 border-[1px] font-semibold rounded-full text-sm text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white '>Download CV</button>
          <button className='font-palanquin px-4 sm:px-6 py-4 border-[1px] font-semibold rounded-full text-sm border-blue-400  bg-blue-400 text-white hover:bg-white hover:text-blue-400 '>Contact Me</button>
        </div>

        <div className='flex justify-center gap-4 mt-6 '>
          <a href="https://github.com/Aneeque-Junaid" target='_blank'><img src={linkedin} height={40} width={40} alt="linkedinIcon" /></a>
          <a href="https://www.linkedin.com/in/aneeque-junaid/" target='_blank' ><img src={github} height={40} width={40} alt="githubIcon" /></a>
        </div>

      </div>

      <div className=''>
        <img src={HeroImage} alt="Hero_image"  className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] object-contain"/>
      </div>

    </section>
)

export default Hero
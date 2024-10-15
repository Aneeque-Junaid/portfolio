import React from 'react';
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import HeroImage from "../../assets/images/HeroImage.webp";
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => (
  <section className='flex lg:flex-row flex-col-reverse items-center justify-center lg:justify-evenly gap-8 w-full h-screen px-16 mt-8 lg:mt-0'>

    <motion.div
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: 'easeOut' }} 
      className='text-center'
    >
      <p className='text-2xl text-[#6B7280] font-semibold mb-2 md:mb-0'>Hello, I'm</p>
      <h1 className='text-[35px] leading-[38px] font-bold sm:text-4xl text-[#3E3E3E] mb-2 md:mb-0'>Aneeque Junaid</h1>
      <p className='text-2xl font-bold text-[#6B7280] sm:text-3xl mb-2 md:mb-0'>Front-End Developer</p>
      <p className='text-2xl font-bold text-[#3E3E3E] sm:text-3xl'>I code beautiful and responsive websites</p>

      <div className='mt-6 flex justify-center gap-4'>
        <button className='px-4 sm:px-6 py-4 border font-semibold rounded-full text-sm text-white bg-primary hover:bg-bgclr hover:text-primary hover:border-primary '>
          Download CV
        </button>
        <button className='px-4 sm:px-6 py-4 border font-semibold rounded-full text-sm text-primary border-primary bg-bgclr hover:bg-primary hover:text-white '>
          Contact Me
        </button>
      </div>

      <div className='flex justify-center gap-4 mt-6'>
        <a href="https://github.com/Aneeque-Junaid" target='_blank' rel='noopener noreferrer'>
          <img src={linkedin} height={40} width={40} alt="linkedinIcon" />
        </a>
        <a href="https://www.linkedin.com/in/aneeque-junaid/" target='_blank' rel='noopener noreferrer'>
          <img src={github} height={40} width={40} alt="githubIcon" />
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: -50 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 1, ease: 'easeOut' }}  
    >
      <img src={HeroImage} alt="Hero_image" className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] object-contain" />
    </motion.div>

  </section>
);

export default Hero;

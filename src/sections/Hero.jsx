import React from 'react';
import github from "../../assets/logos/github.svg";
import linkedin from "../../assets/logos/linkedin.svg";
import HeroImage from "../../assets/images/HeroImage.webp";
import { motion } from 'framer-motion'; // Import Framer Motion

const Hero = () => (
  <section className='flex lg:flex-row flex-col-reverse items-center justify-center lg:justify-evenly gap-8 lg:h-screen w-full my-24 lg:my-0 px-4 lg:px-16'>

    <motion.div
      initial={{ opacity: 0, y: -40 }} 
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6, ease: 'easeOut' }} 
      className='text-center'
    >
      <p className='text-lg text-secondary font-semibold mb-2 md:mb-0'>Hello, I'm</p>
      <h1 className='text-2xl font-bold sm:text-3xl text-primary mb-2 md:mb-0 whitespace-nowrap'>Aneeque Junaid</h1>
      <p className='text-xl font-bold text-secondary sm:text-2xl mb-2 md:mb-0'>Front-End Developer</p>
      <p className='text-xl font-bold text-primary sm:text-2xl'>I code beautiful and responsive websites</p>

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
      initial={{ opacity: 0, y: -40 }}  
      animate={{ opacity: 1, y: 0 }}    
      transition={{ duration: 0.6, ease: 'easeOut' }}  
    >
      <img src={HeroImage} alt="Hero_image" className="lg:w-[400px] lg:h-[400px] w-[250px] h-[250px] object-contain" />
    </motion.div>

  </section>
);

export default Hero;

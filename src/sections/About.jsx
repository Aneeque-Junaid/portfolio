import React from 'react'

const About = () => (
    <section className='w-full pt-4'>
      
        <p className='text-lg text-[#333] text-center font-montserrat'>Get To Know More</p>
        <h1 className='text-4xl text-black font-bold text-center font-montserrat'>About Me</h1>

      <div className='flex flex-col lg:flex-row items-center justify-evenly lg:mx-16'>

        <div className='w-full h-full flex items-center justify-center'>
          <img src="https://placehold.co/300x300" alt="" className='rounded-3xl w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] ' />
        </div>

        <div className='h-full w-4/5 lg:w-full flex flex-col items-center justify-center'>

          <div className='flex sm:flex-row flex-col w-full justify-center gap-8 my-8 min-w-80'>

            <div className='p-8 border border-[#333] rounded-3xl text-center'>
              <h1 className='text-2xl font-bold text-black mb-4 font-palanquin'>Experience</h1>
              <p className='text-lg text-[#636161] font-montserrat'>Worked as a frontend developer on fiver projects.</p>
            </div>

            <div className='p-8 border border-[#333] rounded-3xl text-center'>
              <h1 className='text-2xl font-bold text-black mb-4 font-palanquin'>Education</h1>
              <p className='text-lg text-[#636161] font-montserrat'>Bachelors in Science in Software Engineering.</p>
            </div>

          </div>

          <p className='text-xl text-[#333] font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio sed dolorum atque voluptatum voluptatem cupiditate, harum consectetur eius tenetur ullam ea aperiam vero corporis numquam provident hic cum culpa reprehenderit impedit? Consequuntur illo reiciendis ipsam perspiciatis dignissimos autem ex ipsa nulla consectetur saepe, veniam non et quibusdam natus culpa? Minima.</p>
        
        </div>
      
      </div>

    </section>
  )

export default About
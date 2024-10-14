import aboutImage from "../../assets/images/AboutImage.webp"; 

const About = () => {
  return (
    <section className='flex flex-col lg:flex-row items-center justify-center w-full px-8 py-16 gap-16'>
      
      <div className='text-center lg:text-left max-w-lg'>
        <h2 className='text-3xl font-bold text-blue-400 font-montserrat'>About Me</h2>
        <p className='mt-4 text-lg text-gray-500 font-palanquin'>
          I am a passionate Front-End Developer who loves to create interactive and responsive web applications. 
          With a strong foundation in JavaScript, React, and CSS, I enjoy turning complex problems into simple, 
          beautiful, and intuitive designs. My goal is to build websites that deliver the best user experience possible.
        </p>
        <p className='mt-4 text-lg text-gray-500 font-palanquin'>
          In my free time, I like to explore new technologies, contribute to open-source projects, and enhance my coding skills.
        </p>
        <a href="/projects" className='mt-6 inline-block px-6 py-3 border border-blue-400 text-blue-400 rounded-full hover:bg-blue-400 hover:text-white font-palanquin'>
          View My Work
        </a>
      </div>
      
      <div className='flex justify-center'>
        <img src={aboutImage} alt="About me" className='w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] object-contain' />
      </div>
    </section>
  );
}

export default About;

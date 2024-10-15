import aboutImage from "../../assets/images/AboutImage.webp"; 

const About = () => {
  return (
    <section id="about" className='flex flex-col lg:flex-row items-center justify-center w-full px-8 py-16 gap-16'>
      
      <div className='text-center lg:text-left max-w-lg'>
        <h2 className='text-3xl font-bold text-primary underline'>About Me</h2>
        <p className='mt-4 text-lg text-primary'>
          I am a passionate Front-End Developer who loves to create interactive and responsive web applications. 
          With a strong foundation in JavaScript, React, and CSS, I enjoy turning complex problems into simple, 
          beautiful, and intuitive designs. My goal is to build websites that deliver the best user experience possible.
        </p>
        <p className='mt-4 text-lg text-primary'>
          In my free time, I like to explore new technologies, contribute to open-source projects, and enhance my coding skills.
        </p>
        <a href="/projects" className='mt-6 inline-block px-6 py-3 border border-primary text-primary rounded-full hover:bg-primary hover:text-white'>
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

import { Nav, Hero, About, Projects, Skills, Contact, Footer } from "./index";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const App = () => {

  const [aboutRef, aboutInView] = useInView({
  triggerOnce: true,
  threshold: 0.2,
})

const [skillsRef, skillsInView] = useInView({
  triggerOnce: true,
  threshold: 0.2,
})

const [projectsRef, projectsInView] = useInView({
  triggerOnce: true,
  threshold: 0.1,
})

const [contactRef, contactInView] = useInView({
  triggerOnce: true,
  threshold: 0.2,
})


  return (
    <>
      <main className="relative max-container text-montserrat bg-bgclr">

        <Nav />

        <Hero />

        <motion.section
          ref={aboutRef}
          initial={{ opacity: 0, y: 50 }}
          animate={aboutInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <About />
        </motion.section>

        <motion.section
          ref={skillsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={skillsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Skills />
        </motion.section>
        
        <motion.section
          ref={projectsRef}
          initial={{ opacity: 0, y: 50 }}
          animate={projectsInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Projects />
        </motion.section>

        <motion.section
          ref={contactRef}
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <Contact />
        </motion.section>

        <Footer />
        
      </main>
    </>
  );
}

export default App;

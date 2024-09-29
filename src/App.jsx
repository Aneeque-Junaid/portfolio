import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"


const App = () => {
  return (
    <>
      <main>

        <Nav />

        <section>
          <Hero />
        </section>

        <section>
          <About />
        </section>

        <section>
          <Projects />
        </section>

        <section>
          <Skills />
        </section>

        <section>
          <Contact />
        </section>

        <section>
          <Footer />
        </section>

      </main>
    </>
  )
}

export default App
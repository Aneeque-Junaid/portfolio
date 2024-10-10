import {Nav, Hero, About, Projects, Skills, Contact, Footer} from "./index"



const App = () => {
  return (
    <>
      <main className="relative max-container">

        <Nav />

        <section>
          <Hero />
        </section>

        <section>
          <About />
        </section>

        <section >
          <Skills />
        </section>

        <section>
          {/* <Projects /> */}
        </section>

        <section>
          {/* <Contact /> */}
        </section>

        <section>
          {/* <Footer /> */}
        </section>

      </main>
    </>
  )
}

export default App
import { Nav, Hero, About, Projects, Skills, Contact, Footer } from "./index";

const App = () => {
  return (
    <>
      <main className="relative max-container text-montserrat bg-bgclr">

        <Nav />

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />
        
        <Footer />
        
      </main>
    </>
  );
}

export default App;

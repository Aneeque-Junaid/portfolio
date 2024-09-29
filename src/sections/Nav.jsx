import hamburger from "../../assets/icons/hamburger.svg"
import close from "../../assets/icons/close.svg"
import { useState } from "react"

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen( prev => !prev )
  }

  return (
    <nav className="bg-bgclr px-8 py-8 flex justify-between items-center shadow-lg">

      <div>
        <a href="/" className="font-montserrat font-extrabold text-2xl italic text-primary">
          Aneeque 
        </a>
      </div>

      <ul className="flex gap-16 items-center text-xl font-palanquin text-txtclr max-lg:hidden ">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      
      <div className="lg:hidden z-50" onClick={handleMenu}>
        {isOpen ? (
          <img src={close} alt="closeIcon" width={25} height={25} />
        ) : (
          <img src={hamburger} alt="hamburgerIcon" width={25} height={25} />
        )}
      </div>


      {isOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-bgclr flex flex-col items-center justify-center text-txtclr">
          <ul className="flex flex-col items-center gap-8 text-2xl font-palanquin">
            <li><a href="/about" onClick={handleMenu}>About</a></li>
            <li><a href="/projects" onClick={handleMenu}>Projects</a></li>
            <li><a href="/skills" onClick={handleMenu}>Skills</a></li>
            <li><a href="/contact" onClick={handleMenu}>Contact</a></li>
          </ul>
        </div>
      )}


    </nav>
  )
}

export default Nav
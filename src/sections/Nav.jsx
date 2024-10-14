import close from "../../assets/icons/close.svg"
import hamburger from "../../assets/icons/hamburger.svg"
import { useState } from "react"

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen( prev => !prev )
  }

  return (
    <nav className="px-8 sm:px-16 py-4 flex justify-between items-center">

      <div>
        <a href="/" className="font-montserrat font-bold text-3xl text-blue-400 ">
          Aneeque 
        </a>
      </div>

      <ul className="flex gap-16 items-center text-2xl font-palanquin text-blue-400 font-semibold max-lg:hidden ">
        <li><a href="/about">About</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/skills">Skills</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

      
      <div className="lg:hidden z-50" onClick={handleMenu}>
        {isOpen ? (
          <img src={close} alt="closeIcon" width={30} height={30} />
        ) : (
          <img src={hamburger} alt="hamburgerIcon" width={30} height={30} />
        )}
      </div>


      {isOpen && (
        <div className="absolute z-40 inset-0 bg-[#0d0d0d] top-0 left-0 w-full h-screen flex flex-col items-center justify-center font-semibold text-[#f6f6f6] text-2xl">
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
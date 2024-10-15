import close from "../../assets/icons/close.svg"
import hamburger from "../../assets/icons/hamburger.svg"
import { useState } from "react"
import { Link } from "react-scroll"
import { motion } from "framer-motion";

const Nav = () => {

  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    setIsOpen( prev => !prev )
  }

  return (
    <nav className="px-8 sm:px-16 py-4 flex justify-between items-center">

        <div>
          <a href="/" className="font-bold text-3xl text-primary ">
            Aneeque 
          </a>
        </div>

        <ul className="flex gap-16 items-center text-2xl text-primary font-semibold max-lg:hidden ">
          <li className=" cursor-pointer "> <Link to="about" smooth={true} duration={100} >About</Link></li>
          <li className=" cursor-pointer "> <Link to="skills" smooth={true} duration={100} >Skills</Link></li>
          <li className=" cursor-pointer "> <Link to="projects" smooth={true} duration={100} >Projects</Link></li>
          <li className=" cursor-pointer "> <Link to="contact" smooth={true} duration={100} >Contact</Link></li>
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
          <ul className="flex flex-col items-center gap-8 text-2xl">
          <li className=" cursor-pointer"> <Link onClick={handleMenu} to="about" smooth={true} duration={100} >About</Link></li>
        <li className=" cursor-pointer"> <Link onClick={handleMenu} to="skills" smooth={true} duration={100} >Skills</Link></li>
        <li className=" cursor-pointer"> <Link onClick={handleMenu} to="projects" smooth={true} duration={100} >Projects</Link></li>
        <li className=" cursor-pointer"> <Link onClick={handleMenu} to="contact" smooth={true} duration={100} >Contact</Link></li>
          </ul>
        </div>
      )}


    </nav>
  )
}

export default Nav
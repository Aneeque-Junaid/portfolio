import close from "../../assets/icons/close.svg";
import hamburger from "../../assets/icons/hamburger.svg";
import { useState } from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen((prev) => !prev);
    // Disable or enable scrolling when the menu is open
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <nav className="px-8 sm:px-16 py-4 flex justify-between items-center relative z-50 mb-8 lg:mb-0">
      <motion.div
        initial={{ opacity: 0, y: -40 }}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <a href="/" className="font-bold text-3xl text-primary">
          Aneeque
        </a>
      </motion.div>

      <motion.ul className="flex gap-16 items-center text-2xl text-primary font-semibold max-lg:hidden"
        initial={{ opacity: 0, y: -40 }}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <li className="cursor-pointer">
          <Link to="about" smooth={true} duration={100}>
            About
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="skills" smooth={true} duration={100}>
            Skills
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="projects" smooth={true} duration={100}>
            Projects
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="contact" smooth={true} duration={100}>
            Contact
          </Link>
        </li>
      </motion.ul>

      <motion.div className="lg:hidden z-50" onClick={handleMenu}
        initial={{ opacity: 0, y: -40 }}  
        animate={{ opacity: 1, y: 0 }}    
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {isOpen ? (
          <img src={close} alt="closeIcon" width={30} height={30} />
        ) : (
          <img src={hamburger} alt="hamburgerIcon" width={30} height={30} />
        )}
      </motion.div>

      {isOpen && (
        <div
          onClick={handleMenu}
          className="absolute z-50 inset-0 bg-bgclr top-0 left-0 w-full h-screen flex flex-col items-center justify-center font-semibold text-primary text-2xl"
        >
          <img src={close} alt="closeIcon" width={30} height={30} className="absolute right-8 top-7" />
          <ul className="flex flex-col items-center gap-8 text-2xl">
            <li className="cursor-pointer">
              <Link onClick={handleMenu} to="about" smooth={true} duration={100}>
                About
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link onClick={handleMenu} to="skills" smooth={true} duration={100}>
                Skills
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link onClick={handleMenu} to="projects" smooth={true} duration={100}>
                Projects
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link onClick={handleMenu} to="contact" smooth={true} duration={100}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;

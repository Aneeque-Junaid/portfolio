import Nav from "./sections/Nav"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Projects from "./sections/Projects"
import Skills from "./sections/Skills"
import Contact from "./sections/Contact"
import Footer from "./sections/Footer"


import html from '../assets/logos/html.svg';
import css from '../assets/logos/css.svg';
import tailwindcss from '../assets/logos/tailwindcss.svg';
import javascript from '../assets/logos/javascript.svg';
import react from '../assets/logos/react.svg';
import redux from '../assets/logos/redux.svg';


export const skills = [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'JavaScript', logo: javascript }, // Corrected
    { name: 'React', logo: react },           // Corrected
    { name: 'Tailwind CSS', logo: tailwindcss }, // Corrected
    { name: 'Redux', logo: redux },
];
  

export {Nav, Hero, About, Projects, Skills, Contact, Footer}

export const projects = [
    {
      id: 1,
      title: 'Project One',
      image: 'path/to/project-one-image.jpg', // Replace with your project image path
      description: 'This is a brief description of Project One.',
      techStack: {
        tech: ["React", "Node.js", "MongoDB", "Express"],
      },
    },
    {
      id: 2,
      title: 'Project Two',
      image: 'path/to/project-two-image.jpg', // Replace with your project image path
      description: 'This is a brief description of Project Two.',
      techStack: {
        tech: ["React", "Node.js", "MongoDB", "Express"],
      },
    },
    // Add more projects as needed
  ];
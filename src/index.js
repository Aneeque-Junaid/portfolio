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
import nextjs from '../assets/logos/nextjs.svg';

import hoobank from "../assets/images/hoobank.png"
import niketailwind from "../assets/images/niketailwind.png"
import BlogSphere from "../assets/images/BlogSphere.png"
import GearHive from "../assets/images/GearHiveHero.png"

export const skills = [
    { name: 'HTML', logo: html },
    { name: 'CSS', logo: css },
    { name: 'JavaScript', logo: javascript }, // Corrected
    { name: 'React', logo: react },           // Corrected
    { name: 'NextJS', logo: nextjs },
    { name: 'Tailwind CSS', logo: tailwindcss }, // Corrected
    { name: 'Redux', logo: redux },
];

export const CVURL = 'https://drive.google.com/uc?export=download&id=1Gmb-7rVvEHIx7-ZD7RcpCAXZ-xinq0I_'
  

export {Nav, Hero, About, Projects, Skills, Contact, Footer}

export const projects = [
    {
      id: 1,
      title: 'BlogSphere',
      link: 'https://blogsphere-project.vercel.app/',
      image: BlogSphere, 
      description: "BlogSphere is a modern blogging platform built with Next.js, featuring dynamic routing, responsive design, and server-side data fetching to deliver a seamless and engaging user experience.",
      techStack: {
          tech: ["NextJS", "TailwindCSS", "NodeJS", "ExpressJS", "MongoDB"],
      },
    },
    {
      id: 2,
      title: 'GearHive',
      link: 'https://gearhive.vercel.app/',
      image: GearHive, 
      description: "GearHive is a cutting-edge e-commerce platform built with Next.js, offering seamless navigation, dynamic product displays, and responsive design.",
      techStack: {
        tech: ["NextJS", "TailwindCSS", "ShadcnUI", "Sonner"],
      },
    },
    {
      id: 3,
      title: 'Hoobank',
      link: 'https://hoobank1001.netlify.app/',
      image: hoobank, 
      description: 'Hoobank is a modern banking application built with React and Tailwind CSS. It features a sleek user interface that allows users to manage their finances effortlessly, showcasing responsive design and interactive components for an enhanced user experience.',
      techStack: {
        tech: ["React", "TailwindCSS", "JavaScript"],
      },
    },
    {
      id: 4,
      title: 'Nike Website',
      link: 'https://shoewebsitenike.netlify.app/',
      image: niketailwind, 
      description: "The Nike Website is a visually appealing landing page developed with React and Tailwind CSS. It highlights Nike's latest products with a clean, responsive layout, creating an engaging experience for users.",
      techStack: {
        tech: ["React", "TailwindCSS", "JavaScript"],
      },
    },
  ];
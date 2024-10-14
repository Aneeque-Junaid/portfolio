// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">Connect with me:</p>
        <div className="flex justify-center mb-4 gap-4">
          <a href="https://github.com/Aneeque-Junaid" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/aneeque-junaid/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Aneeque. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

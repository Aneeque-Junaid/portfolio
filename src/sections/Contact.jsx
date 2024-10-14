// Contact.jsx
import React from 'react';

const Contact = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:aneequej2002@gmail.com";
  };

  return (
    <section className="py-10" id="contact">
      <div className="container mx-auto px-4 flex justify-center">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-full md:w-1/2 text-center">
          <h2 className="text-3xl font-semibold mb-5 text-primary underline">Get In Touch</h2>
          <p className="mb-8 text-secondary">I would love to hear from you!</p>
          <button 
            onClick={handleEmailClick} 
            className=" px-6 py-2 bg-white text-primary border border-primary p-3 rounded-full hover:bg-primary hover:text-white hover:border-primary"
          >
            Email Me
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// src/pages/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div className="about-us-page">
      <header className="about-us-header bg-[#803fef] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg">Learn more about Springdale Public School</p>
        </div>
      </header>
      <section className="history-section py-8">
        <div className="container mx-auto w-[80vw]">
          <h2 className="text-4xl font-bold mb-4 text-center text-violet-400">Our History</h2>
          <p className="text-lg text-center">
            Springdale Public School was founded in 1985 with the aim of providing quality education to the local community. Over the years, we have grown into a well-respected institution known for our commitment to academic excellence and holistic development.
          </p>
        </div>
      </section>
      <section className="mission-vision-values-section bg-violet-100 py-8 px-12 shadow-md">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#803fef]">Our Mission</h3>
            <p className="text-lg">
              To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#803fef]">Our Vision</h3>
            <p className="text-lg">
              To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-[#803fef]">Our Values</h3>
            <p className="text-lg">
              Integrity, Excellence, Innovation, Respect, and Responsibility.
            </p>
          </div>
        </div>
      </section>
      <section className="principal's-message bg-violet-100 py-8 mt-8 shadow-md">
        <div className="container mx-auto text-center flex flex-col-reverse gap-4 xl:flex-row xl:justify-around xl:items-center px-12">
          <div className='message flex flex-col items-center gap-2'>
            <h2 className="text-3xl font-bold mb-4 text-[#803fef]">Principal's Message</h2>
            <blockquote className="bg-white w-[50vw] p-4 border-l-4 border-[#803fef] text-gray-700 italic">
              “At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future. Our dedicated faculty and innovative programs are designed to support each student's unique journey.”
            </blockquote>
          </div>
          <img src="https://via.placeholder.com/300" alt="Principal" className="mx-auto rounded-full" />
        </div>
      </section>
      <section className='flex flex-col justify-center items-center py-8'>
        <h2 className="text-3xl font-bold mb-2 text-violet-400">Infrastructure and Facilities</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className='p-1 text-lg'><strong>State-of-the-art Science and Computer Labs:</strong> Equipped with the latest technology to enhance learning and practical skills.</li>
          <li className='p-1 text-lg'><strong>Spacious and Well-equipped Classrooms:</strong> Designed to facilitate effective teaching and a comfortable learning environment.</li>
          <li className='p-1 text-lg'><strong>Library:</strong> A vast collection of books and digital resources to support academic research and foster a love of reading.</li>
          <li className='p-1 text-lg'><strong>Sports Facilities:</strong> Includes a playground, gymnasium, and swimming pool to encourage physical fitness and teamwork.</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;

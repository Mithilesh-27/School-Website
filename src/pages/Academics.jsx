import React from 'react';

const Academics = () => {
  return (
    <div className="academics-page">
      <header className="academics-header bg-[#803fef] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Academics</h1>
          <p className="text-lg mx-2">Explore our academic programs and resources</p>
        </div>
      </header>
      <section className="curriculum-section py-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center text-violet-400">Our Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#803fef]">Primary (Grades 1-5)</h3>
              <ul className="list-disc list-inside text-lg">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#803fef]">Secondary (Grades 6-10)</h3>
              <ul className="list-disc list-inside text-lg">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-[#803fef]">Senior Secondary (Grades 11-12)</h3>
              <h4 className="text-xl font-semibold mb-2">Science Stream</h4>
              <ul className="list-disc list-inside text-lg">
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
              <h4 className="text-xl font-semibold mt-4 mb-2">Commerce Stream</h4>
              <ul className="list-disc list-inside text-lg">
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="teaching-methodologies-section bg-violet-100 py-8 shadow-md">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#803fef] text-center">Teaching Methodologies</h2>
          <p className="text-lg mx-2">
            We use a blend of traditional and modern teaching techniques to cater to different learning styles.
          </p>
        </div>
      </section>
      <section className="resources-section py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-violet-400 text-center">Educational Resources</h2>
          <p className="text-lg mx-2">
            Digital classrooms, interactive learning modules, and access to online educational platforms.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Academics;

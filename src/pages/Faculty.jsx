// src/pages/Faculty.js
import React from 'react';

const Faculty = () => {
  const facultyMembers = [
    {
      name: 'John Doe',
      position: 'Principal',
      qualification: 'M.Ed',
      experience: '20 years of experience in educational administration',
    },
    {
      name: 'Jane Smith',
      position: 'Vice Principal',
      qualification: 'M.Sc. in Physics',
      experience: '15 years of teaching experience',
    },
    {
      name: 'Emily Johnson',
      position: 'English Teacher',
      qualification: 'M.A. in English',
      experience: '10 years of teaching experience',
    },
    {
      name: 'Michael Brown',
      position: 'Mathematics Teacher',
      qualification: 'M.Sc. in Mathematics',
      experience: '8 years of teaching experience',
    },
    {
      name: 'Sophia Davis',
      position: 'Science Teacher',
      qualification: 'M.Sc. in Chemistry',
      experience: '12 years of teaching experience',
    },
    {
      name: 'David Wilson',
      position: 'Computer Science Teacher',
      qualification: 'B.Tech in Computer Science',
      experience: '5 years of teaching experience',
    },
  ];

  return (
    <div className="faculty-page">
      {/* Header Section */}
      <header className="faculty-header bg-[#803fef] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Faculty</h1>
          <p className="text-lg">Meet our dedicated and experienced faculty members</p>
        </div>
      </header>

      {/* Faculty Profiles Section */}
      <section className="profiles-section py-8">
        <div className="container mx-auto px-12">
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-400">Faculty Profiles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facultyMembers.map((member, index) => (
              <div key={index} className="p-4 bg-violet-100 rounded shadow-md text-center">
                <img src="https://via.placeholder.com/150" alt="Principal" className="mx-auto rounded-full mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-[#803fef]">{member.name}</h3>
                <p className="text-lg font-semibold">{member.position}</p>
                <p className="text-lg">{member.qualification}</p>
                <p className="text-lg">{member.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;

// src/pages/Students.js
import React from 'react';

const Students = () => {
  const achievements = [
    "John Smith - National Level Math Olympiad Winner",
    "Sarah Lee - Gold Medalist in State Swimming Championship",
    "Tech Innovators Club - Winners of Inter-School Robotics Competition"
  ];

  const studentCouncil = [
    { position: "President", name: "Amy Parker", grade: 12 },
    { position: "Vice President", name: "Rajiv Mehta", grade: 11 },
    { position: "Secretary", name: "Lisa Wong", grade: 10 },
  ];

  return (
    <div className="students-page">
      <header className="students-header bg-[#803fef] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Students</h1>
          <p className="text-lg">Experience the vibrant life at Springdale Public School</p>
        </div>
      </header>
      <section className="detailed-activities-section py-8 bg-violet-100 px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-400">Extracurricular Activities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Music</h3>
              <p className="text-lg">Our music program encourages students to explore their musical talents through various instruments and vocal training.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Dance</h3>
              <p className="text-lg">Students can participate in various dance forms, from classical to contemporary, enhancing their physical and artistic skills.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Drama</h3>
              <p className="text-lg">Our drama club provides a platform for students to express themselves through theater and stage performances.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Art</h3>
              <p className="text-lg">Students can explore various forms of visual arts, including painting, sculpture, and digital art.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Sports</h3>
              <p className="text-lg">We offer a wide range of sports activities, including soccer, basketball, cricket, and athletics, promoting physical fitness and teamwork.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Robotics</h3>
              <p className="text-lg">Our robotics club allows students to explore the world of robotics and participate in competitions and projects.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Debate Club</h3>
              <p className="text-lg">The debate club helps students develop their public speaking and critical thinking skills through regular debates and discussions.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Science Club</h3>
              <p className="text-lg">Our science club encourages students to explore scientific concepts and conduct experiments, fostering a love for science.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="detailed-clubs-section py-8 px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-400">Clubs and Societies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Literary Society</h3>
              <p className="text-lg">The literary society fosters a love for literature and writing through workshops, book discussions, and writing contests.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Environmental Club</h3>
              <p className="text-lg">Our environmental club engages students in activities focused on environmental conservation and sustainability.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Astronomy Club</h3>
              <p className="text-lg">The astronomy club provides opportunities for students to explore the wonders of the universe through observations and discussions.</p>
            </div>
            <div className="p-4 bg-white rounded shadow-md text-center">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Coding Club</h3>
              <p className="text-lg">Our coding club helps students develop their programming skills through projects, hackathons, and coding challenges.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="achievements py-8 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#803fef]">Achievements</h2>
          <ul className="list-disc list-inside text-center">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-lg">{achievement}</li>
            ))}
          </ul>
        </div>
      </section>
      <section className="student-council py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-400">Student Council</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            {studentCouncil.map((member, index) => (
              <div key={index} className="student-council-member">
                <h3 className="text-2xl font-bold">{member.position}</h3>
                <p className="text-lg">{member.name}, Grade {member.grade}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Students;

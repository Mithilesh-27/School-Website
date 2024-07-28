import React from 'react';

const Admissions = () => {
  return (
    <div className="admissions-page">
      <header className="admissions-header bg-[#803fef] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Admissions</h1>
          <p className="text-lg">Join Springdale Public School</p>
        </div>
      </header>
      <section className="process-section py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-400">Admission Process</h2>
          <p className="text-lg mb-8 text-center mx-2">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </div>
      </section>
      <section className="criteria-section bg-violet-100 py-8 shadow-md">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-[#803fef]">Admission Criteria</h2>
          <p className="text-lg mb-8 text-center mx-2">
            Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
          </p>
        </div>
      </section>
      <section className="dates-section py-8">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center text-violet-400">Important Dates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-8">
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Admission Form Availability</h3>
              <p className="text-lg">March 1st</p>
            </div>
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Last Date for Submission</h3>
              <p className="text-lg">March 31st</p>
            </div>
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Entrance Test</h3>
              <p className="text-lg">April 15th</p>
            </div>
            <div className="p-4 bg-violet-100 rounded shadow-md">
              <h3 className="text-2xl font-bold mb-2 text-[#803fef]">Announcement of Results</h3>
              <p className="text-lg">April 30th</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Admissions;

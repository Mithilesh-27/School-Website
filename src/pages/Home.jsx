import React from 'react'
import Carousel from '../components/Carousel'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex flex-col justify-center items-center bg-violet-100 py-4'>
        <img src="/logo.png" alt="logo" className='w-40' />
        <h1 className='text-3xl pb-2 text-[#803fef] font-bold mt-4'>Springdale Public School</h1>
        <span className='text-lg'>Welcome to Springdale Public School, where we nurture young minds for a brighter future.</span>
      </div>
      <Carousel />
      <section className="quick-links-section bg-gray-100 py-8">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-violet-400">Quick Links</h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <Link to="/about-us" className="btn btn-primary">About Us</Link>
            <Link to="/academics" className="btn btn-primary">Academics</Link>
            <Link to="/admissions" className="btn btn-primary">Admissions</Link>
            <Link to="/faculty" className="btn btn-primary">Faculty</Link>
            <Link to="/students" className="btn btn-primary">Students</Link>
            <Link to="/gallery" className="btn btn-primary">Gallery</Link>
            <Link to="/contact-us" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

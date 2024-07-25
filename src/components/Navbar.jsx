import { NavLink } from 'react-router-dom'
import { memo } from 'react'

const Navbar = () => {
  return (
    <nav className="bg-violet-400 text-white text-lg py-2 px-4 sticky top-0 z-20 border-b-[3px] border-[#803fef] flex justify-between items-center">
      <img src="/logo.png" alt="logo" className='w-12' />
      <ul className="flex justify-center gap-16 items-center">
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/">Home</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/about-us">About Us</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/academics">Academics</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/admissions">Admissions</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/faculty">Faculty</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/students">Students</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/gallery">Gallery</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : ""}}} className='pb-5 pt-2 rounded-tr-md rounded-tl-md px-4' to="/contact-us">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default memo(Navbar)

import { NavLink } from 'react-router-dom'
import { memo, useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
 
  return (
    <nav className="bg-violet-400 text-white text-lg py-2 px-4 sticky top-0 z-20 border-b-[3px] border-[#803fef] flex justify-between items-end">
      <img src="/logo.png" alt="logo" className='w-12' />
      <button className='lg:hidden bg-[#803fef] rounded-xl p-2 cursor-pointer' onClick={() => toggleMenu()}><img src={isOpen ? "/close.svg" : "/hamburger.svg"} alt="menu" /></button>
      <ul className={`flex flex-col justify-end absolute transition-all duration-300 ease-in-out ${isOpen ? 'right-0 opacity-100 visible' : '-right-1/4 opacity-0 invisible'} lg:opacity-100 lg:visible lg:right-0 bg-[#00000088] lg:bg-inherit lg:relative top-16 pl-2 py-4 lg:p-0 lg:top-0 lg:flex-row lg:justify-center gap-4 xl:gap-12 items-end`}>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/">Home</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/about-us">About Us</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/academics">Academics</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/admissions">Admissions</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/faculty">Faculty</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/students">Students</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/gallery">Gallery</NavLink></li>
        <li><NavLink style={({ isActive }) => {return {backgroundColor: isActive ? "#803fef" : "", fontWeight: isActive? 'bold' : ""}}} className='w-full px-6 py-2 text-center lg:pb-3 lg:pt-2 lg:rounded-tr-md lg:rounded-tl-md lg:px-4' to="/contact-us">Contact Us</NavLink></li>
      </ul>
    </nav>
  );
};

export default memo(Navbar)

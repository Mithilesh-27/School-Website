import React, { useState } from 'react'

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fHNjaWVuY2UlMjBleGhpYml0aW9ufGVufDB8fDB8fHww',
    'https://images.pexels.com/photos/8224718/pexels-photo-8224718.jpeg?auto=compress&cs=tinysrgb&w=600',
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const getSlideDescription = (index) => {
    if (index === 0) {
      return 'Cultural Fest - Embracing Diversity and Creativity';
    } else if (index === 1) {
      return 'Science Exhibition - Showcasing Student Innovations';
    } else {
      return 'Annual Sports Day - Celebrating Excellence in Sports';
    }
  }

  return (
    <div className="relative max-w-full mx-auto overflow-hidden bg-violet-100">
      <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img src={slide} alt={`Slide ${index}`} className="w-full h-[36rem] object-cover" />
            <div className='text-center text-2xl pt-2 font-bold text-[#803fef] py-4'>{getSlideDescription(index)}</div>
          </div>
        ))}
      </div>
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-gray-800 text-2xl rounded-full p-2 shadow-lg hover:bg-gray-200">&lt;</button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-gray-800  text-2xl rounded-full p-2 shadow-lg hover:bg-gray-200">&gt;</button>
    </div>

  )
}

export default Carousel

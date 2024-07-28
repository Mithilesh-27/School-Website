import React from 'react'

const Gallery = () => {
  const photos = [
    {
      src: "https://via.placeholder.com/600x400?text=Sports+Day",
      alt: "Students participating in various sports events.",
      caption: "Students participating in various sports events.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=ScienceExhibition",
      alt: "Students presenting their science projects.",
      caption: "Students presenting their science projects.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Cultural+Fest",
      alt: "Students performing in the cultural fest.",
      caption: "Students performing in the cultural fest.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Classroom",
      alt: "A glimpse of our interactive classrooms.",
      caption: "A glimpse of our interactive classrooms.",
    },
    {
      src: "https://via.placeholder.com/600x400?text=Library",
      alt: "Students reading and studying in the school library.",
      caption: "Students reading and studying in the school library.",
    },
  ]

  const videos = [
    {
      src: "https://www.pexels.com/video/856190/download/",
      alt: "Virtual tour of Springdale Public School.",
      caption: "Virtual tour of Springdale Public School.",
    },
    {
      src: "https://www.pexels.com/video/855924/download/",
      alt: "Highlights from the Annual Function 2023.",
      caption: "Highlights from the Annual Function 2023.",
    },
  ]

  return (
    <div className="gallery-page">
      <header className="gallery-header bg-[#803fef] text-white py-8">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold">Gallery</h1>
          <p className="text-lg">Explore the moments at Springdale Public School</p>
        </div>
      </header>
      <section className="photos-section py-8 px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Photos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div key={index} className="photo-item text-center">
                <img src={photo.src} alt={photo.alt} className="w-full h-auto rounded shadow-md" />
                <p className="text-lg mt-2">{photo.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="videos-section py-8 bg-violet-100 px-12 mx-auto">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Videos</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="video-item text-center">
                <video controls className="w-full h-auto rounded shadow-md">
                  <source src={video.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <p className="text-lg mt-2">{video.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery

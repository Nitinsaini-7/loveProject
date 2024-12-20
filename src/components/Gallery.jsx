import React from 'react'
import Title from './Title'

const Gallery = () => {
  const images = [
    {
      id: 1,
      src: '/pg1.png',
      alt: 'Image 1',
    },
    {
      id: 2,
      src: '/pg2.jpg',
      alt: 'Image 2',
    },
    {
      id: 3,
      src: '/pg3.jpg',
      alt: 'Image 3',
    },
    {
      id: 4,
      src: '/pg4.jpg',
      alt: 'Image 4',
    },
    {
      id: 5,
      src: '/pg5.jpg',
      alt: 'Image 5',
    },
    {
      id: 6,
      src: '/pg6.webp',
      alt: 'Image 6',
    },
  ];
  return (
    <div className="sm:mt-10 mt-20">
        <Title heading1={"Project"} heading2={"Image Gallery"} para={"Explore all the different cities properties so you can choose the best option for you."}/>
       
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mx-5">
        {images.map((image) => (
          <div
            key={image.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-48 object-cover hover:scale-105 duration-200 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
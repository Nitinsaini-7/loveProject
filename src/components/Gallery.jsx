import React from 'react'
import Title from './Title'

const Gallery = () => {
  return (
    <div className="sm:mt-10 mt-20">
        <Title heading1={"Project"} heading2={"Image Gallery"} para={"Explore all the different cities properties so you can choose the best option for you."}/>
       
        <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/project1.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="project2.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/project3.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/project3.jpg"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/C_P1.png"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/C_P2.png"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/C_P3.png"
              alt=""
            />
          </div>
          <div data-aos="fade-up">
            <img
              className="h-auto max-w-full rounded-lg"
              src="/C_P4.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
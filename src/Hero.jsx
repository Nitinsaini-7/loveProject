import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const data = [
  {
    image: "/hero1.png",
    text1: "Modern",
    text2: "Homes for Urban Souls",
    text3: "Step into the future of urban living with our contemporary real estate offerings. From sleek city apartments to stylish lofts, find the perfect blend of comfort and convenience. Explore modern architecture and design tailored for the urban soul.",
  },
  {
    image: "/hero2.png",
    text1: "Investment Opportunities ",
    text2: " Realize Your Financial Goals",
    text3: "Unlock a world of investment potential with our carefully selected properties. From high-yield rental units to promising development projects, explore opportunities to grow your wealth in the real estate market. ",
  },
  
];

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container no-scrollbar overflow-y-hidden sm:mt-0 mt-10">
      <Slider {...settings}>
        {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div> */}
        {data.map((item, index) => (
          <div key={index} className=" relative">
            <div class="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
            <img src={item.image} alt="" className=" sm:h-screen w-full" />
            <div className="  absolute inset-1 text-white flex items-center">

              <div className="sm:mx-20 mx-2">
              <h1 className=" sm:text-5xl text-2xl font-bold text-white">{item.text1}</h1>
              <h1 className="sm:text-5xl font-bold text-2xl text-cyan-500 py-2">{item.text2}</h1>
              <p className="sm:mr-40 sm:text-xl text-sm">{item.text3}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;

import React from "react";
import { useEffect } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const ResidentialProjects = () => {

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  const property = [
    {
      image: "/R_P1.png",
      title: "Eros Sampoornam",
      location: "Sector 2, Greater Noida west",
      price: "95* lacs",
    },
    {
      image: "/R_P2.png",
      title: "Civitech Strings",
      location: "Sector 12, Greater Noida West",
      price: '94* lacs'
    },
  ];

  return (
    <div className="sm:mt-10 mt-20">
        <Title heading1={"Residential"} heading2={"Projects"} para={'Explore a diverse range of exquisite properties designed to cater to every lifestyle. Evergreen Estate offers a collection of homes that blend modern comfort with timeless elegance.'} />
      <div className="grid sm:grid-cols-3 gap-5 sm:mx-10 mx-4">
        {property.map((item) => (
          <div data-aos="fade-up" className="max-w-sm rounded-md shadow-lg hover:shadow-2xl duration-200 cursor-pointer">
            <img
              src={item.image}
              alt=""
              className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
            />
            <div className="flex flex-col justify-between p-6 space-y-8">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-wide">
                  {item.title}
                </h2>
                <ul className="text-lg">
                  <li className="font-bold">BSP: <span className="font-normal">Starting from : {item.price}</span></li>
                  <li className="font-bold">Location: <span className="font-normal">{item.location}</span></li>
                </ul>
              </div>
              <Link>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-white duration-200 hover:bg-blue-600"
              >
                View Details
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResidentialProjects;

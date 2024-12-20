import React from "react";
import { useEffect } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const CommercialProperty = () => {

    useEffect(() => {
        AOS.init({
          duration: 700,
          easing: "ease-out-cubic",
        });
      }, []);

  const property = [
    {
      image: "/C_P1.jpg",
      title: "Trehan Iris Broadway Greno West",
      location: "Ek Murti Chowk, Greater Noida West",
      bsp: "19000/sqr.ft",
      status: "Rera Approved",
    },
    {
      image: "/C_P2.jpg",
      title: "ACE YXP",
      location: "Prime Location At Yamuna Exp.",
      bsp: "Starting from ₹1.6 Cr",
      status:"Rera Approved"
    },
    {
      image: "/C_P3.jpg",
      title: "CRC The Flagship",
      location: "Sector 140A, Noida",
      bsp: "10990/sqr.ft",
      status:"Rera Approved"
    }
  ];

  return (
    <div className="sm:mt-10 mt-20">
        <Title heading1={"Commercial"} heading2={"Property"} para={'Explore a diverse range of exquisite properties designed to cater to every lifestyle. AstraAsset Portfolio Management Pvt. Ltd. offers a collection of homes that blend modern comfort with timeless elegance.'} />
        
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
                <h2 className="text-xl font-bold tracking-wide">
                  {item.title}
                </h2>
                <ul className="">
                  <li className="font-bold">BSP: <span className="font-normal">{item.bsp}</span></li>
                  <li className="font-bold">Location: <span className="font-normal">{item.location}</span></li>
                  <li className="font-bold">Verification Status: <span className="font-normal">{item.status}</span></li>
                 
                </ul>
              </div>
              <Link to={"/contact"} onClick={()=>window.scroll(0,0)}>
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

export default CommercialProperty;

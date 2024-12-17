import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const OurAgents = () => {
  const team = [
    {
      avatar: "",
      name: "Ms. Nandini",
      title: "Sr. HR Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
    },
    {
      avatar: "",
      name: "Ms. Arushi agarwal ",
      title: "Jr. HR Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
    },
    {
      avatar: "",
      name: "Mr. John",
      title: "IT Head",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
    },
    {
      avatar: "",
      name: "MR. Tony ",
      title: "General Manager",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
    },
  ];

  return (
    <section className="sm:mt-10 mt-20">
      <Title
        heading1={"OUR"}
        heading2={"team"}
        para={
          "Meet our team of professional agents, who will help you find your dream house."
        }
      />
      <div className="max-w-screen-xl mx-auto ">
        <div className="mt-12">
          <ul className="grid p-5 xl:gap-20 gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {team.map((item, idx) => (
              <li
                data-aos="fade-up"
                key={idx}
                className="  cursor-pointer"
              >
                <div className="w-full flex items-center justify-center">
                  <img
                    src={item.avatar}
                    className="w-24 h-24 rounded-full border-2 border-cyan-500 p-1"
                    alt=""
                  />
                </div>
                <div className=" p-4 text-center">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-cyan-500">{item.title}</p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400 justify-center">
                    <Link href={item.twitter} className=" ">
                      <div className="p-3 shadow-md hover:scale-90 duration-200 flex items-center justify-center w-12 h-12 rounded-full">
                        <img src="/twitter.png" alt="" className="w-20" />
                      </div>
                    </Link>
                    <Link href={item.facebook}>
                      <div className="p-3 shadow-md flex items-center hover:scale-90 duration-200 justify-center w-12 h-12 rounded-full">
                        <img src="/facebook.png" alt="" className="w-20" />
                      </div>
                    </Link>

                    <Link href={item.instagram}>
                      <div className="p-3 shadow-md flex items-center justify-center w-12 h-12 hover:scale-90 duration-200 rounded-full">
                        <img src="/instagram.png" alt="" className="w-20" />
                      </div>
                    </Link>
                    <Link href={item.linkedin}>
                      <div className="p-3 shadow-md flex items-center justify-center w-12 h-12 rounded-full hover:scale-90 duration-200">
                        <img src="/linkedin.png" alt="" className="w-20" />
                      </div>
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OurAgents;

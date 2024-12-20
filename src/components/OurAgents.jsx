import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";

const OurAgents = () => {
  const team = [
    {
      avatar: "/nandini verma.jpeg",
      name: "Ms. Nandini",
      title: "VP & Sr. HR Manager",
      desc: "With years of expertise in human resource management, specializes in talent acquisition, employee engagement, and fostering a dynamic work.",
      twitter: "https://www.linkedin.com/in/nandini-verma-9b3610255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.linkedin.com/in/nandini-verma-9b3610255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedin: "https://www.linkedin.com/in/nandini-verma-9b3610255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.linkedin.com/in/nandini-verma-9b3610255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      avatar: "arushi agarwal (1).jpeg",
      name: "Ms. Arushi agarwal ",
      title: " HR Manager",
      desc: "Plays a pivotal role in supporting our HR initiatives, ensuring seamless coordination and effective communication across teams.",
      twitter: "https://www.linkedin.com/public-profile/settings",
      facebook: "https://www.linkedin.com/public-profile/settings",
      linkedin: "https://www.linkedin.com/public-profile/settings",
      instagram: "https://www.linkedin.com/public-profile/settings",
    },
    {
      avatar: "/love tomer.jpeg",
      name: "Love Tomer",
      title: "IT Head",
      desc: "Leads the technological backbone of Astra Asset Portfolio Management pvt ltd, ensuring our systems are innovative, secure, and efficient.",
      twitter: "https://www.linkedin.com/in/love-tomer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      facebook: "https://www.linkedin.com/in/love-tomer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      linkedin: "https://www.linkedin.com/in/love-tomer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      instagram: "https://www.linkedin.com/in/love-tomer?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      avatar: "/vipul Shrivastava.jpg",
      name: "Mr. Vipul Shrivastava",
      title: "Sales Manager",
      desc: "Brings strategic vision and exceptional leadership to our sales team at Astra Asset Portfolio Management pvt ltd. With a proven track record.",
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
                className=" cursor-pointer"
              >
                <div className="w-full flex items-center justify-center">
                  <img
                    src={item.avatar}
                    className="w-24 h-24 rounded-full border-2 border-cyan-500 p-1"
                    alt=""
                  />
                </div>
                <div className=" p-2 text-center">
                  <h4 className="text-lg text-gray-700 font-semibold">
                    {item.name}
                  </h4>
                  <p className="text-cyan-500">{item.title}</p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                  <div className="mt-3 flex gap-4 text-gray-400 justify-center">
                    <Link to={item.twitter} className=" ">
                      <div className="p-3 shadow-md hover:scale-90 duration-200 flex items-center justify-center w-12 h-12 rounded-full">
                        <img src="/twitter.png" alt="" className="w-20" />
                      </div>
                    </Link>
                    <Link to={item.facebook}>
                      <div className="p-3 shadow-md flex items-center hover:scale-90 duration-200 justify-center w-12 h-12 rounded-full">
                        <img src="/facebook.png" alt="" className="w-20" />
                      </div>
                    </Link>

                    <Link to={item.instagram}>
                      <div className="p-3 shadow-md flex items-center justify-center w-12 h-12 hover:scale-90 duration-200 rounded-full">
                        <img src="/instagram.png" alt="" className="w-20" />
                      </div>
                    </Link>
                    <Link to={item.linkedin}>
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

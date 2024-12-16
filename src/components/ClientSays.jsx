import React from "react";
import Title from "./Title";

const ClientSays = () => {
  const data = [
    {
      image: "/client1.avif",
      name: "Rashmi",
      title: "Scenic Mountain Retreat",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
    },
    {
        image: "/client1.avif",
        name: "Rashmi",
        title: "Scenic Mountain Retreat",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      },{
        image: "/client1.avif",
        name: "Rashmi",
        title: "Scenic Mountain Retreat",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus quibusdam, eligendi exercitationem molestias possimus facere.",
      },
  ];

  return (
    <section className="sm:mt-10 mt-20">
      <Title
        heading1={"WHAT OUR"}
        heading2={"CLIENTS SAY"}
        para={
          "Evergreen Estate offers a collection of homes that blend modern comfort with timeless elegance."
        }
      />

      <div className="grid sm:grid-cols-3 gap-8 mx-4 sm:mx-10">
        {data.map((item) => (
          <div className="flex flex-col max-w-md  shadow-md hover:shadow-xl duration-200 cursor-pointer">
            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 ">
              <p className="relative px-6 py-1 text-lg italic text-center ">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="w-8 h-8 fill-cyan-500"
                >
                  <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                  <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                </svg>
                {item.text}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="absolute right-0 w-8 h-8 fill-cyan-500"
                >
                  <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                  <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                </svg>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-cyan-500">
              <img
                src={item.image}
                alt=""
                className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
              />
              <p className="text-xl font-semibold leading-tight">{item.name}</p>
              <p className="text-sm uppercase">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientSays;

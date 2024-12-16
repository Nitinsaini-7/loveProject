import React, { useEffect } from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Blog = () => {

  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  const blogData = [
    {
      image: "/blog1.png",
      title: "How to Find a Good Real Estate Agent",
      date: "June 1, 2020",
      text: "Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus",
      readMore: "https://en.wikipedia.org/wiki/Real_estate",
    },
    {
      image: "/blog2.png",
      title: "How to Find a Good Real Estate Agent",
      date: "June 1, 2020",
      text: "Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus",
      readMore: "https://en.wikipedia.org/wiki/Channel_partner",
    },
    {
      image: "/blog3.png",
      title: "How to Find a Good Real Estate Agent",
      date: "June 1, 2020",
      text: "Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus",
      readMore: "https://en.wikipedia.org/wiki/Investment",
    },{
      image: "/blog4.png",
      title: "How to Find a Good Real Estate Agent",
      date: "June 1, 2020",
      text: "Ea cibo choro eos, in duo iudico eirmod. Qui modus meliore ex, has in decore virtute repudiare. An summo persequeris contentiones nec, ex sit modus",
      readMore: "https://en.wikipedia.org/wiki/Commercial_property",
    },
  ];

  return (
    <div className="p-5">
      <Title
        heading1={"LATEST"}
        heading2={"NEWS"}
        para={
          "Your Attention Is Changed The Part Of World.Give a helping hand to those who need it!"
        }
      />
      

      <div className="grid sm:grid-cols-3 gap-10 sm:mx-10 mx-4">
        {blogData.map((item) => (
          <article data-aos="flip-right" className="flex flex-col shadow-md hover:shadow-xl duration-200 cursor-pointer rounded-md">
            <img
              alt=""
              className="w-full "
              src={item.image}
            />
            <div className="flex flex-col flex-1 p-6">
              <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                {item.title}
              </h3>
              <p>{item.text}</p>
              <div className="flex flex-wrap justify-between py-1 space-x-2">
                <span className="text-cyan-500">{item.date}</span>
              </div>

              <Link to={item.readMore}>
              <button
                type="button"
                className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-blue-500 text-white duration-200 hover:bg-blue-600"
              >
                Read More
              </button>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

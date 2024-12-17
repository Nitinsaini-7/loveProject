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
      title: "Why Commercial Property give High Return",
      date: "17th Dec 2024",
      text: "Investing in commercial real estate has long been regarded as one of the most lucrative avenues for building wealth. Unlike residential properties, which are primarily bought for personal use or rental income, commercial properties cater to businesses and enterprises, making them an attractive choice for investors seeking high returns. Here’s why commercial properties stand out as a profitable investment.",
      readMore: "https://en.wikipedia.org/wiki/Special:Search?go=Go&search=Why+Commercial+Property+give+High+Return&ns0=1",
    },
    {
      image: "/blog2.png",
      title: "Future Of land near Jewar International Airport",
      date: "17th Dec 2024",
      text: "The upcoming Jewar International Airport (Noida International Airport) is poised to become one of the largest airports in Asia, transforming the surrounding region into a hub of economic activity and infrastructure development. As this world-class project progresses, the land near Jewar Airport is emerging as a golden investment opportunity with tremendous potential for growth.",
      readMore: "https://en.wikipedia.org/w/index.php?search=Future+Of+land+near+Jewar+International+Airport&title=Special%3ASearch&ns0=1",
    },
    {
      image: "/blog3.png",
      title: "The Future of Real Estate in India",
      date: "17th Dec 2024",
      text: "The real estate sector in India is poised for a transformative journey, driven by rapid urbanization, technological advancements, and supportive government policies. As one of the largest contributors to the nation’s GDP, real estate plays a pivotal role in shaping the economic and social landscape of India. Let’s explore the trends and factors that will define the future of this dynamic industry",
      readMor:"https://en.wikipedia.org/w/index.php?search=The+Future+of+Real+Estate+in+India&title=Special%3ASearch&ns0=1",
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
         <article className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
         <img
           alt=""
           src={item.image}
           className="absolute inset-0 h-full w-full object-cover"
         />
       
         <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
           <div className="p-4 sm:p-6">
             <time datetime="2022-10-10" className="block text-xs text-white/90"> {item.date} </time>
       
             <a href="#">
               <h3 className="mt-0.5 text-2xl text-white">{item.title}</h3>
             </a>
       
             <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">
               {item.text
               }
             </p>
             <Link to={item.readMore} className="">
             <button className="p-2 mt-5 rounded-full hover:border-cyan-500 hover:text-cyan-500 duration-200 border border-white text-white">Read More</button>
             </Link>
           </div>
         </div>
       </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;

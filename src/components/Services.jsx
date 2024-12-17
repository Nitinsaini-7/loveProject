import React from "react";
import Title from "./Title";

const Services = () => {
  const features = [
    {
      icon: <img src="/settings.png" alt="" />,
      title: "Real Estate Portfolio Management",
      desc: "We specialize in managing real estate portfolios for investors, offering:Strategic investment planning.Maximizing ROI through tailored property options.Ongoing support for property management and maintenance.",
    },
    {
      icon: <img src="/support.png" alt="" />,
      title: "Investment Advisory Services",
      desc: "Make informed decisions with our expert guidance, including market trend analysis, insights, and recommendations for high-growth investment opportunities, ensuring assured possession and timely returns.",
    },
    {
      icon: <img src="/customer-support.png" alt="" />,
      title: "Commercial and Residential Project Solutions",
      desc: "We cater to diverse real estate needs, offering premium commercial properties and luxurious yet affordable residential projects tailored to meet every client’s expectations and lifestyle.",
    },
  ];

  return (
    <section className=" h-full pb-28">
      <Title
        heading1={"OUR"}
        heading2={"services"}
        para={
          "We provide exceptional services tailored to your needs, including expert solutions, timely delivery, and unparalleled support to ensure your success and satisfaction."
        }
      />
      <div className="flex items-center justify-center">
        <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
          <div className="">
            <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((item, idx) => (
                <li key={idx} className="space-y-3">
                  <div className="w-12 h-12 mx-auto rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h4 className="text-lg text-gray-800 font-semibold">
                    {item.title}
                  </h4>
                  <p>{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

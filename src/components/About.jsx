import React from "react";
import Title from "./Title";

const About = () => {
  const data = [
    {
      image: "/about1.png",
      heading: "Our Mission",
      text: "At [Your Company Name], our mission is simple: to connect businesses with the spaces they need to thrive. We believe that the right environment can foster innovation and drive success, which is why we focus on matching our clients with properties that align perfectly with their vision and operational requirements.",
    },
    {
      image: "/about2.png",
      heading: "Our Values",
      text: "	Integrity: Honesty and transparency form the foundation of everything we do. We are committed to upholding the highest ethical standards in our relationships with clients, partners, and the communities we serve.	Excellence: We strive for excellence in all aspects of our business, from the quality of properties we offer to the exceptional service we provide.	Innovation: The real estate industry is constantly evolving, and we stay ahead by adopting the latest trends, technologies, and strategies to better serve our clients.	Customer Focus: Your success is our success. We listen closely to your ",
    },
    {
      image: "/about3.png",
      heading: "Our Services",
      text: "	Commercial Property Sales & Leasing: We offer a comprehensive selection of commercial spaces, ranging from office buildings to retail outlets, industrial units, and more.Investment Advisory: For investors looking to capitalize on commercial real estate, we provide expert advice, market insights, and opportunities that maximize returns.Property Management: We provide end-to-end property management services, ensuring that your investments are well-maintained and optimized for long-term value.",
    },
    {
      image: "/about4.png",
      heading: "Why Choose Us?",
      text: "	Proven Expertise: Our team brings years of real estate experience and deep market knowledge to the tableTailored Solutions: We understand that every business is unique, so we offer solutions that are custom-designed to meet your specific needsComprehensive Support: From site selection and negotiations to closing deals and post-transaction services, we support you every step of the way.",
    },
  ];

  return (
    <div
      className=" bg-fixed bg-cover"
      style={{ backgroundImage: "url(/about-background.png)" }}
    >
      <div className="sm:h-screen h-96 -mb-5 bg-gray-800 bg-opacity-50 flex items-center pl-5  sm:pl-10 ">
        <div className="text-white">
          <p className="text-lg">About Us</p>
          <div className="sm:text-6xl text-4xl font-bold">
            <p>About Us</p>
            <p className="text-cyan-500">
              Asta Asset Portfolio Management Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white pt-10">
        <div>
          <div className="grid lg:grid-cols-2 lg:mx-10">
            <div className="flex items-center justify-center">
              <img src="/md.jpg" className="w-80  rounded-full hover:shadow-lg duration-200 cursor-pointer" alt="" />
            </div>
            <div className="text-lg p-5 space-y-2">
             
              <p className="font-semibold text-2xl">
                Meet Our Managing Director -
                <span className="text-cyan-500 font-semibold text-justify"> Mr. Love Tanwar</span>{" "}
              </p>
              <p>
                Welcome to Asta Asset Portfolio Management Pvt. Ltd., where
                success is driven by vision, experience, and an unwavering
                commitment to excellence. Our esteemed Managing Director, Love
                Tanwar, has been a trailblazer in the real estate industry since
                2012. With over a decade of expertise, Love Tanwar has built a
                reputation as a trusted leader who combines deep industry
                knowledge with innovative business strategies. In 2020, Love
                Tanwar embarked on an entrepreneurial journey, establishing Asta
                Asset Portfolio Management Pvt. Ltd. Under his leadership, the
                company has thrived, earning 500+ positive customer reviews, a
                testament to his dedication to transparency, honesty, and
                delivering exceptional customer satisfaction.
              </p>
            </div>
          </div>
          <div className="p-5 space-y-2 mt-10">
            
            <Title
          heading1={"Achievements"}
        
        />
            <div className="grid md:grid-cols-2 bg-slate-100 place-items-center">
              <div className="">
                <div className=" space-y-5 text-lg font-semibold">

                <li>Twice honored with prestigious awards by Iris Pearls.</li>
                <li>Five-time recipient of accolades from Trehan Iris.</li>
                <li>
                  Recognized by CRC for outstanding contributions to the real
                  estate sector.
                </li>
                </div>
              </div>
              <div className="flex items-center justify-center">

              <img src="/success.png" className="w-52" alt="" />
              </div>
            </div>
          </div>

          <div className="p-5 space-y-2">
          <Title
          heading1={"ABOUT"}
          heading2={"COMPANY"}
         
        />
            <p>
              Founded in 2020, Asta Asset Portfolio Management Pvt. Ltd. is
              built on a foundation of trust, transparency, and unmatched
              expertise in real estate. Our name, "Asta," reflects the core
              values that define our company:
            </p>

            <div>
              <li>
                A stands for Assurity – The assurity of timely possession and
                guaranteed returns.
              </li>
              <li>
                S stands for Services – Delivering exceptional services that
                exceed client expectations.
              </li>
              <li>
                T stands for Transparency – Upholding honesty and clarity in
                every transaction.
              </li>
              <li>
                R stands for Return on Investment – Ensuring maximum value for
                your investments.
              </li>
            </div>
            <p>
              At Asta Asset Portfolio Management Pvt. Ltd., we specialize in
              managing real estate portfolios for investors and property buyers.
              With a customer-first approach, we focus on creating rewarding
              experiences and providing reliable solutions to help clients
              achieve their real estate goals.
            </p>
            <div>
              <div>
                <p className="font-semibold">Our Vision</p>
                <p>
                  To redefine the real estate industry through transparency,
                  innovation, and a commitment to delivering unmatched value to
                  our clients.
                </p>
              </div>

              <div>
                <p className="font-semibold">Our Mission</p>
                <p>
                  To build lasting relationships with our clients by offering
                  trustworthy services, ethical business practices, and
                  results-driven investment opportunities.
                </p>
                <p>
                  Join us as we continue to grow and set new benchmarks in real
                  estate, making your investments more secure, profitable, and
                  hassle-free. With Asta Asset Portfolio Management Pvt. Ltd.,
                  your success is our priority.
                </p>
              </div>
            </div>
          </div>
        </div>
        <Title
          heading1={"WHO"}
          heading2={"WE ARE"}
          para={
            "Our mission is to provide comprehensive, tailored real estate solutions that ensure the success and growth of our clients. Whether you are looking to expand your business, invest in premium commercial spaces, or find the perfect office location, we offer unparalleled guidance and support throughout the process."
          }
        />
        <div className="grid sm:grid-cols-2 sm:gap-20 gap-10 sm:p-10 p-5">
          {data.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" className="h-80" />
              <h3 className="font-bold text-xl py-1"> {item.heading} </h3>
              <p> {item.text} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import Title from "./Title";

const Contact = () => {
  return (
    <section
      className=" bg-fixed bg-cover"
      style={{ backgroundImage: "url(/about-background.png)" }}
    >
      {/* <Title
        heading1={"Contact With"}
        heading2={"Asta Asset Portfolio Management Pvt. Ltd."}
        para={
          "Top rated construction packages we pleasure rationally encounter consequences interesting who loves or pursue or desires."
        }
      /> */}
      <div className="sm:h-screen h-96 -mb-5 bg-gray-800 bg-opacity-50 flex items-center pl-5  sm:pl-10 ">
        <div className="text-white">
          <p className="text-lg">Contact With Us</p>
          <div className="sm:text-6xl text-4xl font-bold">
            <p>Contact With</p>
            <p className="text-cyan-500">
              Asta Asset Portfolio Management Pvt. Ltd.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white">

        <div className="lg:grid lg:grid-cols-2 p-5 gap-5 flex flex-col-reverse">
          <div className="">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
              className="w-full h-96"
              frameborder="0"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div className="">
            <div className="space-y-5">
              <p className="text-lg">Contact Us</p>
              <p className="text-5xl font-bold">New York Office</p>
              <p>
                Morbi mollis elit vitae elit molestie lobortis. Cras eu purus
                ipsum. Aliquam et ullamcorper nisl. Nam sem justo, sagittis sit
                amet sem at, mollis congue eros. Quisque vel mattis eros. Proin
                euismod massa id est finibus, rutrum ornare velit pellentesque.
                Ut arcu magna, interdum eget egestas eget, sagittis a libero.
                Donec felis tellus, vehicula at purus condimentum, hendrerit
                dictum odio. Vivamus et condimentum sapien.
              </p>
            </div>
          </div>
        </div>

        <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
          <div className="flex items-center justify-center">
            <div className="py-6 md:py-0 md:px-6">
              <h1 className="text-4xl font-bold mb-5">Get in touch</h1>
              <div className="space-y-4">
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 fill-cyan-500"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>Fake address, 9999 City</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 fill-cyan-500"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                  </svg>
                  <span>123456789</span>
                </p>
                <p className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 mr-2 sm:mr-6 fill-cyan-500"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                  <span>contact@business.com</span>
                </p>
              </div>
            </div>
          </div>
          <form className="flex flex-col border-none p-6 space-y-4 rounded-md shadow-2xl">
            <label className="block">
              <span className="mb-1">Full name</span>
              <input
                type="text"
                placeholder="Full Name"
                className="block p-2 w-full rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 outline-none bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Email address</span>
              <input
                type="email"
                placeholder="Email"
                className="block p-2 w-full rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 outline-none bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Phone Number</span>
              <input
                type="tel"
                placeholder="Mobile No."
                className="block p-2 w-full rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 outline-none bg-gray-100"
              />
            </label>
            <label className="block">
              <span className="mb-1">Message</span>
              <textarea
                rows="3"
                placeholder="Message"
                className="block p-2 w-full rounded-md shadow-sm focus:ring-2 focus:ring-cyan-500 outline-none bg-gray-100"
              ></textarea>
            </label>
            <button
              type="button"
              className="self-center p-2 text-lg rounded-md bg-blue-500 text-white w-full hover:bg-blue-600 duration-200 cursor-pointer"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

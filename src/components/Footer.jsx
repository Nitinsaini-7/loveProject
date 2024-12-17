import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" pt-8 divide-y bg-gray-200 text-gray-800">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3 lg:p-5">
          <Link
            href="#"
            className="flex flex-col justify-center space-x-3 lg:justify-start"
          >
            <div className="p-3">
              <img src="/LOGOAAPM.png" className="rounded-full w-16" alt="" />
            </div>
            <span className="self-center text-2xl font-semibold capitalize">
              Asta Asset Portfolio Management Pvt. Ltd.
            </span>
          </Link>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 p-3 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-cyan-500 text-lg font-bold">
              Services
            </h3>
            <ul className="space-y-3">
              <li className="font-semibold">
                <Link
                  onClick={() => {
                    window.scroll(0, 0);
                  }}
                  href="#"
                >
                  Commercial Property
                </Link>
              </li>
              <li className="font-semibold">
                <Link href="#">Residential Projects</Link>
              </li>
              <li className="font-semibold">
                <Link href="#">Marketing</Link>
              </li>
              <li className="font-semibold">
                <Link href="#"> consultancy</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-lg text-cyan-500 font-bold">
              Company
            </h3>
            <ul className="space-y-3">
              <li className="font-semibold">
                <Link to={"/about"}>About Us</Link>
              </li>
              <li className="font-semibold">
                <Link to={"/contact"}>Blogs</Link>
              </li>
              <li className="font-semibold">
                <Link to={"/contact"}>Services</Link>
              </li>
              <li className="font-semibold">
                <Link to={"/contact"}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-cyan-500 text-lg font-bold">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="font-semibold">
                <Link to={"tel:"} href="#">
                  +91 9205359256
                </Link>
              </li>
              <li className="font-semibold">
                <Link to={"mailto:"} href="#">
                  lovetomer151@gmail.com
                </Link>
              </li>
              <li className="font-semibold">
                <Link to={""} href="#">
                  NX-One Tower 3, A-118 First Floor-201009
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-cyan-500 text-lg font-bold">
              Social Links
            </div>
            <div className="flex gap-1">
              <Link
                href="#"
                className="flex items-center p-4 bg-white rounded-full"
              >
                <img src="/facebook.png" className="w-96" alt="" />
              </Link>
              <Link
                href="#"
                className="flex items-center p-4 bg-white rounded-full"
              >
                <img src="/linkedin.png" className="w-96" alt="" />
              </Link>
              <Link
                href="#"
                className="flex items-center p-4 bg-white rounded-full"
              >
                <img src="/instagram.png" className="w-96" alt="" />
              </Link>
              <Link
                href="#"
                className="flex items-center p-4 bg-white rounded-full"
              >
                <img src="/twitter.png" className="w-96" alt="" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center bg-cyan-500 text-white">
        © 2024 Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

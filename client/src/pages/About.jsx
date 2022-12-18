import React from "react";
import artistPicture from "../../src/assets/artistpicture.jpeg";
import throwing from "../../src/assets/throwing.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto h-screen px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img src={throwing} alt="image" loading="lazy" className="w-full" />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h1 className="text-2xl text-black font-light italic sm:text-3xl">
              About Me
            </h1>
            <h4 className="text-md text-black italic font-regular ">
              Ceramic Lover
            </h4>
            <p className="mt-4 font-light italic text-black">
              Hi! My name is Ashlynn Claire.
            </p>
            <p className="mt-4 font-light italic text-black">
              {" "}
              More about me here{" "}
            </p>
          </div>
        </div>
        <Link to="/products">
          <button className="rounded-md bg-[#A5A58D] text-white italic px-20 py-2 shadow hover:shadow-lg mt-10 sm:mt-20">
            Shop Collection
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;

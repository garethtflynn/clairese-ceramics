import React from "react";
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
            I'm Ashlynn Landry, a 20-something-year-old building a career for myself in Web Development. Born in Baton Rouge, raised as a Georgia peach, and graduated with a BBA from Ole Miss, my heart lies in many places, primarily with my dog Jamie, pottery, and design.
            </p>
            <p className="mt-4 font-light italic text-black">
            In my previous role as Marketing and Communications Coordinator at Good Samaritan Health Center, I grew a liking for web design and development, which led me to the Georgia Institute of Technology's coding Bootcamp. I am working towards a Full Stack Flex Web Development certificate and will graduate in December 2022.
            </p>
            <p className="mt-4 font-light italic text-black">
            With my background in marketing and a love for graphic design, this website showcases the skills I have learned thus far in web development as well as in ceramics.
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

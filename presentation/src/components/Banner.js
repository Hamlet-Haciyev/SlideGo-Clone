import React from "react";
import Search from "./Search";
const Banner = () => {
  return (
    <>
      <div className="bg-brandColor h-60 flex items-center justify-center">
        <div className="container sm:max-w-md md:max-w-4xl text-center relative">
          <h1 className="text-white text-[1.5rem] sm:text-[2rem] font-normal max-w-3xl mx-auto leading-tight mb-8 sm:mb-0">
            Free <strong>Google Slides</strong> and <strong>PowerPoint </strong>
            templates to boost your presentations
          </h1>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Banner;

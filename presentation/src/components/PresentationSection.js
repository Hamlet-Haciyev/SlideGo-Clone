import React from "react";
import Title from "./Title";
import Presentation from "./Presentation";
const PresentationSection = () => {
  return (
    <>
      <div className="mx-auto max-w-[1240px]">
        <Title name="Trending searches" />
        <Presentation />
      </div>
    </>
  );
};

export default PresentationSection;

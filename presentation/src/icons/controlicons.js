import React from "react";
// import {  } from "react-icons";

const DownIcon = () => {
  return (
    <svg
      alt="icon caret"
      className="fill-current h-1.5 w-1.5 text-gray-700 ml-2 group-hover:text-purple-400 hidden lg:block"
      viewBox="0 0 8 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M4.21053 5.05263L8 0H0.421053L4.21053 5.05263Z"></path>
    </svg>
  );
};
const SearchIcon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      viewBox="0 0 24 24"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-5 w-5 text-gray-600"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
};
const ControlIcons = ({ type }) => {
  const icons = {
    down: DownIcon,
    search: SearchIcon,
  };

  const Component = icons[type];

  return <Component />;
};

export default ControlIcons;

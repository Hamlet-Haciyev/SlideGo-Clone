import React from "react";
import ControlIcons from "../icons/controlicons";
const Categories = () => {
    return <>
        <div className="hidden lg:block nav sticky border-b border-gray-200 z-10 bg-white">
            <div className="">
                <div className="xl:container mx-auto px-5 relative flex flex-col items-center">
                    <ul className="w-2/3 lg:w-full h-screen lg:h-12 flex flex-col lg:flex-row justify-start lg:justify-center items-center text-center overflow-auto lg:overflow-visible pt-8 lg:pt-0">
                        <li className="w-full lg:w-auto relative group flex justify-center"><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">
                            Color
                        <ControlIcons type="down" className="fill-current h-1.5 w-1.5 text-gray-700 ml-2 group-hover:text-purple-400 hidden lg:block"/>
                        </a>
                        </li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Style
                        
                        <ControlIcons type="down" className="fill-current h-1.5 w-1.5 text-gray-700 ml-2 group-hover:text-purple-400 hidden lg:block"/>
                        </a></li>
                        <li className="hidden xl:flex"><span className="w-px h-8 bg-gray-500/25"></span></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Recent</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Popular</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Education</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Business</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Marketinq</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Medical</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Multi-purpose</a></li>
                        <li><a href="#" className="group flex items-center justify-center h-10 lg:h-12 whitespace-no-wrap px-3 xl:px-5 text-gray-200 lg:text-gray-700 hover:text-white lg:hover:text-purple-400 lg:opacity-100 transition-all duration-300 cursor-pointer">Infographics</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </>;
};

export default Categories;

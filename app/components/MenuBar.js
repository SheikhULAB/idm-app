import React from "react";
import { CiPlay1 } from "react-icons/ci";
import { CiStop1 } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { CiShare2 } from "react-icons/ci";
import { FaLinkSlash } from "react-icons/fa6";
import { CiStopwatch } from "react-icons/ci";
import { AiOutlineDelete } from "react-icons/ai";
import { CiFolderOn } from "react-icons/ci";
import { MdOutlineSchedule } from "react-icons/md";

const MenuBar = () => {
  return (
    <div className="lg:flex">
        
        <div className="relative flex items-center justify-center width-[30%]">
    <div className="flex items-center w-full bg-[#22222A] rounded-md text-white">
       <FaLinkSlash  className="ml-6"/> 
        <input
            type="text"
            placeholder="Add Url"
            className="py-2 pl-2 pr-4 w-64 rounded-md focus:outline-none bg-[#22222A] text-white placeholder-white text-center"
        />
    </div>
</div>

     

        <div className="lg:mx-auto justify-center w-full inline-flex items-center space-x-8 p-4 rounded-md shadow-md">
    <div className="grid place-items-center">
        <CiPlay1 className="mb-1" />
        <span className="text-sm">Resume</span>
    </div>

    <div className="grid place-items-center">
        <CiStop1 className="mb-1" />
        <span className="text-sm">Stop</span>
    </div>

    <div className="grid place-items-center">
       <CiStopwatch className="mb-1" />     
        <span className="text-sm">Stop All</span>
    </div>

    <div className="grid place-items-center">
       <AiOutlineDelete className="mb-1" />
        <span className="text-sm">Delete</span>
    </div>

    <div className="grid place-items-center">
        <CiSettings className="mb-1" />
        <span className="text-sm">Options</span>
    </div>

    <div className="grid place-items-center">
       <CiFolderOn className="mb-1" />
        <span className="text-sm">Queues</span>
    </div>

    <div className="grid place-items-center">
        <MdOutlineSchedule className="mb-1" />
        <span className="text-sm">Scheduler</span>
    </div>

    <div className="grid place-items-center">
        <CiShare2 className="mb-1" />
        <span className="text-sm">Share</span>
    </div>
</div>

    </div>
  );
};

export default MenuBar;

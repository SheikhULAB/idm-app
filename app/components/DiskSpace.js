import React from "react";
import { CiFloppyDisk } from "react-icons/ci";

const DiskSpace = () => {
  return (
    <div className="p-3 border border-gray-700 mt-6 mr-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <CiFloppyDisk />
          <span class="text-base font-medium ml-2">Disk Space</span>
        </div>
        <div class="flex items-center space-x-1">
          <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
          <div class="w-2 h-2 bg-gray-300 rounded-full"></div>
        </div>
      </div>

      <div className="mt-2 mb-2 flex flex-col items-center justify-center">
        <div className="p-1 m-1">
            <span className="mr-3">0%</span>
            <span className="mr-3">😐</span>
            <span>100%</span>
        </div>
        <span>90%</span>
        <p>C:\Downloads</p>
      </div>

      <div>
        <button className="bg-gradient-to-r from-blue-500 to-purple-500
         text-white text-sm w-full py-2 px-4 rounded-full">
          Disk Cleaner
        </button>
      </div>
    </div>
  );
};

export default DiskSpace;

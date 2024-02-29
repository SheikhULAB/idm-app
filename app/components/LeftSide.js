import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LuFolders } from "react-icons/lu";
import { CiMusicNote1 } from "react-icons/ci";
import { FaCompress } from "react-icons/fa";
import { LiaVideoSolid } from "react-icons/lia";
import { IoDocumentsOutline } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";
import { PiImagesThin } from "react-icons/pi";
import DiskSpace from "./DiskSpace";

const LeftSide = () => {
  return (
    <div className="lg:w-[20%] ml-10 border-r-2">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger><LuFolders />All Downloads</AccordionTrigger>
          <AccordionContent>
            <div className="flex gap-3 items-center">
                <CiMusicNote1 />
                <span>Musics</span>
            </div>
          </AccordionContent>
          <AccordionContent>
            <div className="flex items-center gap-3">
                <FaCompress />
                <span>Compressed</span>
            </div>
          </AccordionContent>
          <AccordionContent>
            <div className="flex items-center gap-3">
                <LiaVideoSolid />
                <span>Videos</span>
            </div>
          </AccordionContent>
          <AccordionContent>
            <div className="flex items-center gap-3">
               <IoDocumentsOutline />
                <span>Programs</span>
            </div>
          </AccordionContent>
          <AccordionContent>
            <div className="flex items-center gap-3">
                <IoDocumentsOutline />
                <span>Documents</span>
            </div>
          </AccordionContent>
          <AccordionContent>
            <div className="flex items-center gap-3">
                <FaAppStoreIos />
                <span>APKs</span>
            </div>
          </AccordionContent>
          <AccordionContent>
            <div className="flex items-center gap-3">
                <PiImagesThin />
                <span>Images</span>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger><LuFolders />Unfinished</AccordionTrigger>
            <AccordionContent></AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger><LuFolders />Finished</AccordionTrigger>
            <AccordionContent></AccordionContent>
        </AccordionItem>
      </Accordion>

      <DiskSpace />
    </div>
  );
};

export default LeftSide;

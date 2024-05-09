import React from "react";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import {RiArrowDropUpLine} from  "react-icons/ri";
import Questions from "./Questions";


const FAQItem = ({ question }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  
  return (
    <div className="flex gap-5 justify-between px-6 py-4 mt-8 max-w-full text-base font-semibold leading-7 rounded-xl border border-blue-600 border-solid text-zinc-800 w-[848px] max-md:flex-wrap max-md:px-5" onClick={() => setIsOpen((prev) => !prev)}>
      <div className="flex my-auto ">{question}</div>
       {!isOpen ? (<RiArrowDropDownLine size = '32px'/>) : (<RiArrowDropUpLine size = '32px'/>) }
       {isOpen && <Questions/>}
    </div>
  );
};

export default FAQItem;

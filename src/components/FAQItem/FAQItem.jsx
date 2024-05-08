import React from 'react'
import { RiArrowDropDownLine } from "react-icons/ri";


const FAQItem = ({question}) => {
  
    return (
        <div className="flex gap-5 justify-between px-6 py-4 mt-8 max-w-full text-base font-semibold leading-7 rounded-xl border border-blue-600 border-solid text-zinc-800 w-[848px] max-md:flex-wrap max-md:px-5">
          <div className="flex my-auto ">{question}</div>
          <RiArrowDropDownLine size = '30'/>
        </div>
      );
}

export default FAQItem

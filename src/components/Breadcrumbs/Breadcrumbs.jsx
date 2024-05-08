import React from 'react'
import { SlHome } from "react-icons/sl";


const Breadcrumbs = () => {
    return (
        <nav className="flex gap-2 self-start mt-16 text-lg text-center max-md:flex-wrap max-md:mt-10">
          <div className="flex gap-2 items-center font-medium whitespace-nowrap text-zinc-500">
            {/* <img loading="lazy" src="src/components/Breadcrumbs/Assets/Vector (11).png" alt="" className="shrink-0 self-stretch aspect-square w-[30px]" /> */}
            <SlHome size='25'/>
            <img loading="lazy" src="public/Assets/Vector (14).png" alt=""  className="shrink-0 w-[8px] aspect-square h-[12px]"/>
            <div className="self-stretch my-auto ">Flashcard</div>
          </div>
          <div className="flex gap-2 my-auto">
          <div className='flex justify-center items-center'><img loading="lazy" src="public/Assets/Vector (14).png" alt="" className="shrink-0 w-[8px] aspect-square h-[12px]" /></div>
            <div className="font-medium text-zinc-500">Mathematics</div>
            <div className="flex gap-2 font-semibold text-blue-950">
              <div className='flex justify-center items-center'><img loading="lazy" src="public/Assets/Vector (14).png" alt="" className="shrink-0 w-[8px] aspect-square h-[12px]" /></div>
              <div className='text-blue-650'>Relation and Function</div>
            </div>
          </div>
        </nav>
      );
}

export default Breadcrumbs

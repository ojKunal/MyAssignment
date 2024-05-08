import React from 'react'
import { MdOutlineRefresh } from "react-icons/md";


const FlashcardNav = () => {
    return (
        <nav className="flex gap-5 justify-between items-center self-center mt-8 max-w-full text-2xl font-bold text-gray-800 whitespace-nowrap w-[612px] max-md:flex-wrap ">
          <MdOutlineRefresh size='50' color='blue-500' className='cursor-pointer text-indigo-900'/>
          <div className="flex gap-5 justify-between self-stretch ">
            <img loading="lazy" src="src/components/FlashcardNav/Assets/Vector (16).png" alt="" className="shrink-0 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[60px] cursor-pointer" />
            <div className="my-auto">01/10</div>
            <img loading="lazy" src="src/components/FlashcardNav/Assets/Vector (17).png" alt="" className="shrink-0 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[60px] cursor-pointer" />
          </div>
          <img loading="lazy" src="src/components/FlashcardNav/Assets/Vector (18).png" alt="" className="shrink-0 self-stretch my-auto aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[30px] cursor-pointer" />
        </nav>
      );
}

export default FlashcardNav

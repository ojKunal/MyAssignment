import React from 'react'
import { MdLightbulbOutline } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";



const FlashcardContent = () => {
    return (
        <div className="flex flex-col bg-gradient-to-r from-blue-500 to-indigo-900 self-center px-9 pt-9 pb-20 mt-8 max-w-full rounded-[42.507px] w-[712px] max-md:px-5">
          <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
            {/* <img loading="lazy" src="src/components/FlashcardContent/Assets/Vector (15).png" alt=""  /> */}
            <MdLightbulbOutline color='white' size='28'className='cursor-pointer'/>
            <HiSpeakerWave color='white' size='28' className='cursor-pointer'/>
          </div>
          <div className="self-center mt-28 mb-16 text-4xl font-bold tracking-wider text-center text-white max-md:my-10">
            9 + 6 + 7x - 2x - 3
          </div>
        </div>
      );
}

export default FlashcardContent

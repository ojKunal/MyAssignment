import React, { useState } from "react";
import { MdLightbulbOutline } from "react-icons/md";
import { HiSpeakerWave } from "react-icons/hi2";
import { MdOutlineRefresh } from "react-icons/md";

const FlashcardContent = () => {
  const [count,setCount] = useState(1)
  const Equations = [
    "9 + 6 + 7x - 2x - 3",
    "4x + 9 - 2(3x - 5) = 7",
    "2(3x + 1)-  5(2 - x) = 3(x + 4)",
    "2x + (3x+1) - 5=0",
    "2(3x + 1)-  5(2 - x) = 3(x + 4)",
    "8x + 9 - 2(9x - 5) = 100",
    "2(71x + 1)-  5(2 - x) = 32(x + 4)",
    "4x + 9 - 2(3x + 1 - 5) = 10",
    "9 + 10 + 7x - 20x - 3",
    "22x - 5(2 - x) = 30(x + 4)",
  ];
  const Update = Equations.map((item) => item.question);
  return <>
    <div className="flex flex-col items-center">
    <div className="flex flex-col bg-gradient-to-r from-blue-500 to-indigo-900 self-center px-9 pt-9 pb-20 mt-8 max-w-full rounded-[42.517px] w-[712px] max-md:px-5">
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        {/* <img loading="lazy" src="src/components/FlashcardContent/Assets/Vector (15).png" alt=""  /> */}
        <MdLightbulbOutline
          color="white"
          size="28"
          className="cursor-pointer"
        />
        <HiSpeakerWave color="white" size="28" className="cursor-pointer" />
      </div>
      <div className="self-center mt-28 mb-16 text-4xl font-bold tracking-wider text-center text-white max-md:my-10">
        {Equations[count-1]}
      </div>
    </div>
    <div>

      {/* ------------------------------------------- */}

    <nav className="flex gap-5 justify-between items-center self-center mt-8 max-w-full text-2xl font-bold text-gray-800 whitespace-nowrap w-[612px] max-md:flex-wrap ">
      <MdOutlineRefresh
        size="50"
        color="blue-500"
        className="cursor-pointer text-indigo-900"
        onClick={() => setCount(1)}
      />
      <div className="flex gap-5 justify-between self-stretch ">
        <img
          loading="lazy"
          src="/Assets/Vector (16).png"
          alt=""
          className="shrink-0 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[60px] cursor-pointer"
          onClick={() => count > 1 && setCount(count-1)}
        />
        <div className="my-auto">{count < 10 && 0}<span>{count}</span>/10</div>
        <img
          loading="lazy"
          src="/Assets/Vector (17).png"
          alt=""
          className="shrink-0 aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[60px] cursor-pointer"
          onClick={() => count < 10 && setCount(count+1)}
        />
      </div>
      <img
        loading="lazy"
        src="/Assets/Vector (18).png"
        alt=""
        className="shrink-0 self-stretch my-auto aspect-square fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] w-[30px] cursor-pointer"
      />
    </nav>
    </div>
    </div>
   </>
};

export default FlashcardContent;

import React from 'react'

const Footer = () => {
    return (
        <footer className="flex gap-5 justify-between px-0.5 mt-20 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-0 justify-between text-xs font-bold text-zinc-500">
            <img loading="lazy" src="src/components/Footer/Assets/Group 1.png" alt="" className="shrink-0 aspect-square w-[115px] h-[115px] " />
            <div className="flex flex-col justify-center self-start items-start py-6 ">
              <div>Published by</div>
              <img loading="lazy" src="src/components/Footer/Assets/Component 40 (1).png" alt="Publisher Logo" className="self-center mt-3 aspect-[3.33] w-[115px]" />
            </div>
          </div>
          <div className="flex gap-2 my-auto text-3xl font-semibold">
            <img loading="lazy" src="src/components/Footer/Assets/Vector (19).png" alt="" className="shrink-0 aspect-square w-[60px]" />
            <div className="my-auto bg-clip-text">Create Flashcard</div>
          </div>
        </footer>
      );
}

export default Footer

import React from 'react'

const StudyNav = () => {
    return (
        <nav className="flex gap-5 justify-center self-center mt-14 text-xl font-medium whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:mt-10 cursor-pointer">
          <div className="flex flex-col justify-center font-bold text-blue-950">
            <div className="px-3 pb-3.5 border-b border-blue-950 ">Study</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="px-3 pb-3.5">Quiz</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="px-3 pb-3.5">Test</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="px-3 pb-3.5">Game</div>
          </div>
          <div className="flex flex-col justify-center">
            <div className="px-3 pb-3.5">Others</div>
          </div>
        </nav>
      );
}

export default StudyNav

import React from "react";
import { NavLink } from "react-router-dom";

const StudyNav = () => {
  return (
    <nav className="flex gap-5 justify-center self-center mt-14 text-xl font-medium whitespace-nowrap text-zinc-500 max-md:flex-wrap max-md:mt-10 cursor-pointer">
      <div className="flex flex-col justify-center  ">
        <NavLink
          to="/study"
          className={({ isActive, isPending }) =>
            isPending
              ? "cursor-pointer"
              : isActive
              ? "cursor-pointer  text-blue-900 border-b border-blue-950 font-bold"
              : ""
          }
        >
          <div className="px-3 pb-3.5  ">Study</div>
        </NavLink>
      </div>
      <div className="flex flex-col justify-center">
        <NavLink
          to="/quiz"
          className={({ isActive, isPending }) =>
            isPending
              ? "cursor-pointer"
              : isActive
              ? "cursor-pointer  text-blue-900 border-b border-blue-950 font-bold"
              : ""
          }
        >
          <div className="px-3 pb-3.5">Quiz</div>
        </NavLink>
      </div>
      <div className="flex flex-col justify-center">
        <NavLink
          to="/test"
          className={({ isActive, isPending }) =>
            isPending
              ? "cursor-pointer"
              : isActive
              ? "cursor-pointer  text-blue-900 border-b border-blue-950 font-bold"
              : ""
          }
        >
          <div className="px-3 pb-3.5">Test</div>
        </NavLink>
      </div>
      <div className="flex flex-col justify-center">
        <NavLink
          to="/game"
          className={({ isActive, isPending }) =>
            isPending
              ? "cursor-pointer"
              : isActive
              ? "cursor-pointer  text-blue-900 border-b border-blue-950 font-bold"
              : ""
          }
        >
          <div className="px-3 pb-3.5">Game</div>
        </NavLink>
      </div>
      <div className="flex flex-col justify-center">
        <NavLink
          to="/others"
          className={({ isActive, isPending }) =>
            isPending
              ? "cursor-pointer"
              : isActive
              ? "cursor-pointer  text-blue-900 border-b border-blue-950 font-bold"
              : ""
          }
        >
          {" "}
          <div className="px-3 pb-3.5">Others</div>
        </NavLink>
      </div>
    </nav>
  );
};

export default StudyNav;

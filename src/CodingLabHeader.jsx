import React from "react";

export const CodingLabHeader = ({ isCollapsed }) => {
  return (
    <div className="flex justify-around items-center">
      <button className="cursor-pointer bg-[hsl(var(--primary-focus))] text-[hsl(var(--foreground-focus))] rounded-2xl w-14 h-14 font-bold">
        CL
      </button>
      {!isCollapsed && (
        <span className="flex flex-col text-[hsl(var--foreground)]">
          CodingLab
          <span className="flex-1 font-extralight text-sm ">Web developer</span>
        </span>
      )}
    </div>
  );
};

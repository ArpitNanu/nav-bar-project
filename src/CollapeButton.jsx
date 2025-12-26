import React, { useState } from "react";
import RightArrow from "./assets/RightArrow.svg?react";
export const CollapesButton = ({ isCollapsed, onToggle }) => {
  return (
    <div className="w-6 h-6 rounded-full bg-[hsl(var(--primary-focus))] text-[hsl(var(--foreground-focus))] relative cursor-pointer">
      <button onClick={onToggle}>
        <RightArrow
          className={`absolute top-auto bottom-0 transition-transform  cursor-pointer ${
            isCollapsed ? "rotate-180 delay" : "rotate-0 delay"
          }`}
        />
      </button>
    </div>
  );
};

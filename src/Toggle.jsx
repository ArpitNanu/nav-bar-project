import React, { useEffect } from "react";
import { useState } from "react";

export const Toggle = ({ }) => {
  const [isDarkMode, setisDarkMode] = useState(false);

  const handleCheckboxChange = (event) => {
    setisDarkMode(event.target.checked);
  };
  useEffect(() => {
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <label className="inline-flex cursor-pointer items-center">
      <input
        className="sr-only"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleCheckboxChange}
      />{" "}
      <div
        className={`rounded-full w-10 h-5 p-1 relative transition-colors ${
          isDarkMode ? "bg-[hsl(var(--primary-focus))] delay " : "bg-gray-400"
        }`}
      >
        <div
          className={`w-3 h-3  rounded-full bg-amber-50 absolute transition-transform ${
            isDarkMode ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
};

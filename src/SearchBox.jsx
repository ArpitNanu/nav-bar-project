import React from "react";

const SearchBox = ({ icon: Icon, inputdetail, isCollapsed }) => {
  return (
    <div className="flex gap-2 m-1 p-2 bg-[hsl(var(--secondary))] rounded-xl   ">
      <Icon />
      {!isCollapsed && (
        <input
          className="w-20 text-gray"
          type="text"
          placeholder={inputdetail}
        />
      )}
    </div>
  );
};
export default SearchBox;

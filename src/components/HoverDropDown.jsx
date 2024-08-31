import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function HoverDropDown() {
  return (
    <div className="relative inline-block group">
      <button
        type="button"
        className="px-4 py-2 text-white rounded bg-blue-700 flex items-center gap-2"
      >
        Dropdown
        <IoMdArrowDropdown
          size={20}
          className="transition-transform duration-300 group-hover:rotate-180"
        />
      </button>
      <div
        className="absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg opacity-0 translate-y-2 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-y-0"
      >
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Option 1
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Option 2
        </a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">
          Option 3
        </a>
      </div>
    </div>
  );
}

export default HoverDropDown;

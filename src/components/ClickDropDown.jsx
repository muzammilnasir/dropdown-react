import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

function ClickDropDown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        type="button"
        className="px-4 py-2 text-white rounded bg-blue-700 flex items-center gap-2"
        onClick={toggleDropdown}
      >
        Dropdown
        <IoMdArrowDropdown size={20} className={`${isOpen ? "rotate-180" : "rotate-0"} transition-all duration-300`} />
      </button>
      <div
        className={`absolute right-0 mt-2 w-full bg-white border border-gray-200 rounded shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        <a href="#" className="block px-4 py-2">
          Option 1
        </a>
        <a href="#" className="block px-4 py-2">
          Option 2
        </a>
        <a href="#" className="block px-4 py-2">
          Option 3
        </a>
      </div>
    </div>
  );
}

export default ClickDropDown;

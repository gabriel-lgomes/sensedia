import React from "react";
import { IoSearch } from "react-icons/io5";

export default function Search() {
  return (
    <form action="" className="relative mt-8">
      <input
        type="text"
        name="search"
        placeholder="Procurar"
        className="w-full py-2 px-4 mt-4 bg-[#F3F3F3] rounded-t border-b border-gray-75 focus:outline-0"
      />
      <button className="text-lg absolute right-2 top-7">
        <IoSearch />
      </button>
    </form>
  );
}

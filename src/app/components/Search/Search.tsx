import React from "react";
import { IoSearch } from "react-icons/io5";

type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function Search({ value, onChange }: SearchProps) {
  return (
    <form action="" className="relative mt-8">
      <input
        type="text"
        name="search"
        placeholder="Procurar"
        className="w-full py-2 px-4 mt-4 bg-[#F3F3F3] rounded-t border-b border-gray-75 focus:outline-0"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      <button className="text-lg absolute right-2 top-7">
        <IoSearch />
      </button>
    </form>
  );
}

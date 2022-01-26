import React from "react";
import { ReactComponent as Search } from "../../assets/svgs/search1.svg";
const SearchBar = () => {
  return (
    <div className="flex flex-row items-center  border-2 border-black rounded-2xl px-3 ">
      <input
        className=" appearance-none border-none focus:outline-none "
        placeholder="search"
      />
      <Search
        className="fill-current text-black stroke-current pl-1"
        width="30"
        height="30"
        fill="#000"
        stroke="crimson"
      />
    </div>
  );
};

export default SearchBar;

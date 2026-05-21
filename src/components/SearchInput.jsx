import { useState } from "react";
import ProductCard from "./ProductCard";


const SearchInput = ({ searchHandler }) => {

  return ( 
    <>
      <input
        type="search"
        placeholder="Search a product..."
        className="border border-gray-400 p-3 rounded-lg w-auto max-w-200 "
        onChange={searchHandler}
      />
    </>
  );
};
export default SearchInput;

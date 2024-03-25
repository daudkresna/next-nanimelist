"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const SearchInput = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  function handleSearch(e) {
    if (e.key === "Enter" && searchRef.current.value != "") {
      e.preventDefault();
      const searchKey = searchRef.current.value;
      router.push(`/search/${searchKey}`);
    }
  }
  return (
    <input
      type="search"
      name="inputanime"
      id="inputanime"
      onKeyDown={handleSearch}
      ref={searchRef}
      className="p-2 w-full md:w-fit"
    />
  );
};

export default SearchInput;

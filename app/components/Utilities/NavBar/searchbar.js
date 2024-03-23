"use client";

import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const SearchInput = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  function handleSearch(e) {
    if (e.key === "Enter") {
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
    />
  );
};

export default SearchInput;

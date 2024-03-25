import Link from "next/link";
import React from "react";

const Header = ({ sectionTitle, linkRef, linkTitle }) => {
  return (
    <div className="px-8 py-4 flex justify-between">
      <h1 className="font-bold">{sectionTitle}</h1>
      {linkRef && linkTitle ? (
        <Link
          href={linkRef}
          className="font-semibold transition ease-in-out duration-300 hover:text-sky-600"
        >
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;

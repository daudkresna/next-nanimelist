import React from "react";
import Link from "next/link";

const Pagination = ({ params }) => {
  return (
    <div className="flex m-4 justify-center items-center gap-4">
      <Link
        href={params.page != 1 ? `./${params.page - 1}` : `./${params.page}`}
      >
        <button>Prev</button>
      </Link>
      <h1>Halaman ke {params.page}</h1>
      <Link href={`./${parseInt(params.page) + 1}`}>
        <button>Next</button>
      </Link>
    </div>
  );
};

export default Pagination;

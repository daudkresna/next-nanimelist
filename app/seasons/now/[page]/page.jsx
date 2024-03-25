"use client";

import AnimeList from "@/app/components/AnimeList";
import Pagination from "@/app/components/Utilities/pagination";
import React, { useEffect, useState } from "react";
import { getAnimesApi } from "@/app/libs/api-libs";

const Page = ({ params }) => {
  const [nowAnimes, setNowAnimes] = useState([]);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    const data = await getAnimesApi("seasons/now", `page=${params.page}`);
    setNowAnimes(data);
  };

  useEffect(() => {
    fetchData();
  }, [params.page]);

  return (
    <div>
      <AnimeList animes={nowAnimes} />
      <Pagination params={params} />
    </div>
  );
};

export default Page;

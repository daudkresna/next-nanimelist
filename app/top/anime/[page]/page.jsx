"use client";

import AnimeList from "@/app/components/AnimeList";
import Pagination from "@/app/components/Utilities/pagination";
import { getAnimesApi } from "@/app/libs/api-libs";
import React, { useEffect, useState } from "react";

const Page = ({ params }) => {
  const [topAnimes, setTopAnimes] = useState([]);

  const fetchData = async () => {
    const data = await getAnimesApi("top/anime", `?page=${params.page}`);
    setTopAnimes(data);
  };

  useEffect(() => {
    fetchData();
  }, [params.page]);

  return (
    <div>
      <AnimeList animes={topAnimes} />
      <Pagination params={params} />
    </div>
  );
};

export default Page;

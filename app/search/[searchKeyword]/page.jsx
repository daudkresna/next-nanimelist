import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/header";
import { getAnimesApi } from "@/app/libs/api-libs";
import React from "react";

const Page = async ({ params }) => {
  const animeSearch = await getAnimesApi(
    "anime",
    `q=${params.searchKeyword}&sfw&order_by=rank&sort=asc`
  );

  return (
    <>
      <section>
        <Header sectionTitle="Pencarian Anime" />
        <AnimeList animes={animeSearch} />
      </section>
    </>
  );
};

export default Page;

import Link from "next/link";
import React from "react";
import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/header";
import { getAnimesApi } from "./libs/api-libs";

const Home = async () => {
  const topAnimes = await getAnimesApi("top/anime", "limit=8");
  const newAnimes = await getAnimesApi("seasons/now", "limit=8");
  const page = 1;

  return (
    <>
      <section>
        <Header
          sectionTitle="Top Anime"
          linkRef={`./top/anime/${page}`}
          linkTitle="Lihat Top Anime"
        />
        <AnimeList animes={topAnimes} />
      </section>
      <section>
        <Header
          sectionTitle="Musim Ini"
          linkRef={`./seasons/now/${page}`}
          linkTitle="Lihat Anime Musim Ini"
        />
        <AnimeList animes={newAnimes} />
      </section>
    </>
  );
};

export default Home;

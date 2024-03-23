import Link from "next/link";
import React from "react";
import AnimeList from "./components/AnimeList";
import Header from "./components/AnimeList/header";

const Home = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`
  );
  const animes = await response.json();

  const newAnimesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/seasons/now?limit=8`
  );

  const newAnimes = await newAnimesResponse.json();

  return (
    <>
      <section>
        <Header
          sectionTitle="Top Anime"
          linkRef="./top/anime"
          linkTitle="Lihat Top Anime"
        />
        <AnimeList animes={animes} />
      </section>
      <section>
        <Header
          sectionTitle="Musim Ini"
          linkRef="./seasons/new"
          linkTitle="Lihat Anime Musim Ini"
        />
        <AnimeList animes={newAnimes} />
      </section>
    </>
  );
};

export default Home;

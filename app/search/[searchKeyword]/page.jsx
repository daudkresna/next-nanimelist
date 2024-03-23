import AnimeList from "@/app/components/AnimeList";
import Header from "@/app/components/AnimeList/header";
import Link from "next/link";
import React from "react";

const Page = async ({ params }) => {
  const newAnimesResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${params.searchKeyword}&limit=8`
  );

  const searchAnime = await newAnimesResponse.json();

  return (
    <>
      <section>
        <Header sectionTitle="Pencarian Anime" />
        <AnimeList animes={searchAnime} />
      </section>
    </>
  );
};

export default Page;

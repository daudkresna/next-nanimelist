import { userSession } from "@/app/libs/auth-libs";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/components/AnimeList/header";
import { getUserCollection } from "@/app/libs/getUserCollection";

const Page = async () => {
  const user = await userSession();
  const collection = await getUserCollection(user);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-4 mt-8">
        <h1 className="text-xl font-bold">
          Selamat Datang, <span className="text-sky-600">{user.name}</span>
        </h1>
        <Image src={user.image} alt={user.name} width={200} height={200} />
      </div>
      <Header sectionTitle="Koleksiku" />
      <div className="px-8 py-4 grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-2">
        {collection.map((data, index) => {
          return (
            <div key={index} className="shadow-xl overflow-hidden text-center">
              <Link href={`/anime/${data.anime_mal_id}`}>
                <Image
                  src={data.anime_image}
                  alt={data.anime_title}
                  width={200}
                  height={200}
                  className="object-fill w-full h-[300px]"
                />
                <p className="p-2 text-sm font-bold truncate">
                  {data.anime_title}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Page;

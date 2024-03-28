import VideoPlayer from "@/app/components/Utilities/VideoPlayer";
import { getAnimesApi } from "@/app/libs/api-libs";
import Image from "next/image";
import CollectionButton from "./CollectionButton";
import { userSession } from "@/app/libs/auth-libs";
import prisma from "@/app/libs/prisma";

export default async function AnimeDetails({ params }) {
  const animeInfo = await getAnimesApi("anime/", `${params.animeId}`);
  const user = await userSession();
  const checkCollection = await prisma.collection.findFirst({
    where: { user_email: `${user?.email}`, anime_mal_id: `${params.animeId}` },
  });

  return (
    <div className="p-4">
      <div className="text-center relative">
        <h1 className="text-xl font-bold">{animeInfo.data.title_english}</h1>
        <h3 className="text-lg font-semibold text-slate-400">
          {animeInfo.data.title_japanese}
        </h3>
        {!checkCollection && user && (
          <CollectionButton
            user_email={user?.email}
            mal_anime_id={params.animeId}
            anime_title={animeInfo.data.title}
            anime_image={animeInfo.data.images.webp.image_url}
          />
        )}
      </div>
      <div className="flex md:flex-row flex-col px-2 my-2">
        <div className=" mr-4 flex items-center flex-row w-full text-center md:flex-col md:w-1/4">
          <Image
            src={animeInfo.data.images.webp.image_url}
            alt={
              animeInfo.data.title_english
                ? animeInfo.data.title_english
                : animeInfo.data.title
            }
            width={200}
            height={200}
            className="object-fill md:w-full h-[300px] transition duration-300 ease-in-out"
          />
          <div className="flex flex-col justify-center w-full py-4">
            <p className="font-light text-neutral-800">
              Score: {animeInfo.data.score}
            </p>
            <p className="font-light text-neutral-800">
              Rank: {animeInfo.data.rank}
            </p>
          </div>
        </div>
        <p className="py-4 text-sm font-semibold md:text-lg md:w-full md:py-0">
          {animeInfo.data.synopsis}
        </p>
      </div>
      <VideoPlayer youtubeId={animeInfo.data.trailer.youtube_id} />
    </div>
  );
}

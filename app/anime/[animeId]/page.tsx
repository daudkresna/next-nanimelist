import Image from "next/image";

export default async function AnimeDetails({
  params,
}: {
  params: { animeId: string };
}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/anime/${params.animeId}`
  );

  const anime = await response.json();
  return (
    <div className="p-4">
      <div className="text-center">
        <h1 className="text-xl font-bold">{anime.data.title_english}</h1>
        <h3 className="text-lg font-semibold text-slate-400">
          {anime.data.title_japanese}
        </h3>
      </div>
      <div className="flex md:flex-row flex-col px-2 my-2">
        <div className=" mr-4 flex items-center flex-row w-full text-center md:flex-col md:w-1/4">
          <Image
            src={anime.data.images.webp.image_url}
            alt={
              anime.data.title_english
                ? anime.data.title_english
                : anime.data.title
            }
            width={200}
            height={200}
            className="object-fill md:w-full h-[300px] transition duration-300 ease-in-out"
          />
          <div className="flex flex-col justify-center w-full py-4">
            <p className="font-light text-neutral-800">
              Score: {anime.data.score}
            </p>
            <p className="font-light text-neutral-800">
              Popularity: {anime.data.popularity}
            </p>
          </div>
        </div>
        <p className="text-sm md:text-lg md:w-full">{anime.data.synopsis}</p>
      </div>
    </div>
  );
}

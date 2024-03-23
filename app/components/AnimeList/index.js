import Image from "next/image";
import Link from "next/link";

const AnimeList = ({ animes }) => {
  return (
    <div className="px-8 grid md:grid-cols-4 gap-4 sm:grid-cols-3 grid-cols-2 ">
      {animes.data.map((data) => {
        return (
          <div
            key={data.mal_id}
            className="shadow-xl overflow-hidden text-center"
          >
            <Link href={`/anime/${data.mal_id}`}>
              <Image
                src={data.images.webp.image_url}
                alt={data.title_english ? data.title_english : data.title}
                width={200}
                height={200}
                className="object-fill w-full h-[300px] transition duration-300 ease-in-out hover:scale-[102%]"
              />
              <p className="p-2 text-sm font-bold truncate">
                {data.title_english ? data.title_english : data.title}
              </p>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default AnimeList;

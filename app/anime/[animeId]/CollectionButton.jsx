import { addCollection } from "@/app/libs/addToCollection";

const CollectionButton = ({
  user_email,
  mal_anime_id,
  anime_title,
  anime_image,
}) => {
  return (
    <form action={addCollection} method="POST">
      <input
        name="malAnimeId"
        value={mal_anime_id}
        className="hidden"
        readOnly
      />
      <input name="userEmail" value={user_email} className="hidden" readOnly />
      <input
        name="animeTitle"
        value={anime_title}
        className="hidden"
        readOnly
      />
      <input
        name="animeImage"
        value={anime_image}
        className="hidden"
        readOnly
      />
      <button
        type="submit"
        className="bg-sky-400 p-2 my-4 md:absolute md:right-2 md:top-0 md:my-0"
      >
        Add To Collection
      </button>
    </form>
  );
};

export default CollectionButton;

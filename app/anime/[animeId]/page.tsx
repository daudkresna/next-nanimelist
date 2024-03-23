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
    <div className="p-4 text-center">
      <h1 className="text-xl font-bold">{anime.data.title_english}</h1>
      <h3 className="text-lg font-semibold text-slate-400">
        {anime.data.title_japanese}
      </h3>
    </div>
  );
}

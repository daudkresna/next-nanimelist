import Link from "next/link";
import SearchInput from "./searchbar";

export default function NavBar() {
  return (
    <header className="bg-sky-600">
      <div className="py-4 px-8 flex-col text-center md:text-left md:flex-row flex justify-between gap-2">
        <Link href="/" className="text-xl font-bold text-neutral-200">
          NaNimeList
        </Link>
        <SearchInput />
      </div>
    </header>
  );
}

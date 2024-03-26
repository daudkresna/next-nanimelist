import Link from "next/link";
import SearchInput from "./searchbar";
import UserButton from "./UserButton";

export default function NavBar() {
  return (
    <header className="bg-sky-600">
      <div className="py-4 px-8 flex-col flex justify-between gap-2 md:text-left md:flex-row md:items-center">
        <Link href="/" className="text-xl font-bold text-neutral-200">
          NaNimeList
        </Link>
        <SearchInput />
        <UserButton />
      </div>
    </header>
  );
}

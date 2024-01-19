"use client";

import SearchIcon from "@/icons/SearchIcon";
import { useBoardStore } from "@/store/BoardStore";

function Header() {
  const [searchString, setSearchString] = useBoardStore((state) => [
    state.searchString,
    state.setSearchString,
  ]);

  return (
    <header className="flex flex-col gap-4 md:flex-row items-center justify-between p-4 bg-white/50 rounded-b-xl shadow-md">
      <span className="text-4xl font-bold bg-gradient-to-tl from-blue-600 to-cyan-600 bg-clip-text text-transparent cursor-pointer">
        <a href="/">Trello App</a>
      </span>

      <div className="flex items-center space-x-5">
        <form className="flex items-center space-x-2 bg-white rounded-md p-2 shadow-md">
          <SearchIcon />
          <input
            type="text"
            placeholder="Buscar"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
            className="flex-1 outline-none"
          />
        </form>
      </div>
    </header>
  );
}

export default Header;

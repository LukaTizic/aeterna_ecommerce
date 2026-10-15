import { SearchIcon } from "lucide-react";

const Search = () => {
  return (
    <form action="/search" method="GET" role="search">
      <label className="flex h-12 w-full items-center gap-2.5 rounded-full border bg-background pl-5 pr-1.5 text-muted-foreground focus-within:ring-2 focus-within:ring-ring">
        <SearchIcon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
        <span className="sr-only">Search products</span>
        <input
          name="query"
          type="search"
          placeholder="Search shirts, hoodies..."
          className="h-full w-full bg-transparent text-[15px] text-foreground outline-none placeholder:text-muted-foreground"
        />
        <button
          type="submit"
          className="h-9 shrink-0 rounded-full bg-primary px-4 text-sm font-semibold text-primary-foreground hover:opacity-90"
        >
          Search
        </button>
      </label>
    </form>
  );
};

export default Search;

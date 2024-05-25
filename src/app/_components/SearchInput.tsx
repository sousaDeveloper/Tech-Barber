import { SearchIcon } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="flex gap-2">
      <div className="relative mt-3 w-full">
        <input
          type="text"
          placeholder="Busque por uma barbearia..."
          autoComplete="off"
          className="w-full rounded-xl border pl-2 py-2 border-[#f59a73] bg-transparent text-base/6 ring-transparent transition placeholder:text-neutral-500"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-[#4B9093] text-white transition hover:bg-[#36686a]"
          >
            <SearchIcon className="text-black" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;

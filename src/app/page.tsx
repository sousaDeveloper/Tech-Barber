import SearchInput from "./_components/SearchInput";

export default async function Home() {
  return (
    <>
      <div className="py-3 px-5">
        <div className="border-2 border-solid bg-[#f59a73] rounded-xl p-2">
          <h1 className="font-bold">Olá, Matheus!</h1>
          <span className="text-sm">Sábado, 25 de maio.</span>
        </div>
        <SearchInput />
      </div>
    </>
  );
}

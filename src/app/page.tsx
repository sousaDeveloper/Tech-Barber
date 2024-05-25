"use client";

import { useSession } from "next-auth/react";

import SearchInput from "./_components/SearchInput";

export default function Home() {
  const { data, status } = useSession();

  return (
    <>
      <div className="py-3 px-5">
        <div className="bg-[#f59a73] rounded-xl p-2 shadow-xl">
          {status === "authenticated" ? (
            <h1 className="font-bold">Olá, {data?.user?.name?.split(" ")[0]}! Vai de corte hoje?</h1>
          ) : (
            <h1 className="font-bold">Olá. Faça seu login!</h1>
          )}

          <span className="text-sm">Sábado, 25 de maio.</span>
        </div>
        <SearchInput />
      </div>
    </>
  );
}

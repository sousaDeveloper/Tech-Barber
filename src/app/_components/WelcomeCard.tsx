"use client";

import { useSession } from "next-auth/react";

const WelcomeCard = () => {
  const { data, status } = useSession();

  return (
    <div className="bg-[#f59a73] rounded-xl p-2 shadow-xl">
      {status === "authenticated" ? (
        <h1 className="font-bold">Olá, {data?.user?.name?.split(" ")[0]}. Vai um corte hoje?</h1>
      ) : (
        <h1 className="font-bold">Olá. Faça seu login e agende seu corte!</h1>
      )}

      <span className="text-sm">Sábado, 25 de maio.</span>
    </div>
  );
};

export default WelcomeCard;

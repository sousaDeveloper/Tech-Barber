"use client";

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useSession } from "next-auth/react";

interface WelcomeCardProps {
  aosData: string;
}

const WelcomeCard = ({ aosData }: WelcomeCardProps) => {
  const { data, status } = useSession();

  return (
    <div className="bg-[#f59a73] rounded-xl p-2 shadow-xl" data-aos={`${aosData}`}>
      {status === "authenticated" ? (
        <h1 className="font-bold md:text-lg xl:text-xl">Olá, {data?.user?.name?.split(" ")[0]}. Vai um corte hoje?</h1>
      ) : (
        <h1 className="font-bold md:text-lg">Olá. Faça seu login e agende seu corte!</h1>
      )}

      <span className="text-sm capitalize">{format(new Date(), "EEEE, d 'de' MMMM", { locale: ptBR })}.</span>
    </div>
  );
};

export default WelcomeCard;

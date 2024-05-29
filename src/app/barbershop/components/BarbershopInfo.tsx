import { Smartphone } from "lucide-react";

import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface BarbershopInfoProps {
  barbershop: Barbershop;
}

const BarbershopInfo = ({ barbershop }: BarbershopInfoProps) => {
  return (
    <main className="flex flex-col px-3">
      <div className="border-b-2 pb-2">
        <h1 className="font-bold">Sobre nós</h1>
        <p className="text-sm">
          Bem-vindo à {barbershop.name}, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes
          de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.
        </p>
      </div>

      <h1 className="font-bold mt-2">Contato</h1>
      <div className="flex flex-col gap-2 border-b-2 pb-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Smartphone />
            <p>{barbershop.phone[0]}</p>
          </div>
          <button className="bg-[#228992] hover:bg-[#16585e] hover:text-white px-2 py-1 rounded transition-all duration-300">
            Copiar
          </button>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Smartphone />
            <p>{barbershop.phone[1]}</p>
          </div>
          <button className="bg-[#228992] hover:bg-[#16585e] hover:text-white px-2 py-1 rounded transition-all duration-300">
            Copiar
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-1 mt-2 border-b-2 pb-2">
        <h1 className="font-bold">Horário de Atendimento</h1>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Domingo</p>
          <p>Fechado</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Segunda</p>
          <p>Fechado</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Terça</p>
          <p>09:00 - 21:00</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Quarta</p>
          <p>09:00 - 21:00</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Quinta</p>
          <p>09:00 - 21:00</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Sexta</p>
          <p>09:00 - 21:00</p>
        </div>
        <div className="flex justify-between text-sm">
          <p className="opacity-75">Sábado</p>
          <p>08:00 - 17:00</p>
        </div>
      </div>

      <div className="mt-2">
        <h1 className="font-bold">Localização</h1>
        <Image
          src="/barbershop-map.png"
          alt="barbershop-map"
          width={0}
          height={0}
          sizes="100vh"
          className="w-full object-cover absolute pr-6"
        />
        <div className="relative top-28 bg-[#228992] mx-5 rounded px-3 py-1 text-center">
          <p className="text-sm font-bold">{barbershop.address}</p>
        </div>
      </div>
    </main>
  );
};

export default BarbershopInfo;

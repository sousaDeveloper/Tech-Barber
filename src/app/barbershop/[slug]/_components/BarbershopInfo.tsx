import Image from "next/image";

import { Barbershop } from "@prisma/client";

import ContactPhone from "@/app/_components/ContactPhone";

interface BarbershopInfoProps {
  barbershop: Pick<Barbershop, "name" | "phone" | "address">;
  dataAos?: string;
}

const BarbershopInfo = ({ barbershop, dataAos }: BarbershopInfoProps) => {
  return (
    <main
      className="flex flex-col px-3 md:bg-[#dadada] md:rounded-xl h-fit lg:w-[17rem] xl:w-[25rem] lg:py-2 md:shadow-2xl"
      data-aos={`${dataAos}`}
      data-aos-duration="1000"
    >
      <div className="border-b-2 pb-2">
        <h1 className="font-bold lg:text-lg">Sobre nós</h1>
        <p className="text-sm">
          Bem-vindo à {barbershop.name}, onde tradição encontra estilo. Nossa equipe de mestres barbeiros transforma cortes
          de cabelo e barbas em obras de arte. Em um ambiente acolhedor, promovemos confiança, estilo e uma comunidade unida.
        </p>
      </div>

      <h1 className="font-bold mt-2">Contato</h1>
      <ContactPhone barbershop={barbershop} />

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
          className="w-full object-cover z-1"
        />
        <div className="z-2 bg-[#228992] relative bottom-[2.5rem] rounded mx-3 py-1 text-center">
          <p className="text-sm font-bold">{barbershop.address}</p>
        </div>
      </div>
    </main>
  );
};

export default BarbershopInfo;

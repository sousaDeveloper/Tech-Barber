import { Barbershop } from "@prisma/client";
import Image from "next/image";

interface BarbershopItemProps {
  barbershop: Barbershop;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  return (
    <div
      className="flex flex-col min-w-[170px] h-[270px] rounded-xl"
      style={{
        backgroundColor: "#dadada",
        backdropFilter: "blur(0.5rem)",
        WebkitBackdropFilter: "blur(0.5rem)",
      }}
    >
      <div className="p-1">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          width={0}
          height={0}
          className="w-full min-h-44 rounded-xl object-cover"
          sizes="100vh"
        />
      </div>
      <div className="px-2">
        <h1 className="text-ellipsis text-nowrap overflow-hidden font-bold">{barbershop.name}</h1>
        <p className="text-ellipsis text-nowrap overflow-hidden text-sm opacity-75">{barbershop.address}</p>
        <button className="w-full rounded-lg py-1 bg-[#4B9093] font-bold cursor-pointer">Reservar</button>
      </div>
    </div>
  );
};

export default BarbershopItem;

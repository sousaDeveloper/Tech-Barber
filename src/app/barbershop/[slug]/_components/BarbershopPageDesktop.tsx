import { MapPinIcon, StarIcon } from "lucide-react";
import Image from "next/image";

import { Barbershop } from "@prisma/client";

import ServiceList from "./ServiceList";
import BarbershopInfo from "./BarbershopInfo";

interface BarbershopDetailsDesktopProps {
  barbershop: Omit<Barbershop, "slug">;
}

const BarbershopPageDesktop = ({ barbershop }: BarbershopDetailsDesktopProps) => {
  return (
    <div className="flex-none hidden md:flex md:gap-10 lg:gap-20 mt-5 md:px-12 xl:px-16">
      <div className="flex flex-col">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-[30rem] rounded-xl"
          style={{
            objectFit: "cover",
          }}
        />
        <div className="flex justify-between items-center my-4">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg ml-[0.1rem]  lg:text-xl">{barbershop.name}</h1>

            <div className="flex items-center">
              <MapPinIcon size={20} className="text-[#228992]" />
              <p>{barbershop.address}</p>
            </div>
          </div>

          <div className="flex items-center flex-col bg-[#dadada] rounded-xl shadow-xl p-2">
            <span className="flex items-center">
              5,0 <StarIcon size={20} className="text-[#228992] mt-[0.1rem]" />
            </span>

            <p>899 avaliações</p>
          </div>
        </div>
        <ServiceList barbershopId={barbershop.id} />
      </div>
      <BarbershopInfo barbershop={barbershop} />
    </div>
  );
};

export default BarbershopPageDesktop;

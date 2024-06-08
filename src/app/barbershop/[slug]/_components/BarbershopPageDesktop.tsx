import { ChevronLeftIcon, MapPinIcon, StarIcon, TreeDeciduousIcon } from "lucide-react";
import Image from "next/image";

import { Barbershop } from "@prisma/client";

import ServiceList from "./ServiceList";
import BarbershopInfo from "./BarbershopInfo";
import Link from "next/link";
import SheetBarbershopInfo from "./SheetBarbershopInfo";

interface BarbershopDetailsDesktopProps {
  barbershop: Omit<Barbershop, "slug">;
}

const BarbershopPageDesktop = ({ barbershop }: BarbershopDetailsDesktopProps) => {
  return (
    <div className="md:flex md:gap-10 lg:gap-20 mt-5 md:px-12 xl:px-16">
      <Link href="/" className="absolute m-2">
        <ChevronLeftIcon
          size={28}
          className="rounded border border-black bg-[#228992] md:mt-0 hover:text-white transition-all duration-300"
        />
      </Link>
      <div className="flex flex-col">
        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          width={0}
          height={480}
          sizes="100vw"
          className="w-full h-[30rem] rounded-xl"
          style={{
            objectFit: "cover",
          }}
          priority={true}
        />
        <div className="flex justify-between items-center my-4" data-aos="fade-down" data-aos-duration="1000">
          <div className="flex flex-col">
            <h1 className="font-bold text-lg ml-[0.1rem]  lg:text-xl">{barbershop.name}</h1>

            <div className="flex items-center">
              <MapPinIcon size={20} className="text-[#228992]" />
              <p>{barbershop.address}</p>
            </div>
            <SheetBarbershopInfo barbershop={barbershop} />
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
      <div className="hidden flex-none lg:flex">
        <BarbershopInfo barbershop={barbershop} dataAos="fade-left" />
      </div>
    </div>
  );
};

export default BarbershopPageDesktop;

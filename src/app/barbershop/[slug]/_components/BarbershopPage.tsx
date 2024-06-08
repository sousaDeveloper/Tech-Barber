import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react";

import { Barbershop } from "@prisma/client";

import ServiceList from "./ServiceList";
import SheetBarbershopInfo from "./SheetBarbershopInfo";

interface BarbershopPageProps {
  barbershop: Omit<Barbershop, "slug">;
}

const BarbershopPage = ({ barbershop }: BarbershopPageProps) => {
  return (
    <main>
      <div className="relative w-full">
        <Link href="/" className="absolute">
          <ChevronLeftIcon
            size={28}
            className="rounded lg:rounded-lg border border-black bg-[#228992] m-5 md:mt-0 hover:text-white transition-all duration-300"
          />
        </Link>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          width={800}
          height={600}
          sizes="100vw"
          className="w-full h-auto"
          style={{
            objectFit: "cover",
          }}
          priority={true}
        />

        <section className="p-5 pt-2">
          <div className="flex flex-col" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="font-bold text-lg ml-[0.1rem]">{barbershop.name}</h1>

            <div className="flex items-center">
              <MapPinIcon size={20} className="text-[#228992]" />
              <p>{barbershop.address}</p>
            </div>

            <div className="flex items-center">
              <StarIcon size={20} className="text-[#228992]" />
              <p>5,0 (899 avaliações)</p>
            </div>
          </div>
          <SheetBarbershopInfo barbershop={barbershop} />
          <div className="border-t-2 md:hidden md:flex-none">
            <h1 className="font-bold mt-2">Nossos Serviços</h1>
            <ServiceList barbershopId={`${barbershop.id}`} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default BarbershopPage;

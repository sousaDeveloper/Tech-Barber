import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, MapPinIcon, StarIcon } from "lucide-react";

import { Barbershop } from "@prisma/client";

import ServiceList from "./ServiceList";
import BarbershopInfo from "./BarbershopInfo";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";

interface BarbershopPageProps {
  barbershop: Barbershop;
}

const BarbershopDetailsPage = ({ barbershop }: BarbershopPageProps) => {
  return (
    <main>
      <div className="relative w-full">
        <Link href="/" className="absolute">
          <ChevronLeftIcon
            size={28}
            className="rounded border border-black bg-[#228992] m-5 hover:text-white transition-all duration-300"
          />
        </Link>

        <Image
          src={barbershop.imageUrl}
          alt={barbershop.name}
          width={0}
          height={0}
          sizes="100vh"
          className="w-full h-auto"
          style={{
            objectFit: "cover",
          }}
        />

        <section className="p-5 pt-2">
          <div className="flex flex-col">
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

          <div className="flex gap-2 my-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="bg-[#f59a73] hover:text-white rounded px-5 py-1 font-bold transition-all duration-300 shadow-2xl">
                  Detalhes
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="p-0 overflow-x-auto">
                <SheetHeader className="border-b-2 font-bold pt-[1.2rem]">
                  <SheetTitle>Detalhes</SheetTitle>
                </SheetHeader>
                <div className="mt-2">
                  <BarbershopInfo barbershop={barbershop} />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <div className="border-t-2">
            <h1 className="font-bold mt-2">Nossos Serviços</h1>
            <ServiceList barbershopId={`${barbershop.id}`} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default BarbershopDetailsPage;

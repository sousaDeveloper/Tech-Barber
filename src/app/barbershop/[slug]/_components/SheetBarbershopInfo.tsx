"use client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";
import BarbershopInfo from "./BarbershopInfo";
import { Barbershop } from "@prisma/client";

interface SheetBarbershopInfo {
  barbershop: Omit<Barbershop, "slug">;
}

const SheetBarbershopInfo = ({ barbershop }: SheetBarbershopInfo) => {
  return (
    <div className="flex gap-2 my-3 lg:hidden lg:flex-none">
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
  );
};

export default SheetBarbershopInfo;

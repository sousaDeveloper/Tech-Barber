"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader } from "lucide-react";

import { Barbershop } from "@prisma/client";

interface BarbershopItemProps {
  barbershop: Omit<Barbershop, "phone" | "id">;
}

const BarbershopItem = ({ barbershop }: BarbershopItemProps) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="flex flex-col min-w-[170px] max-w-[200px] h-[270px] rounded-xl bg-[#dadada] lg:hover:-translate-y-2 transition-all duration-300">
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
        <Link href={`barbershop/${barbershop.slug}`} onClick={() => setIsLoading(true)}>
          <button className="w-full rounded-lg py-1 bg-[#4B9093] font-bold cursor-pointer flex justify-center hover:bg-[#2f6365] hover:text-[#e3e3e3] transition-all duration-300">
            {isLoading && <Loader size={18} className="animate-spin h-full py-[0.17rem]" />}
            <span className={`${isLoading && "flex-none hidden"}`}>Detalhes</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BarbershopItem;

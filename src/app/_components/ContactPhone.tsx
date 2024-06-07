"use client";

import { usePathname } from "next/navigation";
import { Smartphone } from "lucide-react";

import { Barbershop } from "@prisma/client";

interface ContactPhoneProps {
  barbershop: Pick<Barbershop, "phone">;
}

const ContactPhone = ({ barbershop }: ContactPhoneProps) => {
  const pathname = usePathname();

  return (
    <div className={`flex flex-col gap-2 border-b-2 pb-2 ${pathname === "/bookings" ? "mt-6" : "mt-0"}`}>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Smartphone />
          <p>{barbershop.phone[0]}</p>
        </div>
        <button className="bg-[#228992] hover:bg-[#16585e] hover:text-white px-2 rounded transition-all duration-300">
          Copiar
        </button>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Smartphone />
          <p>{barbershop.phone[1]}</p>
        </div>
        <button className="bg-[#228992] hover:bg-[#16585e] hover:text-white px-2 rounded transition-all duration-300">
          Copiar
        </button>
      </div>
    </div>
  );
};

export default ContactPhone;

"use client";

import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { Prisma } from "@prisma/client";

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";
import { Avatar, AvatarImage } from "@/_components/ui/avatar";
import ServiceContent from "./ServiceContent";

interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      barbershop: true;
      services: true;
      user: true;
    };
  }>;
}

const BookingItem = ({ booking }: BookingItemProps) => {
  const { data } = useSession();
  const pathname = usePathname();

  return (
    data?.user?.email === booking.user.email && (
      <div
        className={`flex justify-between border border-solid rounded-lg bg-[#dadada] ${
          pathname === "/bookings" ? "m-5 min-w-[18rem]" : "min-w-[21rem] m-0"
        }`}
      >
        <div className="flex flex-col gap-2 border-r-2 flex-1 p-2">
          <h1 className="bg-[#f59a73] rounded-xl w-fit p-[0.1rem] text-[#000000] text-sm">Confirmado</h1>
          <p className="font-bold">{booking.services.name}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={booking.barbershop.imageUrl}
                alt={booking.barbershop.name}
                width={0}
                height={0}
                sizes="100vh"
                className="rounded-full w-8 h-8 object-cover"
              />
              <p>{booking.barbershop.name}</p>
            </div>
            {pathname === "/bookings" && (
              <Sheet>
                <SheetTrigger asChild>
                  <button className="bg-[#4B9093] rounded px-2 text-[0.9rem] hover:bg-[#2a5254] hover:text-white transition-all duration-300">
                    Detalhes
                  </button>
                </SheetTrigger>
                <SheetContent className="p-0 pt-[1.1rem]">
                  <SheetHeader className="text-left border-b-2 pb-3">
                    <SheetTitle className="px-3">Detalhes da Reserva</SheetTitle>
                  </SheetHeader>
                  <div className="flex flex-col px-3 w-full">
                    <div className="pt-3">
                      <Image
                        src="/barbershop-map.png"
                        alt="barbershop-map"
                        width={0}
                        height={0}
                        sizes="100vh"
                        className="w-full z-1"
                      />
                      <div className="z-2 relative -top-[4rem] py-1 flex gap-2 bg-[#dadada] mx-4 px-4 rounded">
                        <Avatar>
                          <AvatarImage src={booking.barbershop.imageUrl} alt={booking.barbershop.name} />
                        </Avatar>
                        <div className="flex flex-col">
                          <h1 className="font-bold">{booking.barbershop.name}</h1>
                          <p className="text-ellipsis text-nowrap text-sm">{booking.barbershop.address}</p>
                        </div>
                      </div>
                    </div>
                    <h1 className="bg-[#f59a73] rounded-xl w-fit p-[0.1rem] -mt-12 text-[#000000] text-sm">Confirmado</h1>
                    <ServiceContent barbershop={booking.barbershop} service={booking.services} />
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>
        </div>
        <div className="flex flex-col text-center capitalize p-5">
          <p>{format(booking.Date, "MMMM", { locale: ptBR })}</p>
          <p className="text-xl font-bold">{format(booking.Date, "dd")}</p>
          <p className="text-sm">{format(booking.Date, "hh:mm")}</p>
        </div>
      </div>
    )
  );
};

export default BookingItem;

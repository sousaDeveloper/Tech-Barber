"use client";

import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

import { Prisma } from "@prisma/client";

import BookingDetails from "../bookings/_components/BookingDetails";

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
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="flex flex-col gap-2 border-r-2 flex-1 p-2">
          <h1 className="bg-[#f59a73] rounded-xl w-fit p-[0.1rem] text-[#000000] text-sm">Confirmado</h1>
          <p className="font-bold">{booking.services.name}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src={booking.barbershop.imageUrl}
                alt={booking.barbershop.name}
                width={32}
                height={32}
                sizes="100vw"
                className="rounded-full w-8 h-8 object-cover"
                priority={true}
              />
              <p>{booking.barbershop.name}</p>
            </div>
            {pathname === "/bookings" && <BookingDetails booking={booking} />}
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

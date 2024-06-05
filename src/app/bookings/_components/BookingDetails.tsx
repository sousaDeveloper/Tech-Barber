"use client";

import Image from "next/image";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Prisma } from "@prisma/client";
import CancelBooking from "@/app/_actions/cancel-booking";

import { toast } from "sonner";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";
import { Avatar, AvatarImage } from "@/_components/ui/avatar";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/_components/ui/alert-dialog";
import ContactPhone from "@/app/_components/ContactPhone";

interface BookingDetailsProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      barbershop: true;
      services: true;
    };
  }>;
}

const BookingDetails = ({ booking }: BookingDetailsProps) => {
  const handleDeleteBookingClick = async () => {
    try {
      await CancelBooking(booking.id);

      toast("Reserva cancelada com sucesso.");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
              className="w-full z-1 object-cover shadow-2xl"
            />
            <div className="z-2 relative -top-[4rem] py-1 flex gap-2 bg-[#dadada] mx-4 px-4 rounded mb-3 shadow-2xl">
              <Avatar>
                <AvatarImage src={booking.barbershop.imageUrl} alt={booking.barbershop.name} className="object-cover" />
              </Avatar>
              <div className="flex flex-col">
                <h1 className="font-bold">{booking.barbershop.name}</h1>
                <p className="text-ellipsis text-nowrap text-sm">{booking.barbershop.address}</p>
              </div>
            </div>
          </div>

          <h1 className="bg-[#f59a73] rounded-xl w-fit p-[0.1rem] -mt-12 text-[#000000] text-sm">Confirmado</h1>
          <div className="flex flex-col p-2 bg-[#dadada] rounded-lg gap-2 mt-1 shadow-2xl">
            <div className="flex justify-between border-b-2 border-[#4B9093]">
              <h1 className="text-sm font-bold">{booking.services.name}</h1>
              <p className="text-sm">R$ {+booking.services.price},00</p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm font-bold">Data</h1>
              <p className="text-sm capitalize">{format(booking.Date, "dd 'de' MMMM", { locale: ptBR })}</p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm font-bold">Horário</h1>
              <p className="text-sm">{format(booking.Date, "hh:mm")}</p>
            </div>
            <div className="flex justify-between">
              <h1 className="text-sm font-bold">Barbearia</h1>
              <p className="text-sm">{booking.barbershop.name}</p>
            </div>
          </div>

          <ContactPhone barbershop={booking.barbershop} />
        </div>

        <SheetFooter className="flex gap-2 w-full justify-center px-3 mt-5">
          <SheetClose className="w-full bg-[#dadada] rounded py-1 shadow-xl">
            <button>Voltar</button>
          </SheetClose>
          <AlertDialog>
            <AlertDialogTrigger className="w-full">
              <button className="bg-[#EF4444] rounded py-1 w-full shadow-xl">Cancelar Reserva</button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Deseja realmente cancelar a reserva?</AlertDialogTitle>
                <AlertDialogDescription>Cancelando, não será possível reverter a ação.</AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter className="flex items-center gap-2">
                <AlertDialogCancel className="w-full bg-[#dadada] shadow-xl">Voltar</AlertDialogCancel>
                <SheetClose className="w-full mt-2">
                  <AlertDialogAction onClick={handleDeleteBookingClick} className="shadow-xl w-full bg-[#EF4444]">
                    Cancelar
                  </AlertDialogAction>
                </SheetClose>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BookingDetails;

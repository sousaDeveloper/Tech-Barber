"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { toast } from "sonner";
import { signIn, useSession } from "next-auth/react";
import { format, setHours, setMinutes } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Barbershop, Service } from "@prisma/client";
import saveBooking from "../_actions/save-booking";
import { generateDayTimeList } from "../_helpers/hours";

import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";
import { Calendar } from "@/_components/ui/calendar";
import { useRouter } from "next/navigation";

interface ServiceItemProps {
  barbershop: Barbershop;
  service: Service;
}

const ServiceItem = ({ service, barbershop }: ServiceItemProps) => {
  const { status, data } = useSession();
  const router = useRouter();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [hour, setHour] = useState<string | undefined>();

  const handleHourClick = (time: string) => {
    setHour(time);
  };

  const handleDateClick = (date: Date | undefined) => {
    setDate(date);
    setHour(undefined);
  };

  const handleBookingClick = async () => {
    if (status === "unauthenticated") {
      return await signIn();
    }
  };

  const timeList = useMemo(() => {
    return date ? generateDayTimeList(date) : [];
  }, [date]);

  const handleBookingSubmit = async () => {
    try {
      if (!data?.user || !hour || !date) {
        return;
      }

      const dateHour = Number(hour.split(":")[0]);
      const dateMinutes = Number(hour.split(":")[1]);

      const newDate = setMinutes(setHours(date as any, dateHour), dateMinutes);

      await saveBooking({
        barbershopId: barbershop.id,
        serviceId: service.id,
        userId: (data.user as any).id,
        Date: newDate,
      });

      toast("Reserva criada com sucesso.", {
        description: `${format(newDate, "'Para' dd 'de' MMMM", { locale: ptBR })} às ${hour}.`,
        action: {
          label: "Vizualizar",
          onClick: () => router.push("/bookings"),
        },
      });
      return setDate(undefined);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex gap-1 h-[120px] mb-4 rounded-lg bg-[#dadada] p-1 shadow-xl">
      <Image
        src={service.imageUrl}
        alt={service.name}
        width={0}
        height={0}
        sizes="100vh"
        className="w-[100px] h-auto rounded-lg object-cover"
      />

      <div className="flex flex-col gap-1">
        <h1 className="font-bold">{service.name}</h1>
        <p className="text-sm opacity-75 w-full">{service.description}</p>

        <div className="flex justify-between items-center pt-1">
          <p className="text-[#f59a73] font-bold">R$ {+service.price},00</p>

          <Sheet>
            <SheetTrigger asChild>
              <button
                className="font-bold bg-[#4B9093] rounded-lg px-4 py-[0.2rem] hover:bg-[#2f6365] hover:text-[#e3e3e3] transition-all duration-300 border border-black"
                onClick={handleBookingClick}
              >
                Reservar
              </button>
            </SheetTrigger>
            <SheetContent className="p-0">
              <SheetHeader className="pt-[1.1rem] border-b-2 pb-2">
                <SheetTitle>Fazer Reserva</SheetTitle>
              </SheetHeader>

              <Calendar
                mode="single"
                selected={date}
                onSelect={handleDateClick}
                fromDate={new Date()}
                className="rounded-md border"
                locale={ptBR}
                styles={{
                  head_cell: {
                    width: "100%",
                    textTransform: "capitalize",
                  },
                  cell: {
                    width: "100%",
                  },
                  caption: {
                    textTransform: "capitalize",
                  },
                  button: {
                    color: "#4B9093",
                    fontWeight: "600",
                  },
                }}
              />
              {date && (
                <>
                  <div className="p-3 pb-[1.4rem] mt-2 flex gap-2 border-b-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
                    {timeList.map((time, index) => (
                      <button
                        key={index}
                        className={`${
                          hour === time ? "bg-[#4B9093] text-white" : "bg-[#dadada]"
                        }  rounded-lg px-2 py-1 transition-all duration-300`}
                        onClick={() => handleHourClick(time)}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </>
              )}
              {date && hour && (
                <>
                  <div className="flex flex-col p-2 bg-[#dadada] m-3 rounded-lg gap-2">
                    <div className="flex justify-between">
                      <h1 className="text-sm font-bold">{service.name}</h1>
                      <p className="text-sm">R$ {+service.price},00</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-sm font-bold">Data</h1>
                      <p className="text-sm capitalize">{format(date as any, "dd 'de' MMMM", { locale: ptBR })}</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-sm font-bold">Horário</h1>
                      <p className="text-sm">{hour}</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-sm font-bold">Barbearia</h1>
                      <p className="text-sm">{barbershop.name}</p>
                    </div>
                    <div className="flex justify-between">
                      <h1 className="text-sm font-bold">Local</h1>
                      <p className="text-sm">{barbershop.address}</p>
                    </div>
                  </div>

                  <SheetFooter className="mt-2 mx-3">
                    <SheetClose>
                      <p className="w-full bg-[#f59a73] py-1 rounded-lg font-bold" onClick={handleBookingSubmit}>
                        Confirmar Reserva
                      </p>
                    </SheetClose>
                  </SheetFooter>
                </>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;
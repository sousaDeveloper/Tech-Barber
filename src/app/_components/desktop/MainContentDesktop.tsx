import { db } from "@/_lib/prisma";
import VerifyUser from "@/app/_helpers/verify-user";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/_components/ui/carousel";
import SearchInput from "../SearchInput";
import WelcomeCard from "../WelcomeCard";
import BookingItem from "../BookingItem";
import BarbershopItem from "../BarbershopItem";

const MainContentDesktop = async () => {
  const booking = await db.booking.findMany({
    include: {
      barbershop: true,
      services: true,
      user: true,
    },
  });
  const barbershops = await db.barbershop.findMany({});

  return (
    <div className="hidden flex-none md:flex md:justify-between xl:justify-around gap-4 lg:gap-10">
      <div className="flex flex-col justify-center w-[22rem] lg:w-[26rem] xl:w-[30rem]">
        <WelcomeCard aosData="fade-right" />
        <SearchInput aosData="fade-right" dataAosDuration="1000" />
        <VerifyUser>
          <Carousel className="w-full" orientation="vertical">
            <h1 className="font-bold mt-5">Agendamentos</h1>

            <CarouselContent className="-mt-1 h-[120px]">
              {booking.map((booking, index) => (
                <CarouselItem className="pt-1 md:basis-1" key={index}>
                  <BookingItem booking={booking} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </VerifyUser>
      </div>

      <Carousel className="w-full max-w-sm" data-aos="fade-left">
        <h1 className="font-bold text-lg">Recomendados</h1>
        <CarouselContent className="-ml-1 flex gap-8">
          {barbershops
            .map((barbershop, index) => (
              <CarouselItem className="pl-1 md:basis-1/2 lg:basis-[40%]" key={index}>
                <BarbershopItem barbershop={barbershop} />
              </CarouselItem>
            ))
            .slice(0, 5)}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />  
      </Carousel>
    </div>
  );
};

export default MainContentDesktop;

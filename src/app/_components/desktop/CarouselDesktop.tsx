import { db } from "@/_lib/prisma";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/_components/ui/carousel";
import BarbershopItem from "../BarbershopItem";

const CarouselDesktop = async () => {
  const barbershops = await db.barbershop.findMany({});

  return (
    <>
      <div className="hidden flex-none md:flex xl:hidden xl:flex-none">
        <Carousel className="w-[90%] md:w-full">
          <h1 className="font-bold text-lg mt-5 xl:mt-10">Populares</h1>
          <CarouselContent className="-ml-1">
            {barbershops
              .map((barbershop, index) => (
                <CarouselItem className="pl-1 md:basis-[25%] lg:basis-[22%] xl:basis-[20%] 2xl:basis-[18%]" key={index}>
                  <BarbershopItem barbershop={barbershop} />
                </CarouselItem>
              ))
              .slice(0, 5)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="hidden flex-none md:flex xl:hidden xl:flex-none">
        <Carousel className="w-[90%] md:w-full">
          <h1 className="font-bold text-lg mt-4">Mais Visitados</h1>
          <CarouselContent className="-ml-1">
            {barbershops
              .map((barbershop, index) => (
                <CarouselItem className="pl-1 md:basis-[25%] lg:basis-[22%] xl:basis-[20%] 2xl:basis-[18%]" key={index}>
                  <BarbershopItem barbershop={barbershop} />
                </CarouselItem>
              ))
              .slice(5, 10)}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
};

export default CarouselDesktop;

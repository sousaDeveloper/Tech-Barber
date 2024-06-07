import { db } from "../../_lib/prisma";
import BarbershopItem from "./BarbershopItem";

const BarbershopList = async () => {
  const barbershops = await db.barbershop.findMany({});

  const barbershopsRecommendeds = barbershops
    .map((barbershop) => <BarbershopItem barbershop={barbershop} key={barbershop.id} />)
    .slice(0, 5);

  const barbershopsPopulars = barbershops
    .map((barbershop) => <BarbershopItem barbershop={barbershop} key={barbershop.id} />)
    .slice(5, 10);

  return (
    <>
      <h1 className="font-bold uppercase md:hidden md:flex-none" data-aos="fade-up" data-aos-duration="1000">
        Recomendados
      </h1>
      <h1 className="font-bold hidden flex-none md:flex text-lg" data-aos="fade-up" data-aos-duration="1000">
        Populares
      </h1>
      <div
        className="flex overflow-x-auto gap-6 [&::-webkit-scrollbar]:hidden md:pt-4 lg:pt-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {barbershopsRecommendeds}
      </div>

      <h1 className="font-bold uppercase md:hidden md:flex-none mt-6" data-aos="fade-up" data-aos-duration="1000">
        Populares
      </h1>
      <h1 className="font-bold hidden flex-none md:flex mt-6 text-lg" data-aos="fade-up" data-aos-duration="1000">
        Mais Visitados
      </h1>
      <div
        className="flex overflow-x-auto gap-6 [&::-webkit-scrollbar]:hidden md:pt-4 lg:pt-2"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {barbershopsPopulars}
      </div>
    </>
  );
};

export default BarbershopList;

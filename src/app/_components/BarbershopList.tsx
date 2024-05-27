import { db } from "../_lib/prisma";
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
      <h1 className="font-bold uppercase">Recomendados</h1>
      <div className="flex overflow-x-auto gap-6 [&::-webkit-scrollbar]:hidden">{barbershopsRecommendeds}</div>

      <h1 className="font-bold uppercase mt-5">Populares</h1>
      <div className="flex overflow-x-auto gap-6 [&::-webkit-scrollbar]:hidden">{barbershopsPopulars}</div>
    </>
  );
};

export default BarbershopList;

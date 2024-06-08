import { db } from "@/_lib/prisma";

import BarbershopPage from "./_components/BarbershopPage";
import BarbershopPageDesktop from "./_components/BarbershopPageDesktop";

interface BarbershopPageProps {
  params: {
    slug: string;
  };
}

const Barbershop = async ({ params: { slug } }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findMany({
    where: {
      slug: slug,
    },
    include: {
      services: true,
    },
  });

  return barbershop.map((barbershop, index) => (
    <>
      <div className="md:hidden md:flex-none">
        <BarbershopPage barbershop={barbershop} key={index} />
      </div>
      <div className="flex-none hidden md:flex">
        <BarbershopPageDesktop barbershop={barbershop} key={index} />
      </div>
    </>
  ));
};

export default Barbershop;

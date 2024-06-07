import { db } from "@/_lib/prisma";

import BarbershopPage from "./_components/BarbershopPage";

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

  return barbershop.map((barbershop) => <BarbershopPage key={barbershop.id} barbershop={barbershop} />);
};

export default Barbershop;

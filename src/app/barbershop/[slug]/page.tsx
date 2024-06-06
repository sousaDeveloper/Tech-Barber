import { db } from "@/_lib/prisma";

import BarbershopDetailsPage from "./_components/BarbershopDetailsPage";

interface BarbershopPageProps {
  params: {
    slug?: string;
  };
}

const BarbershopPage = async ({ params: { slug } }: BarbershopPageProps) => {
  const barbershop = await db.barbershop.findMany({
    where: {
      slug: slug,
    },
    include: {
      services: true,
    },
  });

  return barbershop.map((barbershop) => <BarbershopDetailsPage key={barbershop.id} barbershop={barbershop} />);
};

export default BarbershopPage;

import { db } from "@/_lib/prisma";

import ServiceItem from "./ServiceItem";

interface ServiceListProps {
  barbershopId: string;
}

const ServiceList = async ({ barbershopId }: ServiceListProps) => {
  const services = await db.service.findMany({
    where: {
      barbershopId: barbershopId,
    },
  });

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: barbershopId,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) return null;

  return services.map((service) => <ServiceItem barbershop={barbershop} service={service} key={service.id} />);
};

export default ServiceList;

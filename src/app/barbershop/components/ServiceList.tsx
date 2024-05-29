import { db } from "@/app/_lib/prisma";
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

  return services.map((service) => <ServiceItem service={service} key={service.id} />);
};

export default ServiceList;

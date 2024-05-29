import Image from "next/image";

import { Service } from "@prisma/client";

import ButtonReservation from "./ButtonReservation";

interface ServiceItemProps {
  service: Service;
}

const ServiceItem = ({ service }: ServiceItemProps) => {
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
          <ButtonReservation />
        </div>
      </div>
    </div>
  );
};

export default ServiceItem;

import { Barbershop, Prisma, Service } from "@prisma/client";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

interface ServiceContentProps {
  service: Service;
  barbershop: Barbershop;
  date?: Date;
  hour?: string;
}

const ServiceContent = ({ service, barbershop, date, hour }: ServiceContentProps) => {
  return (
    <div className="flex flex-col p-2 bg-[#dadada] m-3 rounded-lg gap-2">
      <div className="flex justify-between">
        <h1 className="text-sm font-bold">{service.name}</h1>
        <p className="text-sm">R$ {+service.price},00</p>
      </div>
      <div className="flex justify-between">
        <h1 className="text-sm font-bold">Data</h1>
        <p className="text-sm capitalize">{format(date as any, "dd 'de' MMMM", { locale: ptBR })}</p>
      </div>
      <div className="flex justify-between">
        <h1 className="text-sm font-bold">Horário</h1>
        <p className="text-sm">{hour}</p>
      </div>
      <div className="flex justify-between">
        <h1 className="text-sm font-bold">Barbearia</h1>
        <p className="text-sm">{barbershop.name}</p>
      </div>
      <div className="flex justify-between">
        <h1 className="text-sm font-bold">Local</h1>
        <p className="text-sm">{barbershop.address}</p>
      </div>
    </div>
  );
};

export default ServiceContent;

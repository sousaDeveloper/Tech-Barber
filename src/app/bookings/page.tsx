import Link from "next/link";

import { db } from "../_lib/prisma";

import BookingItem from "../_components/BookingItem";

const BookingsPage = async () => {
  const booking = await db.booking.findMany({
    include: {
      barbershop: true,
      services: true,
      user: true,
    },
  });

  return (
    <>
      {booking.length !== 0 ? (
        booking.map((booking, index) => (
          <div key={index} className="mt-0">
            <BookingItem booking={booking} />
          </div>
        ))
      ) : (
        <h1 className="px-3 mt-2">
          Você <span className="font-semi bold">não possui</span> nenhum agendamento.{" "}
          <Link href="/" className="underline text-[#f59a73] font-bold">
            Voltar
          </Link>
        </h1>
      )}
    </>
  );
};

export default BookingsPage;

import VerifyUser from "../_helpers/verify-user";
import { db } from "../../_lib/prisma";

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
      <VerifyUser>
        {booking.map((booking, index) => (
          <div key={index} className="mt-0">
            <BookingItem booking={booking} />
          </div>
        ))}
      </VerifyUser>
    </>
  );
};

export default BookingsPage;

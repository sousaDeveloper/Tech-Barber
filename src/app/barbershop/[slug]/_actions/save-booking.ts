"use server";

import { db } from "@/app/_lib/prisma";

interface SaveBookingParams {
  barbershopId: string;
  userId: string;
  serviceId: string;
  Date: Date;
}

const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      serviceID: params.serviceId,
      barbershopId: params.barbershopId,
      userId: params.userId,
      Date: params.Date,
    },
  });
};

export default saveBooking;

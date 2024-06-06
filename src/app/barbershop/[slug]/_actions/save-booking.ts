"use server";

import { db } from "@/_lib/prisma";
import { revalidatePath } from "next/cache";

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

  revalidatePath("/");
  revalidatePath("/bookings");
};

export default saveBooking;

"use server";

import { revalidatePath } from "next/cache";

import { db } from "../_lib/prisma";

const CancelBooking = async (bookingId: string) => {
  await db.booking.delete({
    where: {
      id: bookingId,
    },
  });

  revalidatePath("/");
  revalidatePath("/bookings");
};

export default CancelBooking;

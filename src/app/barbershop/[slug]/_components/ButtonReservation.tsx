"use client";

import { signIn, useSession } from "next-auth/react";

const ButtonReservation = () => {
  const { status } = useSession();

  const handleBookingClick = async () => {
    if (status === "unauthenticated") {
      return await signIn();
    }
  };

  return (
    <button
      className="font-bold bg-[#4B9093] rounded-lg px-4 py-[0.2rem] hover:bg-[#2f6365] hover:text-[#e3e3e3] transition-all duration-300 border border-black"
      onClick={handleBookingClick}
    >
      Reservar
    </button>
  );
};

export default ButtonReservation;

import { db } from "./_lib/prisma";

import SearchInput from "./_components/SearchInput";
import BarbershopList from "./_components/BarbershopList";
import WelcomeCard from "./_components/WelcomeCard";
import BookingsPage from "./bookings/page";

export default async function Home() {
  const booking = await db.booking.findMany({});

  return (
    <>
      <div className="py-3 px-5">
        <WelcomeCard />
        <SearchInput />

        {booking.length >= 1 && (
          <>
            <h1 className="font-bold uppercase mt-5">Agendamentos</h1>
            <div className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <BookingsPage />
            </div>
          </>
        )}

        <div className="mt-5">
          <BarbershopList />
        </div>
      </div>
    </>
  );
}

import { db } from "../_lib/prisma";

import SearchInput from "./_components/SearchInput";
import BarbershopList from "./_components/BarbershopList";
import WelcomeCard from "./_components/WelcomeCard";
import BookingsPage from "./bookings/page";
import CarouselDesktop from "./_components/CarouselDesktop";
import MainContentDesktop from "./_components/MainContentDesktop";

export default async function Home() {
  const booking = await db.booking.findMany({});

  return (
    <>
      <div className="py-3 px-5 lg:px-20 xl:px-56">
        <div className="md:flex-none md:hidden">
          <WelcomeCard />
          <SearchInput />
        </div>

        <div className="md:flex-none md:hidden">
          {booking.length >= 1 && (
            <>
              <h1 className="font-bold uppercase mt-5">Agendamentos</h1>
              <div className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
                <BookingsPage />
              </div>
            </>
          )}
        </div>
        <MainContentDesktop />
        <CarouselDesktop />
        <div className="mt-5 md:flex-none md:hidden xl:flex xl:flex-col">
          <BarbershopList />
        </div>
      </div>
    </>
  );
}

import VerifyUser from "./_helpers/verify-user";

import SearchInput from "./_components/SearchInput";
import BarbershopList from "./_components/BarbershopList";
import WelcomeCard from "./_components/WelcomeCard";
import BookingsPage from "./bookings/page";
import CarouselDesktop from "./_components/desktop/CarouselDesktop";
import MainContentDesktop from "./_components/desktop/MainContentDesktop";

export default async function Home() {
  return (
    <>
      <div className="py-3 px-5 lg:px-20 xl:px-32 2xl:px-[25rem]">
        <div className="md:flex-none md:hidden">
          <WelcomeCard aosData="fade-up" />
          <SearchInput aosData="fade-up" />
        </div>

        <div className="md:flex-none md:hidden">
          <VerifyUser>
            <h1 className="font-bold uppercase mt-5">Agendamentos</h1>
            <div className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden">
              <BookingsPage />
            </div>
          </VerifyUser>
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

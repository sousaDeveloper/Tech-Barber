import SearchInput from "./_components/SearchInput";
import BarbershopList from "./_components/BarbershopList";
import CardHello from "./_components/WelcomeCard";

export default function Home() {
  return (
    <>
      <div className="py-3 px-5">
        <CardHello />
        <SearchInput />

        <div className="mt-5">
          <BarbershopList />
        </div>
      </div>
    </>
  );
}

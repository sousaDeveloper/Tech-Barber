"use client";

import { useEffect, useMemo, useState } from "react";
import { CalendarDays } from "lucide-react";
import Link from "next/link";

import UserMenu from "./UserMenu";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const headerStyle = useMemo(() => {
    const styles = {
      backgroundColor: scrolled ? "#4b8f93b2" : "transparent",
      transition: "background-color 0.3s ease",
      WebkitBackdropFilter: "blur(0.3rem)",
      backdropFilter: "blur(0.3rem)",
    };
    return styles;
  }, [scrolled]);

  return (
    <header className=" p-5 shadow-xl text-black top-0 z-50 sticky" style={headerStyle}>
      <nav className="flex justify-between items-center">
        <Link href="/">
          <h1 className="font-bold text-lg text-center">Tech Barber</h1>
        </Link>
        <div className="flex items-center gap-2">
          <Link href="/bookings">
            <p className="flex-none hidden sm:flex items-center gap-1 px-1 py-2 text-[0.91rem] transition-all duration-300 w-full hover:text-[#f59a73]">
              <CalendarDays size={18} />
              <span className="mt-[0.1rem] font-bold">Agendamentos</span>
            </p>
          </Link>
          <UserMenu />
        </div>
      </nav>
    </header>
  );
};

export default Header;

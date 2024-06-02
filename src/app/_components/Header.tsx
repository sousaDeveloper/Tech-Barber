"use client";

import { useEffect, useMemo, useState } from "react";
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
    <header className="flex justify-between items-center p-5 shadow-2xl text-black top-0 z-50 sticky" style={headerStyle}>
      <Link href="/">
        <h1 className="font-bold text-lg text-center">Tech Barber</h1>
      </Link>

      <UserMenu />
    </header>
  );
};

export default Header;

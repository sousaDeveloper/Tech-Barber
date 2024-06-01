"use client";

import { useEffect, useState } from "react";

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

  const headerStyle = {
    backgroundColor: scrolled ? "#4b8f93b2" : "transparent",
    transition: "background-color 0.3s ease",
    WebkitBackdropFilter: "blur(0.3rem)",
    backdropFilter: "blur(0.3rem)",
  };

  return (
    <header className="flex justify-between items-center p-5 shadow-2xl text-black top-0 z-50 sticky" style={headerStyle}>
      <h1 className="font-bold text-lg text-center">Tech Barber</h1>

      <UserMenu />
    </header>
  );
};

export default Header;

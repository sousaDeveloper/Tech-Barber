"use client";

import { CalendarDays, CircleUserIcon, LogInIcon, ShoppingCartIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-5 border-b border-solid bg-[#4B9093] shadow-2xl text-black">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              <CircleUserIcon size={28} />
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <button className="flex items-center gap-1 font-bold border-b border-solid border-[#bababa] text-left px-1 py-2 text-[0.91rem] hover:bg-[#228992] transition-all duration-300 w-full">
                <LogInIcon size={16} />
                Entrar
              </button>
              <button className="flex items-center gap-1 px-1 py-2 text-[0.91rem] hover:bg-[#228992] transition-all duration-300 w-full">
                <CalendarDays />
                <span>Agendamentos</span>
              </button>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <h1 className="font-bold text-lg text-center">Tech Barber</h1>

      <div className="p-1 rounded">
        <Sheet>
          <SheetTrigger>
            <ShoppingCartIcon className="text-black mt-1" />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <h1>Carrinho</h1>
              </SheetTitle>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

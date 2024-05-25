"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { CalendarDays, CircleUserIcon, LogInIcon, LogOutIcon, ShoppingCartIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/_components/ui/sheet";
import { Avatar, AvatarImage } from "@/_components/ui/avatar";

const Header = () => {
  const { data, status } = useSession();

  const handleSignInClick = async () => {
    await signIn();
  };

  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <header className="flex justify-between items-center p-5 bg-[#4B9093] shadow-2xl text-black top-0 z-50 sticky">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent">
              {status === "unauthenticated" ? (
                <CircleUserIcon size={28} />
              ) : (
                <Avatar>
                  <AvatarImage src={`${data?.user?.image}`} />
                </Avatar>
              )}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              {status === "unauthenticated" && (
                <button
                  className="flex items-center gap-1 font-bold border-b border-solid border-[#bababa] text-left px-1 py-2 text-[0.91rem] hover:bg-[#228992] transition-all duration-300 w-full"
                  onClick={handleSignInClick}
                >
                  <LogInIcon size={16} />
                  Entrar
                </button>
              )}
              <button className="flex items-center gap-1 px-1 py-2 border-b-2 border-solid text-[0.91rem] hover:bg-[#228992] transition-all duration-300 w-full">
                <CalendarDays />
                <span>Agendamentos</span>
              </button>
              {status === "authenticated" && (
                <button
                  className="flex items-center gap-1 font-bold border-b border-solid border-[#bababa] text-left px-1 py-2 text-[0.91rem] hover:bg-[#228992] transition-all duration-300 w-full"
                  onClick={handleSignOutClick}
                >
                  <LogOutIcon size={16} />
                  Sair
                </button>
              )}
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

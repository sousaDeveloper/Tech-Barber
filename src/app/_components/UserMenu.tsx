"use client";

import { signIn, signOut, useSession } from "next-auth/react";

import { CalendarDays, CircleUserIcon, LogInIcon, LogOutIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/_components/ui/navigation-menu";
import { Avatar, AvatarImage } from "@/_components/ui/avatar";

const UserMenu = () => {
  const { data, status } = useSession();

  const handleSignInClick = async () => {
    await signIn();
  };

  const handleSignOutClick = async () => {
    await signOut();
  };

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent">
            {status === "unauthenticated" ? (
              <CircleUserIcon size={28} className="cursor-pointer" />
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
  );
};

export default UserMenu;

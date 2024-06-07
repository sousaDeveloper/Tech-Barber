"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const VerifyUser = ({ children }: any) => {
  const { data } = useSession();
  const pathname = usePathname();

  return data?.user
    ? children
    : pathname === "/bookings" && (
        <h1 className="px-3 mt-2">
          Você <span className="font-semi bold">não possui</span> nenhum agendamento.{" "}
          <Link href="/" className="underline text-[#f59a73] font-bold">
            Voltar
          </Link>
        </h1>
      );
};

export default VerifyUser;

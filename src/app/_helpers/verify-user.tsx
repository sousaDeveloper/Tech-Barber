"use client";

import { useSession } from "next-auth/react";

const VerifyUser = ({ children }: any) => {
  const { data } = useSession();

  return data?.user && children;
};

export default VerifyUser;

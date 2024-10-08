"use client";

import { useState } from "react";
import { SignInFlow } from "../types";
import { SignInCard } from "./sign-in-card";
import { SignUpCard } from "./sign-up-card";

export const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");

  return (
    <div className="flex h-screen justify-center items-center bg-[#5C3B58]">
      {state === "signIn" ? <SignInCard /> : <SignUpCard />}
    </div>
  );
};

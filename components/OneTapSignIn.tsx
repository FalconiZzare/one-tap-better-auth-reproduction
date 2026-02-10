"use client";

import React, { useEffect } from "react";
import { authClient } from "@/lib/auth-client";

const OneTapSignIn = () => {
  const { data: session } = authClient.useSession();

  const initiateOneTap = async () => {
    await authClient.oneTap({
      context: "signin"
    });
  };

  useEffect(() => {
    initiateOneTap();
  }, []);

  return (
    <>
      {
        session &&
        <div className={"text-red-500"}>
          <p>{session.user.name}</p>
          <p>{session.user.email}</p>
        </div>
      }
    </>
  );
};

export default OneTapSignIn;
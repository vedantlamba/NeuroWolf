"use client"

import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";
import React from "react";

function DashboardView() {
  const { data: session } = authClient.useSession();
  if (!session) {
    redirect("/");
  }

  return <div></div>;
}

export default DashboardView;

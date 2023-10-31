"use client";
import React from "react";
import { trpc } from "../../utils/trpc";

function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export default trpc.withTRPC(Layout);

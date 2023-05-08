"use client";
import "./globals.css";
import { AuthContextProvider } from "@/context/AuthContext";
import Head from "@/app/head";
import React from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />
      <body>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}

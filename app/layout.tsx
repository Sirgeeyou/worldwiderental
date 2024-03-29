import React from "react";
import "./global.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { Toaster } from "@/components/Toaster";
import { Roboto } from "next/font/google";

export const metadata = {
  title: "WorldWideRental Network",
};

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

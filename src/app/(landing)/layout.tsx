import React from "react";
import { Footer } from "~/components/landing/footer";
import { Header } from "~/components/landing/header";

export default function LandingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background">
      <Header />
      {children}
      <div className="h-20" />
      <Footer />
    </div>
  );
}

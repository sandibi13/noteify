import { useEffect } from "react";
import AOS from "aos";

import { CTA } from "~/components/landing/CTA";
import { Features } from "~/components/landing/Features";
import { Header } from "~/components/landing/Header";
import { Hero } from "~/components/landing/Hero";
import { Pricing } from "~/components/landing/Pricing";
import { Footer } from "~/components/landing/Footer";

export default function Index() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 1000,
      easing: "ease-out-cubic",
    });
  });

  return (
    <>
      <Header />

      <main className="grow">
        <div className="overflow-x-hidden max-w-screen">
          <Hero />
          <Features />
          <Pricing />
          <CTA />
        </div>
      </main>

      <Footer />
    </>
  );
}

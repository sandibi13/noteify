import CTA from "~/components/landing/CTA";
import Features from "~/components/landing/Features";
import { Header } from "~/components/landing/Header";
import Hero from "~/components/landing/Hero";
import Pricing from "~/components/landing/Pricing";

export default function Index() {
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

      <footer></footer>
    </>
  );
}

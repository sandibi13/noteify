import { Particles } from "~/components/landing/Particles";
import { Link } from "@remix-run/react";
import ReactWrapBalancer from "~/components/WrapBalancer";
import { ArrowRight } from "lucide-react";

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="relative max-w-6xl min-h-screen px-4 mx-auto sm:px-6">
        {/* Particles animation */}
        <Particles className="absolute inset-0 -z-10" />

        <div className="pt-32 pb-16 md:pt-52 md:pb-32">
          {/* Hero content */}
          <div className="container mx-auto text-center">
            <div className="mb-6" data-aos="fade-down">
              <div className="relative inline-flex before:absolute before:inset-0">
                <Link
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1 text-sm font-medium inline-flex items-center justify-center border border-transparent rounded-full  text-zinc-300 hover:text-white transition duration-150 ease-in-out w-full group [background:linear-gradient(theme(colors.primary.900),_theme(colors.primary.900))_padding-box,_conic-gradient(theme(colors.primary.400),_theme(colors.primary.700)_25%,_theme(colors.primary.700)_75%,_theme(colors.primary.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-zinc-800/30 before:rounded-full before:pointer-events-none"
                  to="https://github.com/sandibi13/noteify"
                >
                  <span className="relative items-center inline-flex">
                    Noteify is Open Source{" "}
                    <span className="tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                      -&gt;
                    </span>
                  </span>
                </Link>
              </div>
            </div>
            <h1
              className="pb-4 font-extrabold tracking-tight text-transparent text-7xl lg:text-8xl bg-clip-text bg-gradient-to-r from-zinc-200/60 via-zinc-200 to-zinc-200/60"
              data-aos="fade-down"
            >
              <ReactWrapBalancer>AI-Powered Notes and To-Dos</ReactWrapBalancer>
            </h1>
            <p
              className="mb-8 text-lg text-zinc-300"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              Boost your productivity with intelligent organization and
              reminders
            </p>
            <div
              className="flex flex-col items-center max-w-xs mx-auto gap-4 sm:max-w-none sm:justify-center sm:flex-row sm:inline-flex"
              data-aos="fade-down"
              data-aos-delay="400"
            >
              <Link
                className="w-full justify-center items-center flex whitespace-nowrap transition duration-150 ease-in-out font-medium rounded px-4 py-1.5 text-zinc-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white group"
                to="/dashboard"
              >
                Get Started{" "}
                <ArrowRight className="w-3 h-3 tracking-normal text-primary-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1" />
              </Link>

              <Link
                className="w-full transition duration-150 ease-in-out bg-opacity-25 text-zinc-200 hover:text-white bg-zinc-900 hover:bg-opacity-30"
                to="https://github.com/sandibi13/noteify"
                target="_blank"
                rel="noreferrer"
              >
                Star on GitHub
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

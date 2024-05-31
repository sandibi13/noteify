import { Link } from "@remix-run/react";
import { Logo } from "~/components/Logo";

export const Header: React.FC = () => {
  return (
    <header className="absolute z-30 w-full">
      <div className="max-w-6xl px-4 mx-auto sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="mr-4 shrink-0">
            <Logo className="w-8 h-8 text-zinc-300 hover:text-white duration-500" />
          </Link>

          {/* Desktop navigation */}
          <nav className="flex grow">
            {/* Desktop sign in links */}
            <ul className="flex flex-wrap items-center justify-end grow">
              <li>
                <Link
                  to="/dashboard"
                  className="text-sm font-medium text-zinc-300 hover:text-white duration-500"
                >
                  Sign in
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

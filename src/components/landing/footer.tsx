import React from "react";
import Link from "next/link";
import { Code2 } from "lucide-react";
import { ModeToggle } from "~/components/landing/mode-toggle";
import { githubUrl, twitterUrl } from "~/constants";

export const Footer = () => {
  return (
    <footer className="mt-6 px-4 py-6">
      <div className="container flex items-center p-0">
        <Code2 className="mr-2 h-6 w-6" />
        <p className="text-sm">
          Built by{" "}
          <Link className="underline underline-offset-4" href={twitterUrl}>
            sandibi13
          </Link>
          . Get the source code from{" "}
          <Link className="underline underline-offset-4" href={githubUrl}>
            GitHub
          </Link>
          .
        </p>
        <div className="ml-auto">
          <ModeToggle />
        </div>
      </div>
    </footer>
  );
};

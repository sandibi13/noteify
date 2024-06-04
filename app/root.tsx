import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import type {
  LinksFunction,
  MetaFunction,
  LoaderFunction,
} from "@remix-run/node";
import stylesheet from "~/tailwind.css?url";

import { ThemeProvider } from "~/components/ThemeProvider";

import { rootAuthLoader } from "@clerk/remix/ssr.server";
import { ClerkApp } from "@clerk/remix";

export const meta: MetaFunction = () => {
  return [
    { title: "Noteify" },
    { name: "description", content: "Make todos and take notes in seconds" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader: LoaderFunction = (args) => rootAuthLoader(args);

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

function App() {
  return <Outlet />;
}

export default ClerkApp(App);

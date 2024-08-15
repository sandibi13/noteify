import "~/styles/globals.css";

import { fontSans } from "~/lib/fonts";
import type { Metadata, Viewport } from "next";
import { ThemeProvider } from "~/components/theme-provider";
import { cn } from "~/lib/utils";

export const metadata: Metadata = {
  title: "Noteify",
  description:
    "Your ultimate open-source note-taking companion with a versatile, intuitive interface",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}

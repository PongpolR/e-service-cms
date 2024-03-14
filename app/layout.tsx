import "@/styles/globals.css";
import { Metadata } from "next";
// import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "@mantine/tiptap/styles.css";
import "@mantine/core";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

export const metadata: Metadata = {
  title: {
    // default: siteConfig.name,
    default: "E-Service",
    // template: `%s - ${siteConfig.name}`,
    template: `E-Service`,
  },
  // description: siteConfig.description,
  description: "siteConfig.description",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      {/* <Head>
        <title>Home</title>
      </Head> */}
      <body
        suppressHydrationWarning={true}
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <MantineProvider>
          <div className="relative flex flex-col h-screen">
            <main className="">{children}</main>
          </div>
        </MantineProvider>
        {/* <Providers>
          <div className="relative flex flex-col h-screen">
            <main className="">{children}</main>
          </div>
        </Providers> */}
      </body>
    </html>
  );
}

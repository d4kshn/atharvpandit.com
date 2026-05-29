import "../global.css";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Metadata } from "next";
import { Analytics } from "./components/analytics";
import { SiteBackground } from "./components/site-background";
import { VisitTracker } from "./components/visit-tracker";
import { ThemeProvider } from "./components/theme-provider";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: {
    default: profile.displayName,
    template: `%s | ${profile.displayName}`,
  },
  description: profile.tagline,
  openGraph: {
    title: profile.displayName,
    description: profile.tagline,
    siteName: profile.displayName,
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: profile.displayName,
    card: "summary_large_image",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.png", type: "image/png" },
    ],
    shortcut: "/favicon.svg",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={[inter.variable, calSans.variable].join(" ")}
      suppressHydrationWarning
    >
      <head>
        <Analytics />
      </head>
      <body className="bg-white dark:bg-black">
        <ThemeProvider>
          <SiteBackground />
          <VisitTracker />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

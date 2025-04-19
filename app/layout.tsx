import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";


const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

// This layout is used for all pages in the app.
// It includes the global CSS and font styles.
// It also sets the metadata for the app, including the title and description.
// The `RootLayout` component wraps the entire app and provides a consistent layout.
// The `metadata` object contains the title and description for the app.
// The `RootLayout` component is exported as the default export of this module. This is the entry point for the app.
export const metadata: Metadata = {
  title: "PrepWise",
  description: "An AI-powered platform for preparing for Interviews",
};

export default function RootLayout({children, }: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${monaSans.className} antialiased pattern`}
      >
        {children}
      
        <Toaster />
        
      </body>
    </html>
  );
}

import { Geist, Geist_Mono, Share_Tech } from "next/font/google";
import "./globals.css";
import Parent from "@/components/Parent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const shareTech = Share_Tech({
  subsets: ["latin"],
  weight:"400"
});

export const metadata = {
  title: "Personal Portfolio",
  description: "Personal Client Portfolio",
  icons: [{ rel: "icon", url: "icon.png" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${shareTech.className}`}
      >
        {children}
        <Parent/>
      </body>
    </html>
  );
}

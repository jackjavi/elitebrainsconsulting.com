import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { HOME_OG_IMAGE_URL } from "@/lib/constants";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template:
      "%s | MERN Stack Development, Automation Bots & Digital Marketing",
    default: "Elite Brains Consulting",
  },
  description:
    "Professional MERN Stack Development, Custom Automation Bots, and Digital Marketing Services. We build scalable web applications, automate workflows, and connect brands with engaged audiences.",
  authors: [
    {
      name: "Elite Brains Consulting",
      url: "https://elitebrainsconsulting.com",
    },
  ],
  creator: "Elite Brains Consulting",
  publisher: "Elite Brains Consulting",
  applicationName: "Elite Brains Consulting",
  generator: "Next.js",
  themeColor: "#000000",
  colorScheme: "dark",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  keywords: [
    "MERN Stack Development, Full Stack Development, Web Development",
    "MongoDB, Express.js, React, Node.js",
    "Custom Web Applications, API Development, SaaS Development",
    "Automation Bots, X Bots, Twitter Bots, Telegram Bots",
    "WhatsApp Automation, Social Media Bots, AI Bots",
    "Academic Writing Bots, Bidding Bots, Task Automation",
    "Digital Marketing Kenya, Social Media Marketing",
    "X Marketing, Twitter Marketing, TikTok Marketing",
    "Telegram Marketing, Facebook Marketing",
    "Kenyan Audience, Global Audience, High Traffic Platforms",
    "Elite Brains Consulting, EBC Developers",
    "Professional Services, Technology Consulting",
    "Next.js Development, React Development, JavaScript",
    "TypeScript, Software Engineering, Web Applications",
    "E-Commerce Development, Booking Platforms",
    "UI/UX Design, Responsive Design, Modern Web Design",
    "RESTful API, Third-Party Integration, Backend Development",
    "Frontend Development, Database Design, Server Optimization",
    "Scalable Solutions, Enterprise Solutions, Startup Solutions",
    "SME Solutions, Business Automation, Workflow Automation",
    "Social Media Growth, Brand Visibility, Influencer Marketing",
    "Content Marketing, Campaign Management, Analytics",
    "life_meth_money, TNK254, trending_news_kenya",
    "Nairobi Kenya, African Tech, Global Tech Services",
  ],
  openGraph: {
    images: [HOME_OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

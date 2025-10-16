import React from "react";
import Link from "next/link";
import Header from "./_components/header-bg";
import Sidebar from "./_components/sidebar";
import Footer from "@/components/footer-2";
import ContactForm from "./_components/contact";
import { GoogleTagManager } from "@next/third-parties/google";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Elite Brains Consulting",
  description:
    "Reach Kenyan and Global Audiences Through Our High-Traffic Social Media Platforms",
  openGraph: {
    title: "Digital Marketing Services | Elite Brains Consulting",
    description:
      "Reach Kenyan and Global Audiences Through Our High-Traffic Social Media Platforms",
    url: "https://www.elitebrainsconsulting.com/digital-marketing",
  },
  keywords: [
    "digital marketing kenya, social media marketing, X marketing, telegram marketing, tiktok marketing, facebook marketing",
  ],
};

export default function DigitalMarketing() {
  return (
    <>
      <GoogleTagManager gtmId="G-WJPRHKB1MZ" />
      <Header />
      <div className="flex gap-8 pt-4 md:max-w-6xl mx-auto font-[family-name:var(--font-geist-sans)]">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="p-6 mb-20">
          {/* Navigation */}
          <div className="flex justify-between items-center text-gray-700 text-xs 2xl:text-sm">
            <Link href="/">
              <span className="cursor-pointer hover:underline">← Home</span>
            </Link>
            <Link href="/contact">
              <span className="cursor-pointer hover:underline">
                Contact Us →
              </span>
            </Link>
          </div>

          {/* Intro */}
          <div className="mt-6 text-center">
            <p className="text-xs lg:text-sm xl:text-md 2xl:text-lg font-semibold text-indigo-700">
              Reach High-Traffic Kenyan & Global Audiences Through Our Social
              Media Platforms
            </p>
            <div className="flex justify-center items-center mt-2">
              <div className="flex space-x-2">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 rounded-full bg-green-500"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-black text-gray-700">
            ELITE BRAINS CONSULTING – YOUR GATEWAY TO KENYAN & GLOBAL AUDIENCES
          </h1>

          <div className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg bg-gray-100 border-l-4 border-teal-500 p-4 italic text-gray-500">
            We own and manage high-traffic social media platforms that connect
            you directly with engaged Kenyan audiences and global followers.
            Whether you need brand visibility, product promotions, or community
            engagement—our platforms deliver real results.
          </div>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Our Marketing Platforms & Services:
          </h2>
          <ul className="list-disc pl-6 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed mt-4">
            <li>
              <span className="font-semibold text-blue-700">
                X (Twitter) - @life_meth_money:
              </span>{" "}
              High engagement platform targeting Kenyan youth, entrepreneurs,
              and global audiences. Perfect for brand storytelling, product
              launches, and viral campaigns.{" "}
              <Link
                href="https://x.com/life_meth_money"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Visit Platform →
              </Link>
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Telegram - TNK254:
              </span>{" "}
              Active community channel with thousands of subscribers interested
              in trending news, entertainment, and offers from Kenya.{" "}
              <Link
                href="https://t.me/tnk254"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Join Channel →
              </Link>
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                TikTok - @trending_news_kenya:
              </span>{" "}
              Video-first platform reaching young, mobile-savvy Kenyans with
              high shareability and viral potential.{" "}
              <Link
                href="https://www.tiktok.com/@trending_news_kenya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline hover:text-teal-800"
              >
                View Profile →
              </Link>
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Facebook Page:
              </span>{" "}
              Growing community page for longer-form content, events, and
              customer interaction across all demographics.{" "}
              <Link
                href="https://www.facebook.com/profile.php?id=61580639454595"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-600 underline hover:text-teal-800"
              >
                Follow Us →
              </Link>
            </li>
          </ul>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            What We Offer:
          </h2>
          <ul className="list-disc pl-6 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed mt-4">
            <li>
              <span className="font-semibold text-blue-700">
                Sponsored Posts & Content:
              </span>{" "}
              Get your brand, product, or service featured across our platforms
              with engaging, platform-specific content.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Campaign Management:
              </span>{" "}
              We design and execute full marketing campaigns tailored to your
              goals—from awareness to conversions.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Influencer Collaborations:
              </span>{" "}
              Leverage our reach and credibility to amplify your message to the
              right audience.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Analytics & Reporting:
              </span>{" "}
              Track engagement, reach, and ROI with detailed performance reports
              after every campaign.
            </li>
            <li>
              <span className="font-semibold text-blue-700">
                Community Building:
              </span>{" "}
              We help you grow your own social presence through cross-promotion
              and strategic collaborations.
            </li>
          </ul>

          <div className="mt-8">
            <ContactForm />
          </div>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Why Partner With Elite Brains Consulting?
          </h2>
          <ul className="list-disc pl-6 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed mt-4">
            <li>Proven Reach to Kenyan & Global Audiences</li>
            <li>High Engagement Rates Across All Platforms</li>
            <li>Affordable Packages for Startups & SMEs</li>
            <li>Fast Turnaround & Professional Content Creation</li>
            <li>Transparent Pricing & Campaign Metrics</li>
          </ul>

          <h2 className="mt-8 text-sm lg:text-md xl:text-lg 2xl:text-xl font-bold text-gray-700">
            Let&apos;s Grow Your Brand Together
          </h2>
          <p className="mt-4 text-xs lg:text-sm xl:text-md 2xl:text-lg text-gray-700 leading-relaxed">
            Whether you&apos;re launching a new product, building brand
            awareness, or driving traffic to your business—Elite Brains
            Consulting connects you with audiences that matter. Reach out today
            and let&apos;s craft a winning strategy for your brand.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const jetbrains = JetBrains_Mono({ variable: "--font-jetbrains", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amit Kumar Gupta — Full Stack Developer (Python) · Angular · GenAI",
  description:
    "Portfolio of Amit Kumar Gupta — Full Stack Developer with 2+ years shipping production apps in Python, Django REST Framework, FastAPI, PostgreSQL and Angular 14+, plus GenAI engineering with RAG, LangChain and AI agents.",
  openGraph: {
    type: "website",
    url: "https://amit13579.github.io/my-portfolio/",
    title: "Amit Kumar Gupta — Full Stack Developer (Python) · Angular · GenAI",
    description:
      "2+ years shipping production apps in Python, Django REST Framework, FastAPI, PostgreSQL and Angular 14+ — plus GenAI engineering with RAG, LangChain and AI agents.",
    images: ["https://amit13579.github.io/my-portfolio/assets/profile-photo.jpg"],
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

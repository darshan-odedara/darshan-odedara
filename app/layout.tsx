import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const siteUrl = "https://darshanodedara.vercel.app";
const siteTitle = "Darshan Odedara | Software Engineer";
const siteDescription =
  "Portfolio of Darshan Odedara, an associate software engineer focused on problem solving, system design, AI-assisted SDLC workflows, and healthcare technology.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Darshan Odedara",
  },
  description: siteDescription,
  keywords: [
    "Darshan Odedara",
    "Darshan Odedara portfolio",
    "associate software engineer",
    "software engineer India",
    "Greenway Health India",
    "system design",
    "problem solving",
    "agentic SDLC",
    "AI-assisted software development",
    "healthcare technology",
    "FHIR",
    "EHR",
    "VIT Chennai",
  ],
  authors: [{ name: "Darshan Odedara", url: siteUrl }],
  creator: "Darshan Odedara",
  publisher: "Darshan Odedara",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Darshan Odedara",
    images: [
      {
        url: "/profile.png",
        width: 1200,
        height: 1200,
        alt: "Darshan Odedara",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile.png"],
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Darshan Odedara",
  url: siteUrl,
  image: `${siteUrl}/profile.png`,
  jobTitle: "Associate Software Engineer",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Vellore Institute of Technology, Chennai",
  },
  worksFor: {
    "@type": "Organization",
    name: "Greenway Health India",
  },
  knowsAbout: [
    "Software Engineering",
    "System Design",
    "Problem Solving",
    "Agentic SDLC",
    "Healthcare Technology",
    "FHIR",
    "EHR Systems",
  ],
  sameAs: [
    "https://github.com/darshan-odedara",
    "https://www.linkedin.com/in/darshan-odedara/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="anek-latin antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider defaultTheme="system">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

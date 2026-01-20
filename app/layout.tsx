import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zachary Legros | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in React, TypeScript, and AI-powered security systems. 2+ years at Trend Micro with 451 PRs merged across 25 repositories.",
  keywords: [
    "Zachary Legros",
    "Full-Stack Developer",
    "Software Engineer",
    "React",
    "TypeScript",
    "Next.js",
    "Ottawa",
    "Canada",
  ],
  authors: [{ name: "Zachary Legros" }],
  creator: "Zachary Legros",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://zacharylegros.dev",
    title: "Zachary Legros | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, TypeScript, and AI-powered security systems.",
    siteName: "Zachary Legros Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zachary Legros | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in React, TypeScript, and AI-powered security systems.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || theme === 'light') {
                    document.documentElement.classList.add(theme);
                  } else {
                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                    document.documentElement.classList.add(prefersDark ? 'dark' : 'light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Zachary Legros",
              url: "https://zacharylegros.dev",
              email: "contact@zacharylegros.dev",
              jobTitle: "Full-Stack Developer",
              worksFor: {
                "@type": "Organization",
                name: "Trend Micro",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Ottawa",
              },
              sameAs: [
                "https://github.com/ZachLegros",
                "https://linkedin.com/in/zachary-legros",
              ],
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "Node.js",
                "Full-Stack Development",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <ThemeProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Navigation />
          <ThemeToggle />
          <div className="noise" aria-hidden="true" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

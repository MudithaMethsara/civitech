import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { FooterCopyright } from "@/components/footer-copyright";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Civitech Constructions | Next-Gen Construction Intelligence",
  description: "C4 Graded Contractor - Industrial, Commercial, and Residential Projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          
          {children}
          
          <footer className="bg-muted/50 text-muted-foreground py-12 border-t border-border">
            <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <Image 
                    src="/logo.png" 
                    alt="Civitech Logo" 
                    width={32} 
                    height={32} 
                    className="w-8 h-8 object-contain"
                  />
                  <h2 className="text-2xl font-bold text-foreground">CIVITECH</h2>
                </div>
                <p className="max-w-md">
                  Building the future of infrastructure in Sri Lanka with precision, quality, and innovation.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-foreground mb-4">Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                  <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
                  <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold text-foreground mb-4">Contact</h3>
                <ul className="space-y-2">
                  <li>info@civitech.lk</li>
                  <li>+94 11 234 5678</li>
                  <li>Colombo, Sri Lanka</li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto px-4 mt-12 pt-8 border-t border-border text-sm text-center">
              <FooterCopyright />
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}

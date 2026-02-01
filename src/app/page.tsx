import Link from 'next/link';
import { Suspense } from 'react';
import { ClientsMarquee } from '@/components/clients-marquee';
import { LeadMagnetForm } from '@/components/lead-magnet-form';
import { ArrowRight, Building2, HardHat, Truck } from 'lucide-react';
import { AiAssistant } from '@/components/ai-assistant';
import { HeroCarousel } from '@/components/hero-carousel';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations';
import { StatsCounter } from '@/components/stats-counter';
import { projects } from '@/lib/data';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-card text-card-foreground">
        <HeroCarousel />
        
        <FadeIn delay={0.2} className="container relative z-10 px-4 text-center max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium border border-primary/30">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span>Next-Gen Construction Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight">
              Building the <span className="text-primary">Future</span> of Infrastructure
            </h1>
            
            <p className="text-lg text-muted-foreground mx-auto max-w-2xl">
              Civitech Constructions (Pvt) Ltd. — A C4 graded contractor delivering industrial, residential, and institutional excellence since 2002.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/projects"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-md font-bold transition-all flex items-center"
              >
                View Portfolio <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                href="/about"
                className="bg-background/10 hover:bg-background/20 text-foreground border border-foreground/20 px-8 py-3 rounded-md font-bold transition-all"
              >
                About Us
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      <StatsCounter projectCount={projects.length} />

      <ClientsMarquee />

      {/* Feature Grid */}
      <section className="py-24 container mx-auto px-4">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Capabilities</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Delivering high-grade technical solutions across diverse construction sectors.</p>
        </FadeIn>
        <FadeInStagger className="grid md:grid-cols-3 gap-8">
          <FadeInItem className="p-8 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Building2 size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Industrial Excellence</h3>
            <p className="text-muted-foreground">Specialized in large-scale factory and office complexes for clients like Brandix and Lanka Tiles.</p>
          </FadeInItem>
          
          <FadeInItem className="p-8 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Truck size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">Institutional Projects</h3>
            <p className="text-muted-foreground">Trusted by government bodies for major infrastructure projects, including nursery buildings for Moragahakanda.</p>
          </FadeInItem>

          <FadeInItem className="p-8 bg-card rounded-2xl shadow-sm border border-border hover:border-primary/50 transition-colors group">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <HardHat size={24} />
            </div>
            <h3 className="text-xl font-bold mb-3">C4 Graded Quality</h3>
            <p className="text-muted-foreground">ICTAD/NCASL registered contractor ensuring highest standards of safety and construction quality.</p>
          </FadeInItem>
        </FadeInStagger>
      </section>

      {/* Inquiry Form Section at Bottom */}
      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-4xl font-bold mb-6">Ready to start your next major project?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Connect with Sri Lanka's leading C4 graded construction experts. We provide technical estimates based on national standards for industrial, residential, and commercial developments.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                  <p className="font-medium">Technical Consultation</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">2</div>
                  <p className="font-medium">C4 Grade Standards Compliance</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">3</div>
                  <p className="font-medium">Efficient Project Delivery</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <Suspense fallback={<div className="h-[400px] bg-card rounded-xl animate-pulse" />}>
                <LeadMagnetForm />
              </Suspense>
            </FadeIn>
          </div>
        </div>
      </section>

      <AiAssistant />
    </main>
  );
}

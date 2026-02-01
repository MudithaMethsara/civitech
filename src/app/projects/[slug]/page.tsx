import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { FadeIn } from '@/components/animations';

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  features: string[];
  location: string;
  year: string;
}

// Mock Data Lookup
const projects: Record<string, Project> = {
  'brandix-rideegama': {
    title: 'Brandix Office - Rideegama',
    category: 'Industrial',
    image: '/project_img/Commercial and Industrial Buildings/brandix_apparel-rideegama_office.jpg',
    description: 'A state-of-the-art office complex built for Brandix, showcasing modern industrial architecture and sustainable design principles.',
    features: ['Modern Office Space', 'Sustainable Design', 'High-grade Finishes', 'Canteen Facilities'],
    location: 'Rideegama',
    year: '2018'
  },
  'lanka-tiles-nugegoda': {
    title: 'Lanka Tiles Showroom',
    category: 'Industrial',
    image: '/project_img/Commercial and Industrial Buildings/lanka_tiels_plc-nugegoda.jpg',
    description: 'An elegant showroom designed to display premium tile products. Features extensive use of glass and steel for a contemporary look.',
    features: ['Large Display Areas', 'Customer Lounge', 'Parking Facility', 'Modern Lighting'],
    location: 'Nugegoda',
    year: '2019'
  },
  'res-project-41': {
    title: 'Luxury Residence - Negombo',
    category: 'Residential',
    image: '/project_img/Residential Projects/Picture41.jpg',
    description: 'A custom-designed luxury home featuring spacious living areas, modern amenities, and high-quality construction materials.',
    features: ['Custom Design', 'Landscaped Garden', 'Premium Fixtures', 'Secure Compound'],
    location: 'Negombo',
    year: '2020'
  },
  // Default fallback for others
  'default': {
    title: 'Civitech Project',
    category: 'Construction',
    image: '/project_img/Steel Structures/Picture25.jpg',
    description: 'One of our premier construction projects demonstrating our commitment to quality and safety.',
    features: ['C4 Graded Construction', 'On-time Delivery', 'Quality Materials'],
    location: 'Sri Lanka',
    year: '2022'
  }
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({
    slug: slug,
  }));
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug] || { ...projects['default'], title: `Project: ${slug}` };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="relative h-[50vh] bg-muted">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
          <div className="container mx-auto">
            <Link href="/projects" className="inline-flex items-center text-muted-foreground hover:text-primary mb-4 transition-colors">
              <ArrowLeft size={20} className="mr-2" /> Back to Projects
            </Link>
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-bold">{project.category}</span>
              <span className="text-foreground border-l border-border pl-3">{project.location}</span>
              <span className="text-foreground border-l border-border pl-3">{project.year}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">{project.title}</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-12">
        <div className="md:col-span-2 space-y-8">
          <FadeIn>
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {project.description}
            </p>
          </FadeIn>
          
          <FadeIn delay={0.2} className="bg-card p-8 rounded-xl border border-border">
            <h3 className="text-xl font-bold mb-6">Key Features</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.features.map((feature: string, i: number) => (
                <div key={i} className="flex items-center text-muted-foreground">
                  <CheckCircle2 className="text-primary mr-3" size={20} />
                  {feature}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        <div>
          <FadeIn delay={0.4} className="bg-secondary/50 p-6 rounded-xl border border-border sticky top-8">
            <h3 className="text-lg font-bold mb-4">Project Specs</h3>
            <dl className="space-y-4">
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Client</dt>
                <dd className="font-semibold">Confidential</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Duration</dt>
                <dd className="font-semibold">12 Months</dd>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <dt className="text-muted-foreground">Status</dt>
                <dd className="font-semibold text-green-600">Completed</dd>
              </div>
            </dl>
            <button className="w-full mt-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 rounded-md transition-colors">
              Request Similar Quote
            </button>
          </FadeIn>
        </div>
      </div>
    </main>
  );
}
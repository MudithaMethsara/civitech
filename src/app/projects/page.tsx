import { ProjectCard } from '@/components/project-card';
import { ProjectMap } from '@/components/project-map';
import Link from 'next/link';
import { Suspense } from 'react';
import { FadeIn } from '@/components/animations';
import { projects } from '@/lib/data';

async function ProjectResults({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  const { category } = await searchParams;
  const activeCategory = category || 'All';

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  const categories = ['All', 'Industrial', 'Commercial', 'Residential', 'Steel', 'Water', 'Institutional', 'Infrastructure'];

  return (
    <>
      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <Link
            key={cat}
            href={cat === 'All' ? '/projects' : `/projects?category=${cat}`}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === cat 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'bg-card text-card-foreground hover:bg-secondary border border-border'
            }`}
          >
            {cat}
          </Link>
        ))}
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            category={project.category}
            imageUrl={project.image}
          />
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No projects found in this category.
        </div>
      )}
    </>
  );
}

export default function ProjectsPage({ searchParams }: { searchParams: Promise<{ category?: string }> }) {
  return (
    <main className="min-h-screen bg-background py-12 text-foreground">
      <div className="container mx-auto px-4">
        <FadeIn className="mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of industrial, commercial, and residential projects delivered with excellence.
          </p>
        </FadeIn>

        <Suspense fallback={<div className="text-center py-20">Loading projects...</div>}>
          <ProjectResults searchParams={searchParams} />
        </Suspense>

        <FadeIn delay={0.2} className="mt-20">
          <h2 className="text-2xl font-bold mb-8">Project Locations</h2>
          <ProjectMap />
        </FadeIn>
      </div>
    </main>
  );
}
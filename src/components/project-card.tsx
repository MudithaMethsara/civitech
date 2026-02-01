import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
}

export function ProjectCard({ id, title, category, imageUrl }: ProjectCardProps) {
  return (
    <Link href={`/projects/${id}`} className="group block h-full">
      <div className="bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-all h-full flex flex-col">
        <div className="relative h-48 w-full overflow-hidden bg-muted">
           <img 
             src={imageUrl} 
             alt={title}
             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
           />
           <div className="absolute top-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
             {category}
           </div>
        </div>
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="font-bold text-lg mb-1 group-hover:text-primary transition-colors text-card-foreground">{title}</h3>
          <p className="text-muted-foreground text-sm mt-auto">View Details →</p>
        </div>
      </div>
    </Link>
  );
}
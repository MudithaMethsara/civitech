import { Award, Briefcase, Users, History, Target, Rocket } from 'lucide-react';
import { FadeIn, FadeInStagger, FadeInItem } from '@/components/animations';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background py-16 text-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16">
          
          <FadeIn className="space-y-16">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">About Civitech</h1>
              <p className="text-xl text-muted-foreground">Excellence in Construction since 2002</p>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed text-foreground/80">
                Civitech Constructions (pvt) Ltd was formerly known as Civitech Constructions,
                a wholly Sri Lanka owned partnership registered on 14th August 2002 under
                Business Name Ordinance (Cap.149) Incorporated by Business Name Statute No.
                4 of 1990. The Official change of name to Civitech Constructions (Pvt) Ltd was legally
                registered and incorporated with the Registrar of Companies on 20th April 2006.
                The company holds the membership of ICTAD and NCASL and graded as an C 4
                Contractor.
              </p>
              <p className="text-lg leading-relaxed text-foreground/80 mt-4">
                The company has the technical and the financial capabilities to handle all manner
                of civil engineering work and has successfully completed several major
                projects on schedule to the satisfaction of the clients in various parts in Sri Lanka.
              </p>
            </div>
          </FadeIn>

          <FadeInStagger className="grid md:grid-cols-2 gap-8">
            <FadeInItem className="bg-primary/5 border border-primary/20 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Target size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Target className="text-primary" size={24} />
                Vision
              </h3>
              <p className="text-xl italic text-foreground leading-relaxed">
                "To be One of a Quality Competitive Construction Company in Sri Lanka."
              </p>
            </FadeInItem>

            <FadeInItem className="bg-primary/5 border border-primary/20 p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket size={80} />
              </div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Rocket className="text-primary" size={24} />
                Mission
              </h3>
              <p className="text-lg text-foreground/90 leading-relaxed">
                "Civitech Constructions (Pvt)Ltd is committed to ensure the entire satisfaction
                of customer requirements Constructing quality products & reliable services at
                competitive prices."
              </p>
            </FadeInItem>
          </FadeInStagger>

          <FadeInStagger delay={0.2} className="grid md:grid-cols-2 gap-8">
            <FadeInItem className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                   <Award size={24} />
                </div>
                <h3 className="text-xl font-bold">Credentials</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• C4 Graded Contractor</li>
                <li>• ICTAD Registered</li>
                <li>• NCASL Member</li>
                <li>• ISO Standard Compliance</li>
              </ul>
            </FadeInItem>

            <FadeInItem className="bg-card p-6 rounded-xl shadow-sm border border-border">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary">
                   <Briefcase size={24} />
                </div>
                <h3 className="text-xl font-bold">Our Clients</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Brandix</li>
                <li>• Lanka Tiles PLC</li>
                <li>• HDFC Bank</li>
                <li>• Mahaweli Authority</li>
                <li>• National Water Supply & Drainage Board</li>
              </ul>
            </FadeInItem>
          </FadeInStagger>

          <FadeIn className="bg-card text-card-foreground border border-border rounded-2xl p-8 md:p-12">
             <div className="flex items-start gap-6">
                <History className="shrink-0 text-primary mt-1" size={32} />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Our Journey</h3>
                  <div className="space-y-6 border-l-2 border-primary/30 ml-2 pl-8 relative">
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-card bg-primary"></span>
                      <h4 className="font-bold text-lg text-primary">2002</h4>
                      <p className="text-muted-foreground">Established as a partnership firm.</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-card bg-primary"></span>
                      <h4 className="font-bold text-lg text-primary">2006</h4>
                      <p className="text-muted-foreground">Incorporated as a Private Limited Company.</p>
                    </div>
                    <div className="relative">
                      <span className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-card bg-primary"></span>
                      <h4 className="font-bold text-lg text-primary">Present</h4>
                      <p className="text-muted-foreground">A leading C4 contractor serving national & international clients.</p>
                    </div>
                  </div>
                </div>
             </div>
          </FadeIn>

        </div>
      </div>
    </main>
  );
}
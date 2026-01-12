import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            About Me
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-8">
            Results-Oriented Technology Leader
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I drive digital transformation and business growth through innovative data and cloud solutions 
            in the energy, industrial, and sustainability sector. Expert in defining and executing data strategies, 
            leading large-scale tech migrations, and building high-performing and motivated data teams.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Proven track record in leveraging AI/ML, advanced analytics, and robust data governance 
            to deliver measurable business value, operational efficiency, and compliance. Adept at 
            collaborating with executive leadership to align data initiatives with strategic objectives 
            and championing data as a key business asset.
          </p>
          
          {/* Languages */}
          <div className="mt-12 pt-8 border-t border-border">
            <h3 className="text-sm font-mono text-primary uppercase tracking-wider mb-4">Languages</h3>
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-primary text-primary-foreground">Italian (Native)</Badge>
              <Badge variant="secondary">English (C1)</Badge>
              <Badge variant="secondary">Spanish (B2)</Badge>
              <Badge variant="secondary">French (A2)</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

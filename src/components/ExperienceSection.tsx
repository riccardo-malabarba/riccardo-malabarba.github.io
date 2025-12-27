import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Head of Data & AI",
    company: "Veolia Italy",
    period: "Apr 2024 - Present",
    highlights: [
      "Built and mentored a high-performing team of 10+ data professionals, fostering a culture of innovation and continuous learning, reporting directly to the CIO.",
      "Defined and executed the AI and data roadmap, fully aligning with global corporate strategic objectives and digital transformation vision.",
      "Led cross-functional AI projects across multiple departments, coordinating resources and delivering high-impact AI use cases with measurable business outcomes.",
      "Oversaw the complete migration of the tech data stack to cloud solutions, improving data accessibility and increasing service uptime.",
      "Established robust data governance policies and cybersecurity, improving data quality and supporting internal/external audit requirements."
    ]
  },
  {
    title: "Head of Data Science",
    company: "Veolia Italy",
    period: "Jan 2023 - Apr 2024",
    highlights: [
      "Managed a portfolio of digital and data projects, delivering on-time and within budget, with measurable improvements in operational efficiency.",
      "Led the deployment of an AI-powered energy optimization tool, scaling adoption from Italy to multiple international business units, resulting in a 15% reduction in energy costs."
    ]
  },
  {
    title: "Digital Operations Specialist",
    company: "Veolia Italy",
    period: "Jan 2019 - Dec 2022",
    highlights: [
      "Developed and implemented a real-time energy management optimization tool, now deployed in over 15 energy facilities, driving significant cost savings and operational improvements."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Career
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
            Work Experience
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />
            
            {experiences.map((exp, index) => (
              <div key={index} className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:ml-0 md:mr-auto md:w-1/2' : 'md:pl-8 md:ml-auto md:w-1/2'} pl-8 md:pl-0`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-auto md:right-0 transform md:translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background" 
                     style={{ [index % 2 === 0 ? 'right' : 'left']: '-8px' }} />
                
                <Card className="bg-background border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge className="mb-3 bg-primary/10 text-primary border-0">{exp.period}</Badge>
                    <h3 className="text-xl font-bold text-foreground mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium mb-4">{exp.company}</p>
                    <ul className={`space-y-2 ${index % 2 === 0 ? 'md:text-left' : ''}`}>
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground leading-relaxed">
                          • {highlight}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

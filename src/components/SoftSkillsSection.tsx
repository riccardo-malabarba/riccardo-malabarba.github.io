import { Badge } from "@/components/ui/badge";
import { MessageSquare, Users, Lightbulb, Zap, Handshake } from "lucide-react";

const softSkills = [
  {
    icon: MessageSquare,
    title: "Strategic Communication",
    description: "Expert at translating complex technical concepts into actionable insights for executive leadership and cross-functional teams."
  },
  {
    icon: Users,
    title: "Collaborative Leadership",
    description: "Skilled in fostering teamwork across diverse groups including data professionals, engineers, and business stakeholders."
  },
  {
    icon: Lightbulb,
    title: "Analytical Problem-Solving",
    description: "Highly adept at leveraging analytical thinking to identify root causes and develop innovative solutions."
  },
  {
    icon: Zap,
    title: "Change Agility",
    description: "Demonstrates resilience in dynamic environments, quickly mastering new technologies to support digital transformation."
  },
  {
    icon: Handshake,
    title: "Stakeholder Management",
    description: "Proven ability to build trust and influence decision-making among C-level executives and cross-departmental teams."
  }
];

const SoftSkillsSection = () => {
  return (
    <section id="soft-skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Soft Skills
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Personal Strengths
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {softSkills.map((skill, index) => (
            <div 
              key={index} 
              className="group text-center p-8 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="inline-flex p-4 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                <skill.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">{skill.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SoftSkillsSection;

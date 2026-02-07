import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Database, Brain, Rocket, Briefcase, Shield } from "lucide-react";

const skills = [
  {
    icon: Users,
    title: "Leadership & Team Development",
    items: ["Team Building", "Talent Development", "Cross-functional Collaboration", "C-level Stakeholder Management", "Budget Management"]
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    items: ["Data Warehousing", "ETL Processes", "Informatica IDCS", "BigQuery", "SQL", "Looker Studio", "Power BI", "Data Fabric"]
  },
  {
    icon: Shield,
    title: "Data Strategy & Governance",
    items: ["Data Strategy Development", "Governance Frameworks", "GDPR/CCPA Compliance", "Data Quality Management", "KPI Definition"]
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    items: ["AI/ML Solution Design", "Predictive Analytics", "Computer Vision", "GenAI Integration", "Vertex AI", "Python (Expert)"]
  },
  {
    icon: Rocket,
    title: "Technology & Innovation",
    items: ["Cloud-native Solutions", "Kubernetes", "Docker", "DevSecOps", "CI/CD", "REST API", "IoT/Edge Computing", "Terraform"]
  },
  {
    icon: Briefcase,
    title: "Product Management",
    items: ["Agile/Scrum/Kanban", "Product Strategy", "Product Lifecycle", "Stakeholder Engagement"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <skill.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

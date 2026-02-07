import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Briefcase, Database, Rocket, Shield, Users } from "lucide-react";

const languages = [
  {
    name: "Italian",
    level: "Native",
    colors: ["bg-emerald-600", "bg-white", "bg-rose-600"],
  },
  {
    name: "English",
    level: "C1",
    colors: ["bg-red-600", "bg-white", "bg-blue-600"],
  },
  {
    name: "Spanish",
    level: "B2",
    colors: ["bg-red-600", "bg-yellow-400", "bg-red-600"],
  },
  {
    name: "French",
    level: "A2",
    colors: ["bg-blue-600", "bg-white", "bg-red-600"],
  },
];

const skills = [
  {
    icon: Users,
    title: "Leadership & Team Development",
    items: ["Team Building", "Talent Development", "Cross-functional Collaboration", "C-level Stakeholder Management", "Budget Management"],
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    items: ["Data Warehousing", "ETL Processes", "Informatica IDCS", "BigQuery", "SQL", "Looker Studio", "Power BI", "Data Fabric"],
  },
  {
    icon: Shield,
    title: "Data Strategy & Governance",
    items: ["Data Strategy Development", "Governance Frameworks", "GDPR/CCPA Compliance", "Data Quality Management", "KPI Definition"],
  },
  {
    icon: Brain,
    title: "Data Science & AI",
    items: ["AI/ML Solution Design", "Predictive Analytics", "Computer Vision", "GenAI Integration", "Vertex AI", "Python (Expert)"],
  },
  {
    icon: Rocket,
    title: "Technology & Innovation",
    items: ["Cloud-native Solutions", "Kubernetes", "Docker", "DevSecOps", "CI/CD", "REST API", "IoT/Edge Computing", "Terraform"],
  },
  {
    icon: Briefcase,
    title: "Product Management",
    items: ["Agile/Scrum/Kanban", "Product Strategy", "Product Lifecycle", "Stakeholder Engagement"],
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              About Me
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Results-Oriented Technology Leader
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
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
        </div>

        <div className="mt-12 space-y-10 max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            <h3 className="text-base font-bold text-foreground text-center">Languages</h3>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {languages.map((language) => (
                <div
                  key={language.name}
                  className="flex items-center justify-between rounded-lg border border-border/70 bg-background/60 px-3 py-2"
                >
                  <span className="flex items-center gap-2 text-sm font-semibold text-card-foreground">
                    <span className="flex items-center gap-1" aria-hidden="true">
                      {language.colors.map((color, index) => (
                        <span
                          key={`${language.name}-color-${index}`}
                          className={`h-2.5 w-2.5 rounded-[2px] border border-border/40 ${color}`}
                        />
                      ))}
                    </span>
                    {language.name}
                  </span>
                  <Badge variant="secondary" className="text-[11px]">{language.level}</Badge>
                </div>
              ))}
            </div>
          </div>

          <div id="skills">
            <div className="mb-4">
              <h3 className="text-base font-bold text-foreground text-center">Skills & Technologies</h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill) => (
                <Card key={skill.title} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <skill.icon className="h-5 w-5 text-primary" />
                      </div>
                      <CardTitle className="text-sm">{skill.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <Badge key={item} variant="secondary" className="text-xs">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

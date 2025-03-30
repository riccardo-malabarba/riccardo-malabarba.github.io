
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      category: "Data Engineering & Analytics",
      skills: [
        { name: "Data Warehousing", level: 90 },
        { name: "ETL Processes", level: 95 },
        { name: "Informatica IDCS", level: 85 },
        { name: "BigQuery", level: 95 },
        { name: "SQL", level: 95 },
        { name: "Data Visualization", level: 85 },
      ],
      badges: ["Google Looker Studio", "Power BI"]
    },
    {
      category: "Cloud & Infrastructure",
      skills: [
        { name: "GCP", level: 95 },
        { name: "Cloud Architecture", level: 90 },
        { name: "Data Migration", level: 85 },
        { name: "AWS", level: 60 },
        { name: "Azure", level: 60 },
      ],
      badges: []
    },
    {
      category: "DevSecOps",
      skills: [
        { name: "PaaS & Serverless Computing", level: 95 },
        { name: "GitLab", level: 90 },
        { name: "REST API Design", level: 85 },
        { name: "Kubernetes & Docker", level: 80 },
        { name: "IoT & Edge Computing", level: 80 },
        { name: "Terraform", level: 60 },
      ],
      badges: ["Cloud Run", "Load Balancing", "VPC"]
    },
    {
      category: "AI & Machine Learning",
      skills: [
        { name: "Python", level: 95 },
        { name: "Vertex AI", level: 80 },
        { name: "GenAI Integration", level: 85 },
      ],
      badges: []
    },
    {
      category: "Product Management",
      skills: [
        { name: "Agile Methodologies", level: 90 },
        { name: "Product Strategy", level: 90 },
        { name: "Product Planning", level: 85 },
      ],
      badges: ["Scrum", "Kanban"]
    },
    {
      category: "People & Portfolio Management",
      skills: [
        { name: "Team Leadership", level: 95 },
        { name: "Budget Management", level: 90 },
        { name: "Stakeholder Management", level: 90 }
      ],
      badges: []
    },
  ];

  return (
    <section id="skills" className="section-container bg-accent/50">
      <h2 className="section-title">Skills & Expertise</h2>
      <div className="section-subtitle">
        My professional toolkit for driving technological innovation
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="border border-border hover:shadow-md transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-primary">
                {category.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground text-sm">{skill.level}%</span>
                  </div>
                  <div className="skill-progress">
                    <div 
                      className="skill-progress-bar" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
              {category.badges.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {category.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="outline" className="bg-background">
                      {badge}
                    </Badge>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6 text-center">Languages</h3>
        <div className="flex flex-wrap justify-center gap-4">
          <Badge className="text-base py-2 px-4">Italian (Native)</Badge>
          <Badge className="text-base py-2 px-4">English (C1)</Badge>
          <Badge className="text-base py-2 px-4">Spanish (B2)</Badge>
        </div>
      </div>
    </section>
  );
};

export default Skills;

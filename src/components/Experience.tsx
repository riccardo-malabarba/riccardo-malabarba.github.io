
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Head of Data & AI",
      company: "Veolia Italy",
      period: "Apr 2024 - Present",
      description: [
        "Lead a team of 6 data professionals, reporting directly to the CIO",
        "Designed and maintained cloud-native architectures for data engineering, data platforms, web services, and full-stack applications",
        "Developed and implemented local data strategy, aligned with global business objectives, resulting in a full migration of the tech data stack to cloud solutions improving data accessibility and service uptime",
        "Oversee the development, implementation, and deployment strategy of AI solutions across the organization",
        "Managed stakeholder expectations by defining clear objectives, timelines, resources, and KPIs, leading to clients satisfaction and on-time project delivery",
        "Collaborate with cybersecurity and infrastructure teams to ensure data availability, reliability, and security"
      ]
    },
    {
      role: "Head of Data Science",
      company: "Veolia Italy",
      period: "Jan 2023 - Apr 2024",
      description: [
        "Managed a portfolio of digital and data projects, overseeing the entire lifecycle from development to deployment with a team of 3 data professionals",
        "Implemented cloud-based digital solutions to enhance energy performance across key contracts (hospitals, district heating systems, municipalities)",
        "Led the massive deployment of an AI-powered energy optimization tool, expanding from Italy to multiple international business units"
      ]
    },
    {
      role: "Digital Operations Specialist",
      company: "Veolia Italy",
      period: "Jan 2019 - Dec 2022",
      description: [
        "Developed and implemented an optimization tool for real-time energy management in over 15 energy facilities, starting from my master's thesis project, an AI algorithm that became an enterprise product"
      ]
    }
  ];

  return (
    <section id="experience" className="section-container">
      <h2 className="section-title">Work Experience</h2>
      <div className="section-subtitle">
        My professional journey in technology leadership and data innovation
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                  <div className="flex-shrink-0 p-3 rounded-full bg-primary/10 inline-flex">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="experience-role">{exp.role}</h3>
                    <p className="experience-company">{exp.company}</p>
                    <p className="experience-date">{exp.period}</p>
                  </div>
                </div>
                <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
                  {exp.description.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

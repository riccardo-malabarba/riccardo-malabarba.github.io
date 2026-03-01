import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

type ProjectReference = {
  type: string;
  url: string;
};

type Project = {
  title: string;
  description: string;
  technologies: string[];
  references?: ProjectReference[];
};

const projects: Project[] = [
  {
    title: "AI-Powered Real-Time Energy Efficiency Tool",
    description: "Developed an intelligent energy monitoring system using machine learning algorithms to optimize energy consumption in industrial facilities. Implemented predictive analytics that reduced energy waste by 25% through real-time anomaly detection and automated efficiency recommendations.",
    technologies: ["Python", "Google Cloud Platform", "IoT Platform", "Docker"],
  },
  {
    title: "Data & AI Governance Framework",
    description: "Designed and implemented a comprehensive governance framework for data and AI initiatives across multiple business units. Established data quality standards, compliance protocols, and ethical AI guidelines that ensured regulatory compliance and scalable AI adoption.",
    technologies: ["Data Governance", "GDPR Compliance", "AI Ethics", "Risk Management", "Policy Development"],
  },
  {
    title: "Cloud-Native Data Platform Transformation",
    description: "Led the migration and modernization of legacy data infrastructure to a cloud-native platform, enabling real-time analytics and AI capabilities. Coordinated cross-functional teams to deliver a scalable solution that improved data processing speed by 300%.",
    technologies: ["Microsoft Fabric", "Power BI", "Informatica IDCS", "BigQuery"],
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of data science and AI projects that demonstrate my expertise in transforming data into actionable insights.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                {project.references?.length ? (
                  <div className="p-6 pt-0 mt-auto">
                    <div className="flex flex-wrap gap-2">
                      {project.references.map((ref, refIndex) => (
                        <Button asChild variant="outline" size="sm" key={refIndex}>
                          <a href={ref.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="h-4 w-4 mr-2" />
                            {ref.type}
                          </a>
                        </Button>
                      ))}
                    </div>
                  </div>
                ) : null}
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;

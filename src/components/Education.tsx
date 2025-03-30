
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Award } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "MSc in Energy Engineering, cum Laude",
      institution: "Politecnico di Milano",
      period: "2017 - 2019",
      details: "Didactic branch \"Energy for Development\", with 6 month Erasmus at DTU Copenhagen. Final grade: 110L/110"
    },
    {
      degree: "BSc in Energy Engineering, cum Laude",
      institution: "Politecnico di Milano",
      period: "2014 - 2017",
      details: "Final grade: 110L/110"
    }
  ];

  const certifications = [
    {
      name: "PRINCE2® Foundation",
      issuer: "AXELOS Global Best Practice",
      year: "2023",
      details: ""
    },
    {
      name: "Master in Product Management",
      issuer: "Talent Garden",
      year: "2022",
      details: "Agile methodologies, team management, scrum, project planning, go-to-market strategies."
    },
    {
      name: "Energy Management Expert, Civil & Industrial (EGE)",
      issuer: "Cepas",
      year: "2022",
      details: "Energy management certification according to UNI CEI 11339."
    },
    {
      name: "Master in Big Data & Business Analytics",
      issuer: "24Ore Business School",
      year: "2020",
      details: "with SAS certification in VISUAL BUSINESS ANALYTICS 7.5/8.3"
    }
  ];

  return (
    <section id="education" className="section-container bg-accent/50">
      <h2 className="section-title">Education & Certifications</h2>
      <div className="section-subtitle">
        Academic background and professional development
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <BookOpen className="mr-3 h-6 w-6 text-primary" />
            Academic Education
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">{edu.period}</p>
                  <h4 className="text-xl font-semibold my-1">{edu.degree}</h4>
                  <p className="text-lg font-medium text-primary mb-2">{edu.institution}</p>
                  {edu.details && <p className="text-muted-foreground">{edu.details}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Award className="mr-3 h-6 w-6 text-primary" />
            Certifications & Courses
          </h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">{cert.year}</p>
                  <h4 className="text-xl font-semibold my-1">{cert.name}</h4>
                  <p className="text-lg font-medium text-primary mb-2">{cert.issuer}</p>
                  {cert.details && <p className="text-muted-foreground">{cert.details}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

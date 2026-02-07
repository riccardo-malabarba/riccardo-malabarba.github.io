import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "MSc in Energy Engineering",
    school: "Politecnico di Milano",
    period: "2017 - 2019",
    grade: "cum Laude (110L/110)",
    details: 'Didactic branch "Energy for Development", with 6 month Erasmus at DTU Copenhagen.'
  },
  {
    degree: "BSc in Energy Engineering",
    school: "Politecnico di Milano",
    period: "2014 - 2017",
    grade: "cum Laude (110L/110)",
    details: null
  }
];

const certifications = [
  {
    name: "PRINCE2® Foundation",
    issuer: "AXELOS Global Best Practice",
    year: "2023"
  },
  {
    name: "Master in Product Management",
    issuer: "Talent Garden",
    year: "2022"
  },
  {
    name: "Energy Management Expert (EGE)",
    issuer: "Cepas - UNI CEI 11339",
    year: "2022"
  },
  {
    name: "Master in Big Data & Business Analytics",
    issuer: "24Ore Business School + SAS Certification",
    year: "2020"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <div>
            <div className="mb-10">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Education
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                Academic Background
              </h2>
            </div>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-card-foreground">{edu.degree}</h3>
                        <p className="text-primary font-medium">{edu.school}</p>
                        <p className="text-sm text-muted-foreground mt-1">{edu.period}</p>
                        <Badge className="mt-2 bg-accent text-accent-foreground">{edu.grade}</Badge>
                        {edu.details && (
                          <p className="text-sm text-muted-foreground mt-3">{edu.details}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <div className="mb-10">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Certifications
              </Badge>
              <h2 className="text-3xl font-bold text-foreground">
                Professional Development
              </h2>
            </div>
            
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Award className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-card-foreground">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                      <Badge variant="secondary">{cert.year}</Badge>
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

export default EducationSection;

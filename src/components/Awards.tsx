
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      name: "G.S.E AWARD",
      issuer: "Comitato Leonardo and G.S.E.",
      year: "Sep 2021",
      details: "Presented at the presence of the President of Italy Sergio Mattarella"
    },
    {
      name: "NEW CHALLENGES FOR ENERGY AND INDUSTRY",
      issuer: "IEEE Italy Section",
      year: "Oct 2020",
      details: "For the master's thesis"
    },
    {
      name: "TROPHÉES PERFORMANCE AWARDS",
      issuer: "Veolia Environment",
      year: "Nov 2019",
      details: ""
    },
    {
      name: "BEST FRESHMEN OF THE YEAR",
      issuer: "Politecnico di Milano",
      year: "Oct 2015",
      details: ""
    }
  ];

  const softSkills = [
    {
      name: "Communication",
      description: "Proven ability to communicate complex technical concepts clearly and concisely to both technical and non-technical audiences."
    },
    {
      name: "Collaboration",
      description: "Experienced in working effectively within cross-functional teams, including data scientists, engineers, and business stakeholders."
    },
    {
      name: "Problem-Solving",
      description: "Adept at applying analytical and critical thinking skills to identify and solve data-related challenges."
    },
    {
      name: "Adaptability",
      description: "A quick learner who thrives in fast-paced environments and readily adapts to new technologies and methodologies."
    }
  ];

  return (
    <section id="awards" className="section-container">
      <h2 className="section-title">Awards & Recognition</h2>
      <div className="section-subtitle">
        Notable achievements and professional soft skills
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <div>
          <h3 className="text-2xl font-semibold mb-6 flex items-center">
            <Trophy className="mr-3 h-6 w-6 text-primary" />
            Awards & Honors
          </h3>
          <div className="space-y-6">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">{award.year}</p>
                  <h4 className="text-xl font-semibold my-1">{award.name}</h4>
                  <p className="text-lg font-medium text-primary mb-2">{award.issuer}</p>
                  {award.details && <p className="text-muted-foreground">{award.details}</p>}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Soft Skills</h3>
          <div className="space-y-6">
            {softSkills.map((skill, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3">{skill.name}</h4>
                  <p className="text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;

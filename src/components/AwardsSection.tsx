import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const awards = [
  {
    name: "G.S.E Award",
    issuer: "Comitato Leonardo and G.S.E.",
    year: "Sep 2021",
    description: "Awarded at the presence of the President of Italy Sergio Mattarella"
  },
  {
    name: "New Challenges for Energy and Industry",
    issuer: "IEEE Italy Section",
    year: "Oct 2020",
    description: "For the master's thesis"
  },
  {
    name: "Trophées Performance Awards",
    issuer: "Veolia Environment",
    year: "Nov 2019",
    description: null
  },
  {
    name: "Best Freshmen of the Year",
    issuer: "Politecnico di Milano",
    year: "Oct 2015",
    description: null
  }
];

const AwardsSection = () => {
  return (
    <section id="awards" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Recognition
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground">
            Awards & Honors
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {awards.map((award, index) => (
            <Card key={index} className="bg-background border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg group-hover:scale-110 transition-transform">
                    <Trophy className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="font-bold text-foreground">{award.name}</h3>
                      <Badge variant="secondary" className="shrink-0">{award.year}</Badge>
                    </div>
                    <p className="text-sm text-primary font-medium">{award.issuer}</p>
                    {award.description && (
                      <p className="text-sm text-muted-foreground mt-2">{award.description}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;

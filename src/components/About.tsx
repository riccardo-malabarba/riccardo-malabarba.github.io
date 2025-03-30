
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Code, Database, Users } from "lucide-react";

const About = () => {
  const coreStrengths = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "Data Engineering",
      description: "Expert in designing and implementing data platforms and ETL processes in cloud environments."
    },
    {
      icon: <Brain className="h-8 w-8 text-primary" />,
      title: "AI Integration",
      description: "Skilled in implementing AI/ML solutions and GenAI to solve business challenges."
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Cloud Architecture",
      description: "Experienced in designing and maintaining cloud-native architectures and DevSecOps practices."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Team Leadership",
      description: "Proven track record in leading technical teams and managing stakeholder relationships."
    }
  ];

  return (
    <section id="about" className="section-container">
      <h2 className="section-title">About Me</h2>
      <div className="section-subtitle">
        Bridging the gap between business needs and technical solutions
      </div>

      <div className="flex flex-col md:flex-row items-center max-w-4xl mx-auto mb-16 space-y-6 md:space-y-0 md:space-x-12">
        <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg">
          <img 
            src={`https://images.unsplash.com/photo-1581092795360-fd1ca04f0952`} 
            alt="Riccardo Malabarba" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-6">
            Highly motivated and results-driven technology leader with +7 years of experience in the energy and sustainability sector. 
            I specialize in architecting and implementing cloud-native solutions, managing data platforms, and leading cross-functional 
            teams to deliver innovative products.
          </p>
          <p className="text-lg leading-relaxed">
            With expertise in AI/ML, data engineering, and agile methodologies, I'm passionate about building scalable, secure, 
            and user-centric solutions that solve complex challenges. I thrive in dynamic and fast-paced environments and am 
            always eager to contribute to impactful projects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {coreStrengths.map((strength, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow bg-card border border-border hover:border-primary/20">
            <CardContent className="flex flex-col items-center text-center p-6">
              <div className="mb-4 p-3 rounded-full bg-accent">
                {strength.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{strength.title}</h3>
              <p className="text-muted-foreground">{strength.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default About;


import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "riccardo.malabarba7@gmail.com"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/rmalabarba",
      link: "https://linkedin.com/in/rmalabarba"
    },
    {
      icon: <Github className="h-6 w-6" />,
      label: "GitHub",
      value: "github.com/riccardo.malabarba",
      link: "https://github.com/riccardo-malabarba"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Milan, Italy",
      link: null
    }
  ];

  return (
    <section id="contact" className="section-container bg-accent/50">
      <h2 className="section-title">Get In Touch</h2>
      <div className="section-subtitle">
        Interested in collaboration? Let's connect!
      </div>

      <div className="max-w-4xl mx-auto">
        <Card className="border border-border shadow-md">
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 p-2 rounded-full bg-primary/10 mr-4">
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">{info.label}</p>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-lg font-medium hover:text-primary transition-colors"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-lg font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="w-full">
                    Download Resume
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-center p-6 bg-accent rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Open to Opportunities</h3>
                  <p className="text-muted-foreground mb-6">
                    I'm currently exploring new challenges in technology leadership, 
                    particularly in areas related to data engineering, AI implementation, 
                    and sustainable tech solutions.
                  </p>
                  <Button variant="outline" size="lg" asChild>
                    <a href="mailto:riccardo.malabarba7@gmail.com">
                      <Mail className="mr-2 h-4 w-4" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;

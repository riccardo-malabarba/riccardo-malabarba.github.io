import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ExternalLink, Linkedin, Mic, Sparkles, Trophy } from "lucide-react";

const highlights = [
  {
    title: "My Interview at Radio24",
    description: "Listen to my interview during the NetZero Summit 2025, where I've talked about data & AI applied in the energy efficiency sector.",
    category: "Podcast",
    icon: Mic,
    embed: "https://open.spotify.com/embed/episode/6GZHVQTMzzyaHKI6O2ifjt",
    links: [
      {
        label: "LinkedIn",
        href: "",
        icon: Linkedin,
      },
      {
        label: "External Site",
        href: "https://open.spotify.com/episode/6GZHVQTMzzyaHKI6O2ifjt?si=m-GphOsTRmarExEqQNT6RQ&nd=1&dlsi=c09787658ccf4bcc",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Awarded AI Leader Under 35",
    description: "Recognized as an AI leader under 35 by IKN, during the CAIO (Chief AI Officer) conference in Milan.",
    category: "Award",
    icon: Sparkles,
    imagePlaceholder: "IKN Award Photo",
    links: [
      {
        label: "LinkedIn",
        href: "",
        icon: Linkedin,
      },
      {
        label: "External Site",
        href: "",
        icon: ExternalLink,
      },
    ],
  },
  {
    title: "Award with President Mattarella",
    description: "Awarded at the presence of the President of Italy, Sergio Mattarella.",
    category: "Honor",
    icon: Trophy,
    imagePlaceholder: "Award Ceremony",
    links: [
      {
        label: "LinkedIn",
        href: "",
        icon: Linkedin,
      },
      {
        label: "External Site",
        href: "",
        icon: ExternalLink,
      },
    ],
  },
];

const HighlightsSection = () => {
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!api || isPaused) {
      return;
    }

    const interval = window.setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => window.clearInterval(interval);
  }, [api, isPaused]);

  return (
    <section id="highlights" className="relative py-20 bg-background overflow-hidden">
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Highlights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of my latests achievements.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Carousel
            setApi={setApi}
            opts={{ align: "start", loop: true }}
            className="relative max-w-6xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <CarouselContent>
              {highlights.map((highlight, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full"
                  >
                    <Card className="group h-full border-border/60 bg-card/80 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                    <CardHeader className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs uppercase tracking-wide">
                          {highlight.category}
                        </Badge>
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <highlight.icon className="h-5 w-5" />
                        </div>
                      </div>
                      <CardTitle className="text-xl leading-tight">{highlight.title}</CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {highlight.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col gap-4">
                      {highlight.imagePlaceholder ? (
                        <div className="flex h-40 items-center justify-center rounded-lg border border-dashed border-border/70 bg-muted/30 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                          {highlight.imagePlaceholder}
                        </div>
                      ) : null}
                      {highlight.embed ? (
                        <div className="overflow-hidden rounded-lg border border-border/60 bg-background">
                          <iframe
                            src={highlight.embed}
                            title="Spotify podcast episode"
                            className="w-full h-[152px]"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            loading="lazy"
                          />
                        </div>
                      ) : null}
                      <div className="flex flex-wrap gap-2">
                        {highlight.links?.map((link, linkIndex) =>
                          link.href ? (
                            <Button asChild variant="outline" size="sm" className="w-fit" key={linkIndex}>
                              <a href={link.href} target="_blank" rel="noopener noreferrer">
                                <link.icon className="h-4 w-4 mr-2" />
                                {link.label}
                              </a>
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="w-fit" disabled key={linkIndex}>
                              <link.icon className="h-4 w-4 mr-2" />
                              {link.label}
                            </Button>
                          ),
                        )}
                      </div>
                    </CardContent>
                  </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
          <p className="mt-4 text-center text-xs text-muted-foreground md:hidden">
            Swipe to explore highlights
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HighlightsSection;

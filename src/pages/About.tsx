import { CheckCircle2, Target, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To empower businesses with innovative technology solutions that drive growth and success in the digital age."
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "A diverse team of skilled professionals dedicated to delivering excellence in every project we undertake."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality, ensuring your business stays ahead of the curve."
    }
  ];

  const whyChooseUs = [
    "Industry-leading expertise in modern web technologies",
    "Custom solutions tailored to your business needs",
    "Proven track record of successful project delivery",
    "Transparent communication throughout the project lifecycle",
    "Competitive pricing with exceptional value",
    "Post-launch support and maintenance",
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
              About AAK TEK
            </h1>
            <p className="text-xl opacity-90 animate-fade-in-up [animation-delay:200ms]">
              We are a forward-thinking technology company committed to transforming 
              businesses through innovative digital solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            {/* Who We Are */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                AAK TEK is a leading technology service provider specializing in web development, 
                cloud solutions, and digital transformation. Founded with a vision to bridge the 
                gap between businesses and technology, we've grown into a trusted partner for 
                companies seeking to thrive in the digital landscape.
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-card border card-hover animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>

            {/* Why Choose Us */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {whyChooseUs.map((reason, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-muted-foreground">{reason}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Efficiency Section */}
            <div className="bg-muted/50 rounded-lg p-8 animate-fade-in-up">
              <h2 className="text-3xl font-bold mb-6">Our Efficiency</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We pride ourselves on delivering projects efficiently without compromising quality. 
                Our streamlined processes and agile methodology ensure:
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong>30% faster delivery</strong> compared to industry standards</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong>99% client satisfaction</strong> rate across all projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong>Real-time updates</strong> keeping you informed every step of the way</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">→</span>
                  <span><strong>Scalable solutions</strong> that grow with your business</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

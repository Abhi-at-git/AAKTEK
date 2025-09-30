import ServiceCard from "@/components/ServiceCard";
import { Code, Cloud, Smartphone, Database, Shield, Paintbrush } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      icon: Code,
      packageDetails: [
        "Responsive design for all devices",
        "SEO optimization",
        "Performance optimization",
        "Content Management System",
        "3 months free maintenance",
      ],
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: Cloud,
      packageDetails: [
        "Cloud architecture design",
        "AWS/Azure setup and configuration",
        "Database migration",
        "Auto-scaling implementation",
        "24/7 monitoring",
      ],
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      icon: Smartphone,
      packageDetails: [
        "iOS and Android development",
        "Cross-platform with React Native",
        "App Store deployment",
        "Push notifications",
        "Analytics integration",
      ],
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and administration",
      icon: Database,
      packageDetails: [
        "Database schema design",
        "Query optimization",
        "Backup and recovery setup",
        "Data migration services",
        "Performance tuning",
      ],
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions and audits",
      icon: Shield,
      packageDetails: [
        "Security audit and assessment",
        "Penetration testing",
        "SSL/TLS implementation",
        "Vulnerability scanning",
        "Security best practices training",
      ],
    },
    {
      title: "UI/UX Design",
      description: "Beautiful and intuitive user interface designs",
      icon: Paintbrush,
      packageDetails: [
        "User research and analysis",
        "Wireframing and prototyping",
        "High-fidelity mockups",
        "Design system creation",
        "Usability testing",
      ],
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Our Services
            </h1>
            <p className="text-xl opacity-90 animate-fade-in-up [animation-delay:200ms]">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard {...service} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold">Don't See What You Need?</h2>
            <p className="text-lg text-muted-foreground">
              We offer custom solutions for unique requirements. Let's discuss your project!
            </p>
            <a href="/contact">
              <button className="mt-4 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

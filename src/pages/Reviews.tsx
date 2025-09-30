import ReviewCard from "@/components/ReviewCard";

const Reviews = () => {
  const reviews = [
    {
      clientName: "Sarah Johnson",
      projectTitle: "E-Commerce Platform",
      review: "AAK TEK transformed our outdated website into a modern e-commerce platform. Sales increased by 150% in the first quarter! Their attention to detail and communication throughout the project was exceptional.",
      rating: 5,
      workLink: "#",
    },
    {
      clientName: "Michael Chen",
      projectTitle: "Cloud Migration",
      review: "The team successfully migrated our entire infrastructure to AWS with zero downtime. Their expertise in cloud architecture saved us 40% on operational costs. Highly professional and knowledgeable!",
      rating: 5,
      workLink: "#",
    },
    {
      clientName: "Emily Rodriguez",
      projectTitle: "Mobile App Development",
      review: "Our fitness tracking app was delivered ahead of schedule and exceeded all expectations. The UI/UX is intuitive and our users love it. AAK TEK provided excellent post-launch support as well.",
      rating: 5,
      workLink: "#",
    },
    {
      clientName: "David Thompson",
      projectTitle: "Corporate Website Redesign",
      review: "Working with AAK TEK was a pleasure. They took the time to understand our brand and created a website that perfectly represents our company. The SEO improvements have already started showing results.",
      rating: 4,
      workLink: "#",
    },
    {
      clientName: "Lisa Anderson",
      projectTitle: "Database Optimization",
      review: "Our application was running slow until AAK TEK optimized our database. Query performance improved by 10x! They also implemented a robust backup system that gives us peace of mind.",
      rating: 5,
      workLink: "#",
    },
    {
      clientName: "James Wilson",
      projectTitle: "Custom CRM System",
      review: "AAK TEK built us a custom CRM that integrated perfectly with our existing tools. The automation features have saved our team countless hours. Great ROI and ongoing support has been fantastic.",
      rating: 5,
      workLink: "#",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
              Client Reviews
            </h1>
            <p className="text-xl opacity-90 animate-fade-in-up [animation-delay:200ms]">
              See what our clients say about working with us
            </p>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Team Members" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;

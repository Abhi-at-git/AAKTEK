import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/aaktek-logo.png";
import heroImage from "@/assets/hero-bg.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[calc(100vh-8rem)]">
      {/* Hero Section */}
      <section
        className="relative min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Logo Side */}
            <div className="flex justify-center md:justify-start animate-fade-in-up">
              <img
                src={logo}
                alt="AAK TEK Logo"
                className="w-64 h-64 object-contain drop-shadow-2xl"
              />
            </div>

            {/* Content Side */}
            <div className="space-y-6 animate-fade-in-up [animation-delay:200ms]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with
                <span className="text-gradient block mt-2">
                  Cutting-Edge Technology
                </span>
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                We deliver innovative tech solutions that drive growth, efficiency, and success. 
                From web development to cloud services, we're your partner in digital transformation.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button
                  size="lg"
                  variant="hero"
                  onClick={() => navigate("/contact")}
                >
                  Get Started Now
                </Button>
                <Button
                  size="lg"
                  variant="heroOutline"
                  onClick={() => navigate("/contact")}
                >
                  Book a Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate("/services")}
                >
                  View All Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Team",
                description: "Seasoned professionals with years of industry experience"
              },
              {
                title: "Quality Assured",
                description: "Rigorous testing and quality control for every project"
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your technical needs"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg bg-card card-hover"
              >
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

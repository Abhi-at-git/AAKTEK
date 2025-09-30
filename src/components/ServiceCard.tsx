import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  packageDetails: string[];
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, packageDetails, icon: Icon }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  return (
    <Card
      className="card-hover relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className="mb-2 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      {isHovered && (
        <CardContent className="animate-fade-in-up">
          <div className="space-y-2">
            <p className="font-semibold text-sm">Package Includes:</p>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {packageDetails.map((detail, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary">✓</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      )}

      <CardFooter className="gap-2 flex-wrap">
        <Button
          variant="outline"
          size="sm"
          onClick={() => navigate("/contact")}
        >
          Take Demo
        </Button>
        <Button
          size="sm"
          onClick={() => navigate("/payment")}
        >
          Buy Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

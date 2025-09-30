import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ReviewCardProps {
  clientName: string;
  projectTitle: string;
  review: string;
  rating: number;
  workLink?: string;
}

const ReviewCard = ({ clientName, projectTitle, review, rating, workLink }: ReviewCardProps) => {
  return (
    <Card className="card-hover">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{projectTitle}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{clientName}</p>
          </div>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={i < rating ? "fill-primary text-primary" : "text-muted"}
              />
            ))}
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">{review}</p>
        {workLink && (
          <Button variant="link" className="p-0 h-auto" asChild>
            <a href={workLink} target="_blank" rel="noopener noreferrer">
              View Work →
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ReviewCard;

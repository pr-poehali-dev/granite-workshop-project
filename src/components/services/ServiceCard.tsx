
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import { ServiceCardProps } from "./types";

const ServiceCard = ({ title, description, imageSrc, imageAlt, content, price }: ServiceCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-48 bg-muted rounded-md mb-4 overflow-hidden">
          <img 
            src={imageSrc} 
            alt={imageAlt} 
            className="w-full h-full object-cover"
          />
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          {content}
        </p>
        {price && (
          <p className="text-lg font-semibold text-primary">
            от {price} руб.
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Подробнее <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;

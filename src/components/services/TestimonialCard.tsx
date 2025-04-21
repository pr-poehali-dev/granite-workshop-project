
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, StarHalf } from "lucide-react";
import { TestimonialProps } from "./types";

const TestimonialCard = ({ name, location, date, content, rating, avatarSrc }: TestimonialProps) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-yellow-400 text-yellow-400" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <Card className="h-full flex flex-col">
      <CardHeader className="pb-2 flex items-start space-x-4">
        <Avatar>
          <AvatarImage src={avatarSrc} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{location}</p>
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm italic">"{content}"</p>
      </CardContent>
      <CardFooter className="flex justify-between border-t pt-4">
        <div className="flex space-x-1">
          {renderStars()}
        </div>
        <p className="text-xs text-muted-foreground">{date}</p>
      </CardFooter>
    </Card>
  );
};

export default TestimonialCard;

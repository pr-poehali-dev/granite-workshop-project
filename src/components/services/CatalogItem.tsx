
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CatalogItemProps } from "./types";
import { ShoppingCart } from "lucide-react";

const CatalogItem = ({ title, description, price, imageSrc, category, popular }: CatalogItemProps) => {
  return (
    <Card className="h-full flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative">
        <div className="h-48 w-full overflow-hidden">
          <img src={imageSrc} alt={title} className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" />
        </div>
        {popular && (
          <Badge className="absolute top-2 right-2 bg-red-500 hover:bg-red-600">
            Популярный
          </Badge>
        )}
        <Badge className="absolute bottom-2 left-2" variant="outline">
          {category}
        </Badge>
      </div>
      <CardHeader className="pb-2">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-xl font-bold text-primary">{price} руб.</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CatalogItem;

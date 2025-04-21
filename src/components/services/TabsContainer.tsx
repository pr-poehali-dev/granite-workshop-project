
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ServiceCategory } from "./types";

interface TabsContainerProps {
  categories: ServiceCategory[];
}

const TabsContainer = ({ categories }: TabsContainerProps) => {
  return (
    <Tabs defaultValue={categories[0]?.id} className="w-full">
      <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
        {categories.map((category) => (
          <TabsTrigger key={category.id} value={category.id}>
            {category.label}
          </TabsTrigger>
        ))}
      </TabsList>
      
      {categories.map((category) => (
        <TabsContent key={category.id} value={category.id}>
          {category.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabsContainer;

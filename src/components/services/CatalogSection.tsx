
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CatalogItem from "./CatalogItem";
import { CatalogItemProps } from "./types";
import SectionHeader from "./SectionHeader";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const catalogItems: CatalogItemProps[] = [
  // Памятники
  {
    title: "Памятник из гранита «Стандарт»",
    description: "Одинарный памятник из черного гранита",
    price: "15 000",
    imageSrc: "/placeholder.svg",
    category: "Памятники",
    popular: true
  },
  {
    title: "Памятник из гранита «Элит»",
    description: "Фигурный памятник с гравировкой",
    price: "25 000",
    imageSrc: "/placeholder.svg",
    category: "Памятники"
  },
  {
    title: "Памятник из гранита «Семейный»",
    description: "Двойной памятник для семейного захоронения",
    price: "35 000",
    imageSrc: "/placeholder.svg",
    category: "Памятники",
    popular: true
  },
  {
    title: "Памятник из мрамора «Классик»",
    description: "Классический памятник из белого мрамора",
    price: "18 000",
    imageSrc: "/placeholder.svg",
    category: "Памятники"
  },
  
  // Благоустройство
  {
    title: "Ограда металлическая «Стандарт»",
    description: "Простая металлическая ограда с покраской",
    price: "12 000",
    imageSrc: "/placeholder.svg",
    category: "Благоустройство"
  },
  {
    title: "Ограда гранитная «Премиум»",
    description: "Ограда из черного гранита",
    price: "45 000",
    imageSrc: "/placeholder.svg",
    category: "Благоустройство",
    popular: true
  },
  {
    title: "Укладка плитки (1 кв.м)",
    description: "Тротуарная плитка с установкой",
    price: "2 500",
    imageSrc: "/placeholder.svg",
    category: "Благоустройство"
  },
  {
    title: "Столик и лавочка гранитные",
    description: "Комплект из гранита",
    price: "20 000",
    imageSrc: "/placeholder.svg",
    category: "Благоустройство"
  },
  
  // Реставрация
  {
    title: "Очистка и полировка памятника",
    description: "Профессиональная очистка и полировка",
    price: "5 000",
    imageSrc: "/placeholder.svg",
    category: "Реставрация"
  },
  {
    title: "Обновление гравировки",
    description: "Восстановление портрета и надписей",
    price: "3 500",
    imageSrc: "/placeholder.svg",
    category: "Реставрация",
    popular: true
  },
  {
    title: "Полная реставрация памятника",
    description: "Комплексное восстановление",
    price: "12 000",
    imageSrc: "/placeholder.svg",
    category: "Реставрация"
  },
  {
    title: "Ремонт ограды",
    description: "Восстановление и покраска",
    price: "8 000",
    imageSrc: "/placeholder.svg",
    category: "Реставрация"
  }
];

const CatalogSection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const categories = [...new Set(catalogItems.map(item => item.category))];
  
  const filteredItems = (category: string) => {
    return catalogItems
      .filter(item => item.category === category)
      .filter(item => 
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
  };

  return (
    <section id="catalog" className="py-16">
      <div className="container mx-auto px-4 md:px-8">
        <SectionHeader 
          title="Полный каталог"
          description="Выберите категорию и подходящий вариант из нашего каталога"
        />
        
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <Input
              type="text"
              placeholder="Поиск по каталогу..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-1 top-1.5"
                onClick={() => setSearchTerm("")}
              >
                Очистить
              </Button>
            )}
          </div>
        </div>
        
        <Tabs defaultValue={categories[0]} className="w-full">
          <TabsList className="grid w-full" style={{ gridTemplateColumns: `repeat(${categories.length}, 1fr)` }}>
            {categories.map(category => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {categories.map(category => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                {filteredItems(category).length > 0 ? (
                  filteredItems(category).map((item, index) => (
                    <CatalogItem key={index} {...item} />
                  ))
                ) : (
                  <div className="col-span-full text-center py-10">
                    <p className="text-muted-foreground">Ничего не найдено. Попробуйте изменить параметры поиска.</p>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default CatalogSection;

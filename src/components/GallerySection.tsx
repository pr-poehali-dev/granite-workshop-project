
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Dialog,
  DialogContent,
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    title: "Вертикальный памятник из черного гранита",
    description: "Классический одинарный памятник с гравировкой и цветником",
    image: "/placeholder.svg",
    category: "single"
  },
  {
    id: 2,
    title: "Двойной мемориальный комплекс",
    description: "Семейный памятник с установкой ограды и плитки",
    image: "/placeholder.svg",
    category: "double"
  },
  {
    id: 3,
    title: "Эксклюзивный памятник с ангелом",
    description: "Художественный мемориал с объемной скульптурой",
    image: "/placeholder.svg",
    category: "exclusive"
  },
  {
    id: 4,
    title: "Гранитный комплекс с оградой",
    description: "Полное благоустройство места захоронения",
    image: "/placeholder.svg",
    category: "complex"
  },
  {
    id: 5,
    title: "Памятник из красного гранита",
    description: "Вертикальный памятник из красного карельского гранита",
    image: "/placeholder.svg",
    category: "single"
  },
  {
    id: 6,
    title: "Мемориальный комплекс для военного",
    description: "Тематический памятник с военной символикой",
    image: "/placeholder.svg",
    category: "exclusive"
  },
];

const GallerySection = () => {
  const [filter, setFilter] = useState("all");
  const [openImageId, setOpenImageId] = useState<number | null>(null);
  
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
    
  const currentImageIndex = openImageId 
    ? galleryItems.findIndex(item => item.id === openImageId)
    : -1;
    
  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setOpenImageId(galleryItems[currentImageIndex - 1].id);
    } else {
      setOpenImageId(galleryItems[galleryItems.length - 1].id);
    }
  };
  
  const handleNextImage = () => {
    if (currentImageIndex < galleryItems.length - 1) {
      setOpenImageId(galleryItems[currentImageIndex + 1].id);
    } else {
      setOpenImageId(galleryItems[0].id);
    }
  };

  return (
    <section id="gallery" className="py-16 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-3 text-center">Наши работы</h2>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Примеры готовых памятников и мемориальных комплексов, изготовленных нашими мастерами
        </p>
        
        <div className="flex justify-center mb-8 space-x-2 flex-wrap">
          <Button 
            variant={filter === "all" ? "default" : "outline"} 
            className="mb-2"
            onClick={() => setFilter("all")}
          >
            Все работы
          </Button>
          <Button 
            variant={filter === "single" ? "default" : "outline"} 
            className="mb-2"
            onClick={() => setFilter("single")}
          >
            Одинарные
          </Button>
          <Button 
            variant={filter === "double" ? "default" : "outline"} 
            className="mb-2"
            onClick={() => setFilter("double")}
          >
            Двойные
          </Button>
          <Button 
            variant={filter === "exclusive" ? "default" : "outline"} 
            className="mb-2"
            onClick={() => setFilter("exclusive")}
          >
            Эксклюзивные
          </Button>
          <Button 
            variant={filter === "complex" ? "default" : "outline"} 
            className="mb-2"
            onClick={() => setFilter("complex")}
          >
            Комплексы
          </Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <div 
              key={item.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover-scale cursor-pointer"
              onClick={() => setOpenImageId(item.id)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center p-12 bg-white rounded-lg shadow-sm">
            <p className="text-lg text-muted-foreground">По выбранному фильтру работы не найдены</p>
          </div>
        )}
        
        <div className="text-center mt-10">
          <Button>
            Смотреть все работы
          </Button>
        </div>
      </div>
      
      <Dialog open={openImageId !== null} onOpenChange={(open) => !open && setOpenImageId(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background/95 backdrop-blur-sm">
          <DialogClose className="absolute right-4 top-4 z-10">
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
              <span className="sr-only">Закрыть</span>
            </Button>
          </DialogClose>
          
          {openImageId !== null && currentImageIndex >= 0 && (
            <div className="relative">
              <div className="flex items-center justify-center p-4 sm:p-8">
                <img 
                  src={galleryItems[currentImageIndex].image} 
                  alt={galleryItems[currentImageIndex].title} 
                  className="max-h-[70vh] object-contain"
                />
              </div>
              
              <div className="bg-background p-4">
                <DialogTitle className="text-xl mb-2">
                  {galleryItems[currentImageIndex].title}
                </DialogTitle>
                <DialogDescription>
                  {galleryItems[currentImageIndex].description}
                </DialogDescription>
              </div>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute left-2 top-1/2 -translate-y-1/2"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevImage();
                }}
              >
                <ChevronLeft className="h-6 w-6" />
                <span className="sr-only">Предыдущее изображение</span>
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNextImage();
                }}
              >
                <ChevronRight className="h-6 w-6" />
                <span className="sr-only">Следующее изображение</span>
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default GallerySection;

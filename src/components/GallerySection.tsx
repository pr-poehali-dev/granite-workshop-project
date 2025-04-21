
import { useState } from "react";
import { Button } from "@/components/ui/button";
import GalleryFilter from "./gallery/GalleryFilter";
import GalleryList from "./gallery/GalleryList";
import GalleryModal from "./gallery/GalleryModal";
import { galleryItems, GalleryItemType } from "./gallery/types";

const GallerySection = () => {
  const [filter, setFilter] = useState("all");
  const [openImageId, setOpenImageId] = useState<number | null>(null);
  
  const filteredItems = filter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);
    
  const currentImageIndex = openImageId 
    ? galleryItems.findIndex(item => item.id === openImageId)
    : -1;
  
  const currentItem: GalleryItemType | null = 
    currentImageIndex >= 0 ? galleryItems[currentImageIndex] : null;
    
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
        
        <GalleryFilter activeFilter={filter} onFilterChange={setFilter} />
        
        <GalleryList items={filteredItems} onItemClick={setOpenImageId} />
        
        <div className="text-center mt-10">
          <Button>
            Смотреть все работы
          </Button>
        </div>
      </div>
      
      <GalleryModal
        isOpen={openImageId !== null}
        onClose={() => setOpenImageId(null)}
        currentItem={currentItem}
        onPrevious={handlePrevImage}
        onNext={handleNextImage}
      />
    </section>
  );
};

export default GallerySection;

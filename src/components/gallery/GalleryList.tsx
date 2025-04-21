
import GalleryItem from "./GalleryItem";
import { GalleryItemType } from "./types";

interface GalleryListProps {
  items: GalleryItemType[];
  onItemClick: (id: number) => void;
}

const GalleryList = ({ items, onItemClick }: GalleryListProps) => {
  if (items.length === 0) {
    return (
      <div className="text-center p-12 bg-white rounded-lg shadow-sm">
        <p className="text-lg text-muted-foreground">По выбранному фильтру работы не найдены</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <GalleryItem
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          onClick={() => onItemClick(item.id)}
        />
      ))}
    </div>
  );
};

export default GalleryList;
